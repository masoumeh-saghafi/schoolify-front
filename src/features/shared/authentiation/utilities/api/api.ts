import { postData } from "@schoolify/core/utilities/api";
import authEndpoints from "@schoolify/features/shared/authentiation/utilities/api/endpoints";

export const sendCode = async (phoneNumber: string) => {
  return await postData(authEndpoints.login, {
    phoneNumber: phoneNumber,
    token: "",
  });
};

// export const login = (data: any) => {
//   return post(data).then((response) => {
//     const token = response.data?.token;
//     const expireDate = response.data?.tokenExpireDate;

//     if (token && expireDate) {
//       const date = new Date(expireDate);
//       Cookies.set("authToken", token, { expires: date });
//     }

//     return response;
//   });
// };
