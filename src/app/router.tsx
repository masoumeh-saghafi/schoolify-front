import { createBrowserRouter } from 'react-router-dom'
import LandingLayout from '@schoolify/app/landing/layout'
import LandingPage from '@schoolify/app/landing/page'
import LoginPage from '@schoolify/app/authentication/login/page'
import AboutUsPage from '@schoolify/app/landing/about-us/page'
import routes from '@schoolify/core/utilities/routes'
import ProfileLayout from '@schoolify/app/profile/layout'
import ProfilePage from '@schoolify/app/profile/page'
import PaymentGatewayPage from '@schoolify/app/gateway/page'

const router = createBrowserRouter([
  {
    path: routes.index,
    element: <LandingLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: routes.aboutUs,
        element: <AboutUsPage />
      }
    ]
  },
  {
    path: routes.login,
    element: <LoginPage />
    // errorElement: <ErrorPage />,
  },
  {
    path: routes.paymentGatewayBase,
    element: <PaymentGatewayPage />
    // errorElement: <ErrorPage />,
  },
  {
    path: routes.profile,
    element: <ProfileLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProfilePage />
      }
    ]
  }
])

export default router
