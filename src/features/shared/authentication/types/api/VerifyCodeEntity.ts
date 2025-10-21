export default interface VerifyCodeEntity {
  token: string;
  refreshToken: string;
  tokenExpireDate: string;
  refreshTokenExpireDate: string;
}
