// Feature Components
import LandingHeader from '@schoolify/features/user/landing/header'

// React Type
import { Outlet } from 'react-router-dom'

const LandingLayout = () => {
  // Render
  return (
    <>
      <LandingHeader />
      <Outlet />
    </>
  )
}

export default LandingLayout
