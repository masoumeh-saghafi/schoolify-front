import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "@schoolify/app/landing/layout";
import LandingPage from "@schoolify/app/landing/page";
import AboutUsPage from "@schoolify/app/landing/about-us/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
    ],
  },
]);

export default router;
