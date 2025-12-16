import Cookies from "js-cookie";

const impersonateTokenKey = "impersonateToken";

export const setImpersonateTokenCookie = (
  token: string | undefined,
  expireDate: string | undefined
) => {
  if (token && expireDate) {
    const date = new Date(expireDate);
    Cookies.set(impersonateTokenKey, token, { expires: date });
  }
};

export const getImpersonateTokenCookie = () => {
  const token = Cookies.get(impersonateTokenKey);
  return token;
};

export const removeImpersonateTokenCookie = () => {
  Cookies.remove(impersonateTokenKey);
};
