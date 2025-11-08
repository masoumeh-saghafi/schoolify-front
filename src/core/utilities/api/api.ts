import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";
import type BasePaginationDataEntity from "@schoolify/core/types/core/api/response";
import type { BaseResponseEntity } from "@schoolify/core/types/core/api/response";
import Cookies from "js-cookie";
// import BaseResponseEntity from "../entities/BaseResponseEntity";
// import useUserImpersonationStore, { useNotificationStore } from "../store";

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
  //   useUserImpersonationStore
  //     .getState()
  //     .setUserImpersonation(isImpersonationHeader === "true");
}

function handleSuccessNotification() {
  //   useNotificationStore
  //     .getState()
  //     .setNotification(["عملیات با موفقیت انجام شد"], "success");
}

function handleError(error: any) {
  //   const errors = error?.response?.data?.errors ?? [
  //     "خطای ناشناخته‌ای رخ داده است",
  //   ];
  //   useNotificationStore.getState().setNotification(errors, "error");
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
    const response = await fetch(url, options);
    const isImpersonation = response.headers.get("is-impersonation");
    handleImpersonation(isImpersonation);
    // console.log(response);

    const data = (await response.json()) as BaseResponseEntity<T>;

    if (!response.ok) {
      //   useNotificationStore
      //     .getState()
      //     .setNotification(data.errors ?? ["خطا در عملیات"], "error");
    }

    return data;
  } catch (err: any) {
    handleError(err);
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

  handleSuccessNotification();
  return res;
}

export async function getAllData<T>(
  endpoint: string,
  pagination?: BaseRequestPaginationParams,
  filters?: Record<string, string>
): Promise<BaseResponseEntity<BasePaginationDataEntity<T>>> {
  const allParams = {
    ...filters,
    ...(pagination && {
      page: (pagination.page ?? 0).toString(),
      size: (pagination.size ?? 10).toString(),
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
  id: string
): Promise<BaseResponseEntity<T>> {
  const res = await request<T>(`${BASE_URL}${endpoint}/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });

  handleSuccessNotification();
  return res;
}

export async function deleteWithoutParams<T>(
  endpoint: string
): Promise<BaseResponseEntity<T>> {
  const res = await request<T>(`${BASE_URL}${endpoint}`, {
    method: "DELETE",
    headers: getHeaders(),
  });

  handleSuccessNotification();
  return res;
}
