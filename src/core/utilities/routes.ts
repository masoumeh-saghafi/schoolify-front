const routes = {
  index: "/",

  aboutUs: "/about-us",

  developers: "/developers",

  contactUs: "/about-us#contact",

  login: "/login",

  logout: "/logout",

  profile: {
    baseUrl: "/profile",

    tickets: {
      url: "tickets",
      index: () => routes.profile.baseUrl + "/" + routes.profile.tickets.url,
    },
  },

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

      educationYear: {
        url: "education-years",
        index: (schoolId: string) =>
          routes.school.management.baseUrl.replace(":schoolId", schoolId) +
          "/" +
          routes.school.management.educationYear.url,
      },

      educationLevel: {
        url: "education-levels",
        index: (schoolId: string) =>
          routes.school.management.baseUrl.replace(":schoolId", schoolId) +
          "/" +
          routes.school.management.educationLevel.url,
      },

      educationGrade: {
        url: "education-grades",
        index: (schoolId: string) =>
          routes.school.management.baseUrl.replace(":schoolId", schoolId) +
          "/" +
          routes.school.management.educationGrade.url,
      },

      classes: {
        url: "classes",
        index: (schoolId: string) =>
          routes.school.management.baseUrl.replace(":schoolId", schoolId) +
          "/" +
          routes.school.management.classes.url,
      },

      classStudents: {
        url: "classes-students",
        index: (schoolId: string) =>
          routes.school.management.baseUrl.replace(":schoolId", schoolId) +
          "/" +
          routes.school.management.classStudents.url,
      },

      costType: {
        url: "cost-type",
        index: (schoolId: string) =>
          routes.school.management.baseUrl.replace(":schoolId", schoolId) +
          "/" +
          routes.school.management.costType.url,
      },

      cost: {
        url: "costs",
        index: (schoolId: string) =>
          routes.school.management.baseUrl.replace(":schoolId", schoolId) +
          "/" +
          routes.school.management.cost.url,
      },

      studentPayment: {
        url: "students-payment",
        index: (schoolId: string) =>
          routes.school.management.baseUrl.replace(":schoolId", schoolId) +
          "/" +
          routes.school.management.studentPayment.url,
      },

      userRoles: {
        url: "user-roles",
        index: (schoolId: string) =>
          routes.school.management.baseUrl.replace(":schoolId", schoolId) +
          "/" +
          routes.school.management.userRoles.url,
      },
    },

    report: {
      baseUrl: "/school/:schoolId/report",
      index: (schoolId: string) =>
        routes.school.report.baseUrl.replace(":schoolId", schoolId),

      student: {
        full: {
          url: "students/full",
          index: (schoolId: string) =>
            routes.school.report.baseUrl.replace(":schoolId", schoolId) +
            "/" +
            routes.school.report.student.full.url,
        },

        summary: {
          url: "students/summary",
          index: (schoolId: string) =>
            routes.school.report.baseUrl.replace(":schoolId", schoolId) +
            "/" +
            routes.school.report.student.summary.url,
        },
      },
    },
  },

  admin: {
    baseUrl: "/admin",

    tickets: {
      url: "tickets",
      index: () => routes.admin.baseUrl + "/" + routes.admin.tickets.url,
    },

    payments: {
      url: "payments",
      index: () => routes.admin.baseUrl + "/" + routes.admin.payments.url,
    },

    customers: {
      url: "customers",
      index: () => routes.admin.baseUrl + "/" + routes.admin.customers.url,
    },

    managers: {
      url: "managers",
      index: () => routes.admin.baseUrl + "/" + routes.admin.managers.url,
    },
  },
};

export default routes;
