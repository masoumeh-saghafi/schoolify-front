import Cookies from "js-cookie";

export const login = (
  token: string | undefined,
  expireDate: string | undefined
) => {
  if (token && expireDate) {
    const date = new Date(expireDate);
    Cookies.set("authToken", token, { expires: date });
  }
};

export const logout = () => {
  Cookies.remove("authToken");
};
