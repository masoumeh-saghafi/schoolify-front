// React Type
import { createBrowserRouter } from 'react-router-dom'

// Custom Utilities
import routes from '@schoolify/core/utilities/routes'

//App Components
import PaymentGatewayPage from '@schoolify/app/gateway/page'

// Landing
import LandingLayout from '@schoolify/app/landing/layout'
import LandingPage from '@schoolify/app/landing/page'
import LoginPage from '@schoolify/app/authentication/login/page'
import AboutUsPage from '@schoolify/app/landing/about-us/page'
import DevelopersPage from '@schoolify/app/landing/developers/page'
import MatinKhaleghiPersonalPage from '@schoolify/app/landing/developers/matin-khaleghi/page'
import MasoumehSaghafiPersonalPage from '@schoolify/app/landing/developers/masoumeh-saghafi/page'
import TermsPage from '@schoolify/app/landing/terms/page'

// Profile
import ProfileLayout from '@schoolify/app/profile/layout'
import ProfilePage from '@schoolify/app/profile/page'
import TicketPage from '@schoolify/app/profile/ticket/page'

// School
import SchoolManagementLayout from '@schoolify/app/school/management/layout'
import SchoolManagementInformationPage from '@schoolify/app/school/management/information/page'
import SchoolManagementStudentPage from '@schoolify/app/school/management/students/page'
import SchoolManagementClassPage from '@schoolify/app/school/management/class/page'
import SchoolManagementClassStudentsPage from '@schoolify/app/school/management/classStudents/page'
import SchoolManagementEducationYearPage from '@schoolify/app/school/management/eucationYear/page'
import SchoolManagementEducationLevelPage from '@schoolify/app/school/management/eucationLevel/page'
import SchoolManagementEducationGradePage from '@schoolify/app/school/management/eucationGrade/page'
import SchoolManagementCostTypePage from '@schoolify/app/school/management/costType/page'
import SchoolManagementCostPage from '@schoolify/app/school/management/cost/page'
import SchoolManagementStudentPaymentPage from '@schoolify/app/school/management/studentPayment/page'
import SchoolManagementUserRolePage from '@schoolify/app/school/management/userRole/page'
import SchoolReportLayout from '@schoolify/app/school/report/layout'
import SchoolReportStudentFullPage from '@schoolify/app/school/report/students/full/page'
import SchoolReportStudentSummaryPage from '@schoolify/app/school/report/students/summary/page'
import SchoolReportPage from '@schoolify/app/school/report/page'

//Authentication
import LogoutPage from '@schoolify/app/authentication/logout/page'

//Admin
import AdminLayout from '@schoolify/app/admin/layout'
import AdminDashboardPage from '@schoolify/app/admin/page'
import AdminTicketPage from '@schoolify/app/admin/tickets/page'
import AdminPaymentsPage from '@schoolify/app/admin/payments/page'
import AdminManagersPage from '@schoolify/app/admin/managers/page'
import AdminCustomersPage from '@schoolify/app/admin/customers/page'

const router = createBrowserRouter([
  {
    path: routes.index,
    element: <LandingLayout />,

    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: routes.aboutUs,
        element: <AboutUsPage />
      },
      {
        path: routes.developers,
        element: <DevelopersPage />
      },
      {
        path: routes.developerMatin,
        element: <MatinKhaleghiPersonalPage />
      },
      {
        path: routes.developerMasoumeh,
        element: <MasoumehSaghafiPersonalPage />
      },
      {
        path: routes.terms,
        element: <TermsPage />
      }
    ]
  },
  {
    path: routes.login,
    element: <LoginPage />
  },
  {
    path: routes.logout,
    element: <LogoutPage />
  },
  {
    path: routes.paymentGatewayBase,
    element: <PaymentGatewayPage />
  },
  {
    path: routes.profile.baseUrl,
    element: <ProfileLayout />,

    children: [
      {
        index: true,
        element: <ProfilePage />
      },
      {
        path: routes.profile.tickets.url,
        element: <TicketPage />
      }
    ]
  },
  {
    path: routes.school.management.baseUrl,
    element: <SchoolManagementLayout />,

    children: [
      {
        index: true,
        element: <SchoolManagementInformationPage />
      },
      {
        path: routes.school.management.student.url,
        element: <SchoolManagementStudentPage />
      },
      {
        path: routes.school.management.educationYear.url,
        element: <SchoolManagementEducationYearPage />
      },
      {
        path: routes.school.management.educationLevel.url,
        element: <SchoolManagementEducationLevelPage />
      },
      {
        path: routes.school.management.educationGrade.url,
        element: <SchoolManagementEducationGradePage />
      },
      {
        path: routes.school.management.classes.url,
        element: <SchoolManagementClassPage />
      },
      {
        path: routes.school.management.classStudents.url,
        element: <SchoolManagementClassStudentsPage />
      },
      {
        path: routes.school.management.costType.url,
        element: <SchoolManagementCostTypePage />
      },
      {
        path: routes.school.management.cost.url,
        element: <SchoolManagementCostPage />
      },
      {
        path: routes.school.management.studentPayment.url,
        element: <SchoolManagementStudentPaymentPage />
      },
      {
        path: routes.school.management.userRoles.url,
        element: <SchoolManagementUserRolePage />
      }
    ]
  },
  {
    path: routes.school.report.baseUrl,
    element: <SchoolReportLayout />,

    children: [
      {
        index: true,
        element: <SchoolReportPage />
      },
      {
        path: routes.school.report.student.full.url,
        element: <SchoolReportStudentFullPage />
      },
      {
        path: routes.school.report.student.summary.url,
        element: <SchoolReportStudentSummaryPage />
      }
    ]
  },
  {
    path: routes.admin.baseUrl,
    element: <AdminLayout />,

    children: [
      {
        index: true,
        element: <AdminDashboardPage />
      },
      {
        path: routes.admin.tickets.url,
        element: <AdminTicketPage />
      },
      {
        path: routes.admin.payments.url,
        element: <AdminPaymentsPage />
      },
      {
        path: routes.admin.managers.url,
        element: <AdminManagersPage />
      },
      {
        path: routes.admin.customers.url,
        element: <AdminCustomersPage />
      }
    ]
  }
])

export default router
