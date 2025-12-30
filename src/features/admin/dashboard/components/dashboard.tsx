// React Types
import { useEffect, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

// Feature Components
import Dashboard from '@schoolify/features/shared/dashboard/components'
import type { DashboardSidebarExitButtonDataProps } from '@schoolify/features/shared/dashboard/components/Sidebar'

// Custom Utilities
import routes from '@schoolify/core/utilities/routes'
import { adminDashboardSidebarData } from '@schoolify/features/admin/dashboard/utilities/data'
import { updateSEO, defaultSEOConfigs } from '@schoolify/core/utilities/seo'

// Custom Hooks
import useUserProfile from '@schoolify/features/shared/profile/hooks/useUserProfile'

// Custom Types
interface AdminDashboardProps {
  children: ReactNode
}

const AdminDashboard = (props: AdminDashboardProps) => {
  // Props
  const { children } = props

  // Hooks
  const navigate = useNavigate()

  const { data, isLoading } = useUserProfile()

  // Effect
  useEffect(() => {
    if (isLoading) return

    if (!data?.data?.role || data.data.role === 'user') {
      navigate(routes.profile.baseUrl)
    }
  }, [data])

  // SEO
  useEffect(() => {
    updateSEO(defaultSEOConfigs.admin)
  }, [])

  // Helpers
  const sidebarData = adminDashboardSidebarData(data?.data?.role)

  const exitButtonData: DashboardSidebarExitButtonDataProps = {
    title: 'خروج از حساب',
    onClick: () => navigate(routes.logout)
  }

  // Render
  return (
    <>
      <Dashboard
        sidebarData={sidebarData}
        sidebarExitButtonData={exitButtonData}
      >
        {children}
      </Dashboard>
    </>
  )
}

export default AdminDashboard
