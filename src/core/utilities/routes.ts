const routes = {
  index: "/",
  aboutUs: "/about-us",
  login: "/login",
  profile: "/profile",
  ticket: "/ticket",

  paymentGatewayBase: "/payment",
  paymentGateway: (paymentId: string) =>
    `${routes.paymentGatewayBase}?paymentId=${paymentId}`,

  school: {
    baseUrl: "/school/:schoolId",
    management: {
      baseUrl: "/school/:schoolId/management",
      index: (schoolId: string) =>
        routes.school.management.baseUrl.replace(":schoolId", schoolId),
      student: {
        url: "students",
        index: (schoolId: string) =>
          routes.school.management.baseUrl.replace(":schoolId", schoolId) +
          "/" +
          routes.school.management.student.url,
      },
    },
  },
};

export default routes;
