import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";
import type BasePaginationDataEntity from "@schoolify/core/types/core/api/response";
import type { BaseResponseEntity } from "@schoolify/core/types/core/api/response";
import { getImpersonateTokenCookie } from "@schoolify/core/utilities/impersonate";

import {
  useImpersonationStore,
  useNotificationStore,
} from "@schoolify/core/store";

import Cookies from "js-cookie";

// ---------------------------
// Base URL
// ---------------------------
const BASE_URL = "https://schoolify.ir/api/v1";
// const BASE_URL = "https://localhost:7251/api/v1";

// ---------------------------
// Helpers
// ---------------------------
function getHeaders(): HeadersInit {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const token = Cookies.get("authToken");
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const impersonateToken = Cookies.get("impersonateToken");
  if (impersonateToken) headers["Impersonate-Token"] = impersonateToken;

  return headers;
}

function handleImpersonation(isImpersonationHeader?: string | null) {
  useImpersonationStore
    .getState()
    .setImpersonating(isImpersonationHeader === "true");
}

function handleSuccessNotification() {
  useNotificationStore
    .getState()
    .setNotification(["عملیات با موفقیت انجام شد"], "success");
}

function handleError(error: any) {
  const errors =
    error?.response?.data?.errors ??
    (error ? [error] : ["خطای ناشناخته‌ای رخ داده است"]);
  useNotificationStore.getState().setNotification(errors, "error");
  return error;
}

// ---------------------------
// Generic fetch helper
// ---------------------------
async function request<T>(
  url: string,
  options: RequestInit
): Promise<BaseResponseEntity<T>> {
  try {
    const cookieImpersonateToken = getImpersonateTokenCookie();
    if (cookieImpersonateToken) {
      options.headers = {
        ...options.headers,
        "Impersonate-Token": cookieImpersonateToken,
      };
    }

    const response = await fetch(url, options);

    if (response.status == 401) {
      throw new Error("401");
    }
    if (response.status == 403) {
      throw new Error("شما مجوز استفاده از این قسمت را ندارید");
    }
    if (response.status == 404) {
      throw new Error("اطلاعاتی یافت نشد");
    }
    if (response.status >= 500) {
      throw new Error("خطای سرور");
    }
    const isImpersonation = response.headers.get("is-impersonation");
    handleImpersonation(isImpersonation);

    const data = (await response.json()) as BaseResponseEntity<T>;

    if (response.ok) {
      if (options.method?.toLowerCase() !== "get") {
        handleSuccessNotification();
      }
    } else {
      handleError(data.errors);
    }

    return data;
  } catch (err: any) {
    if (err.message !== "401") handleError(err.message);
    const error: BaseResponseEntity<T> = {
      isSuccess: false,
      errors: [err],
      data: null,
      errorDetails: [
        {
          __public__: err,
        },
      ],
      isExceptionThrown: true,
      message: "",
      requestDate: new Date().toISOString(),
      responseDate: new Date().toISOString(),
      statusCode: 500,
    };
    return error;
  }
}

// ---------------------------
// CRUD Functions
// ---------------------------
export async function postData<T>(
  endpoint: string,
  data: any
): Promise<BaseResponseEntity<T>> {
  const res = await request<T>(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });

  return res;
}

export async function getListPaginatedData<T>(
  endpoint: string,
  pagination?: BaseRequestPaginationParams,
  filters?: Record<string, string>
): Promise<BaseResponseEntity<BasePaginationDataEntity<T>>> {
  const allParams = {
    ...filters,
    ...(pagination && {
      page: (pagination.page ?? 0).toString(),
      size: (pagination.size ?? 10).toString(),
    }),
    ...(pagination?.order && {
      order: pagination.order,
    }),
  };

  const filterParams = new URLSearchParams(
    allParams as Record<string, string>
  ).toString();

  return request<BasePaginationDataEntity<T>>(
    `${BASE_URL}${endpoint}?${filterParams}`,
    {
      method: "GET",
      headers: getHeaders(),
    }
  );
}

export async function getListSummaryData<T>(
  endpoint: string,
  filters?: Record<string, string>
): Promise<BaseResponseEntity<T[]>> {
  const filterParams = new URLSearchParams(filters).toString();

  return request<T[]>(`${BASE_URL}${endpoint}?${filterParams}`, {
    method: "GET",
    headers: getHeaders(),
  });
}

export async function getData<T>(
  endpoint: string
): Promise<BaseResponseEntity<T>> {
  return request<T>(`${BASE_URL}${endpoint}`, {
    method: "GET",
    headers: getHeaders(),
  });
}

export async function patchData<T>(
  endpoint: string,
  data: any
): Promise<BaseResponseEntity<T>> {
  const res = await request<T>(`${BASE_URL}${endpoint}`, {
    method: "PATCH",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });

  handleSuccessNotification();
  return res;
}

export async function deleteData<T>(
  endpoint: string,
  id?: string
): Promise<BaseResponseEntity<T>> {
  let url = `${BASE_URL}${endpoint}`;
  if (id) {
    url = `${url}/${id}`;
  }

  const res = await request<T>(url, {
    method: "DELETE",
    headers: getHeaders(),
  });

  handleSuccessNotification();
  return res;
}

export async function deleteWithQueryParams<T>(
  endpoint: string,
  queryParamKey: string,
  queryParamValues: string[]
): Promise<BaseResponseEntity<T>> {
  let queryParam = "";

  for (const value of queryParamValues) {
    queryParam += `${queryParamKey}=${value}&`;
  }

  const res = await request<T>(`${BASE_URL}${endpoint}?${queryParam}`, {
    method: "DELETE",
    headers: getHeaders(),
  });

  handleSuccessNotification();
  return res;
}
