const routes = {
  index: "/",
  aboutUs: "/about-us",
  login: "/login",
  profile: "/profile",
  ticket: "/ticket",
  management: "/school/management",

  paymentGatewayBase: "/payment",
  paymentGateway: (paymentId: string) =>
    `${routes.paymentGatewayBase}?paymentId=${paymentId}`,
  school: "school",

  schoolManagementDashboard: (schoolId: string) => ``,
};

export default routes;
