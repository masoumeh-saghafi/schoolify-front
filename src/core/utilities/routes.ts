const routes = {
  index: "/",
  aboutUs: "/about-us",
  login: "/login",
  profile: "/profile",
  ticket: "/ticket",
  management: "/school/management",
  paymentGateway: (paymentId: string) => `/payment?paymentId=${paymentId}`,
};

export default routes;
