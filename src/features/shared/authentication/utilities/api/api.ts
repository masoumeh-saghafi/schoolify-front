import { postData } from "@schoolify/core/utilities/api";
import authEndpoints from "@schoolify/features/shared/authentication/utilities/api/endpoints";
import type SendCodeEntity from "@schoolify/features/shared/authentication/types/api/SendCodeEntity";
import type VerifyCodeEntity from "@schoolify/features/shared/authentication/types/api/VerifyCodeEntity";


export  const sendCode = async (phoneNumber: string) => {
  return await postData<SendCodeEntity>(authEndpoints.sendCode, {
    phoneNumber: phoneNumber,
    token: "set empty string for now",
    type: "login",
  });
};

export const verifyCode = async (phoneNumber: string, code: string) => {
  const response = await postData<VerifyCodeEntity>(authEndpoints.login, {
    phoneNumber: phoneNumber,
    code: code,
  });

  const token = response.data?.token;
  const expireDate = response.data?.tokenExpireDate;

  if (token && expireDate) {
    const date = new Date(expireDate);
    // Cookies.set("authToken", token, { expires: date });
  }

  return response;
};
