import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "@schoolify/app/landing/layout";
import LandingPage from "@schoolify/app/landing/page";
import AboutUsPage from "@schoolify/app/landing/about-us/page";
import routes from "@schoolify/core/utilities/routes";

const router = createBrowserRouter([
  {
    path: routes.home,
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
]);

export default router;
