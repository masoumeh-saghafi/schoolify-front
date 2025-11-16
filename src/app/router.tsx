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
    path: routes.paymentGatewayBase,
    element: <PaymentGatewayPage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: routes.profile,
    element: <ProfileLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProfilePage />,
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
    ],
  },
]);

export default router;
