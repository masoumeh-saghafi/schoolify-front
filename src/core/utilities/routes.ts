const routes = {
  index: '/',
  aboutUs: '/about-us',
  login: '/login',
  profile: '/profile',
  ticket: '/ticket',

  paymentGatewayBase: '/payment',
  paymentGateway: (paymentId: string) =>
    `${routes.paymentGatewayBase}?paymentId=${paymentId}`,

  school: {
    baseUrl: '/school/:schoolId',
    management: {
      baseUrl: '/school/:schoolId/management',
      index: (schoolId: string) =>
        routes.school.management.baseUrl.replace(':schoolId', schoolId),
      student: {
        url: 'students',
        index: (schoolId: string) =>
          routes.school.management.baseUrl.replace(':schoolId', schoolId) +
          '/' +
          routes.school.management.student.url
      },
      educationYear: {
        url: 'education-years',
        index: (schoolId: string) =>
          routes.school.management.baseUrl.replace(':schoolId', schoolId) +
          '/' +
          routes.school.management.educationYear.url
      },
      educationLevel: {
        url: 'education-levels',
        index: (schoolId: string) =>
          routes.school.management.baseUrl.replace(':schoolId', schoolId) +
          '/' +
          routes.school.management.educationLevel.url
      },
      educationGrade: {
        url: 'education-grades',
        index: (schoolId: string) =>
          routes.school.management.baseUrl.replace(':schoolId', schoolId) +
          '/' +
          routes.school.management.educationGrade.url
      },
      classes: {
        url: 'classes',
        index: (schoolId: string) =>
          routes.school.management.baseUrl.replace(':schoolId', schoolId) +
          '/' +
          routes.school.management.classes.url
      },
      classStudents: {
        url: 'classes-students',
        index: (schoolId: string) =>
          routes.school.management.baseUrl.replace(':schoolId', schoolId) +
          '/' +
          routes.school.management.classStudents.url
      },costType: {
        url: 'cost-type',
        index: (schoolId: string) =>
          routes.school.management.baseUrl.replace(':schoolId', schoolId) +
          '/' +
          routes.school.management.costType.url
      },cost: {
        url: 'costs',
        index: (schoolId: string) =>
          routes.school.management.baseUrl.replace(':schoolId', schoolId) +
          '/' +
          routes.school.management.cost.url
      }
    }
  }
}

export default routes
