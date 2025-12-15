import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "@schoolify/app/landing/layout";
import LandingPage from "@schoolify/app/landing/page";
import LoginPage from "@schoolify/app/authentication/login/page";
import AboutUsPage from "@schoolify/app/landing/about-us/page";
import routes from "@schoolify/core/utilities/routes";
import ProfileLayout from "@schoolify/app/profile/layout";
import ProfilePage from "@schoolify/app/profile/page";
import PaymentGatewayPage from "@schoolify/app/gateway/page";
import SchoolManagementLayout from "@schoolify/app/school/management/layout";
import SchoolManagementInformationPage from "@schoolify/app/school/management/information/page";
import SchoolManagementStudentPage from "@schoolify/app/school/management/students/page";
import SchoolManagementClassPage from "./school/management/class/page";
import SchoolManagementClassStudentsPage from "./school/management/classStudents/page";
import SchoolManagementEducationYearPage from "./school/management/eucationYear/page";
import SchoolManagementEducationLevelPage from "./school/management/eucationLevel/page";
import SchoolManagementEducationGradePage from "./school/management/eucationGrade/page";
import SchoolManagementCostTypePage from "./school/management/costType/page";
import SchoolManagementCostPage from "./school/management/cost/page";
import SchoolManagementStudentPaymentPage from "./school/management/studentPayment/page";
import LogoutPage from "./authentication/logout/page";
import SchoolManagementUserRolePage from "./school/management/userRole/page";
import TicketPage from "./profile/ticket/page";
import SchoolReportLayout from "./school/report/layout";
import SchoolReportStudentFullPage from "./school/report/students/full/page";
import SchoolReportStudentSummaryPage from "./school/report/students/summary/page";
import AdminLayout from "./admin/layout";
import AdminDashboardPage from "./admin/page";
import AdminTicketPage from "./admin/tickets/page";
import AdminPaymentsPage from "./admin/payments/page";

const router = createBrowserRouter([
  {
    path: routes.index,
    element: <LandingLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: routes.aboutUs,
        element: <AboutUsPage />,
      },
    ],
  },
  {
    path: routes.login,
    element: <LoginPage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: routes.logout,
    element: <LogoutPage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: routes.paymentGatewayBase,
    element: <PaymentGatewayPage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: routes.profile.baseUrl,
    element: <ProfileLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProfilePage />,
      },
      {
        path: routes.profile.tickets.url,
        element: <TicketPage />,
      },
    ],
  },
  {
    path: routes.school.management.baseUrl,
    element: <SchoolManagementLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SchoolManagementInformationPage />,
      },
      {
        path: routes.school.management.student.url,
        element: <SchoolManagementStudentPage />,
      },
      {
        path: routes.school.management.educationYear.url,
        element: <SchoolManagementEducationYearPage />,
      },
      {
        path: routes.school.management.educationLevel.url,
        element: <SchoolManagementEducationLevelPage />,
      },
      {
        path: routes.school.management.educationGrade.url,
        element: <SchoolManagementEducationGradePage />,
      },
      {
        path: routes.school.management.classes.url,
        element: <SchoolManagementClassPage />,
      },
      {
        path: routes.school.management.classStudents.url,
        element: <SchoolManagementClassStudentsPage />,
      },
      {
        path: routes.school.management.costType.url,
        element: <SchoolManagementCostTypePage />,
      },
      {
        path: routes.school.management.cost.url,
        element: <SchoolManagementCostPage />,
      },
      {
        path: routes.school.management.studentPayment.url,
        element: <SchoolManagementStudentPaymentPage />,
      },
      {
        path: routes.school.management.userRoles.url,
        element: <SchoolManagementUserRolePage />,
      },
    ],
  },
  {
    path: routes.school.report.baseUrl,
    element: <SchoolReportLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SchoolReportStudentFullPage />,
      },
      {
        path: routes.school.report.student.full.url,
        element: <SchoolReportStudentFullPage />,
      },
      {
        path: routes.school.report.student.summary.url,
        element: <SchoolReportStudentSummaryPage />,
      },
    ],
  },
  {
    path: routes.admin.baseUrl,
    element: <AdminLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AdminDashboardPage />,
      },
      {
        path: routes.admin.tickets.url,
        element: <AdminTicketPage />,
      },
        {
        path: routes.admin.payments.url,
        element: <AdminPaymentsPage />,
      },
      // {
      //   path: routes.admin.tickets.url,
      //   element: <AdminTicketPage />,
      // },
    ],
  },
]);

export default router;
