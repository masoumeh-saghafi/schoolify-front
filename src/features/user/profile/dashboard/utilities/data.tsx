// import type { DashboardSidebarDataProps } from '@schoolify/features/shared/dashboard/components/Sidebar'

// import { SettingIcon } from '@schoolify/core/components/icon/settingIcon'
// import { SupportAgentIcon } from '@schoolify/core/components/icon/SupportAgentIcon'

// import routes from '@schoolify/core/utilities/routes'
// import { genUUID } from '@schoolify/core/utilities/uuid'

// export const sidebarData: DashboardSidebarDataProps[] = [
//   {
//     key: genUUID(),
//     title: ' پشتیبانی',
//     link: routes.ticket,
//     icon: <SupportAgentIcon />
//   },
//   {
//     key: genUUID(),
//     title: 'مدیریت حساب کاربری',
//     link: routes.profile,
//     icon: <SettingIcon />
//   }
// ]


// hooks/useDashboardSidebarData.ts

import routes from '@schoolify/core/utilities/routes'
import { genUUID } from '@schoolify/core/utilities/uuid'

import type { DashboardSidebarDataProps } from '@schoolify/features/shared/dashboard/components/Sidebar'
import useListSummarySchools from '../../school/hooks/useListSummarySchools'
import { SupportAgentIcon } from '@schoolify/core/components/icon/SupportAgentIcon'
import { SettingIcon } from '@schoolify/core/components/icon/settingIcon'
import { useMemo } from 'react'

export const useDashboardSidebarData = (): DashboardSidebarDataProps[] => {
  // 📦 دریافت لیست مدارس از API
  const { data: schools, isLoading, error } = useListSummarySchools()

  // ⚙️ بخش‌های ثابت (غیر وابسته به API)
  const staticItems: DashboardSidebarDataProps[] = [
    {
      key: genUUID(),
      title: 'پشتیبانی',
      link: routes.ticket,
      icon: <SupportAgentIcon />
    },
    {
      key: genUUID(),
      title: 'مدیریت حساب کاربری',
      link: routes.profile,
      icon: <SettingIcon />
    }
  ]

  // 🏫 تولید داینامیک بخش مدارس
  const dynamicSchoolItems: DashboardSidebarDataProps[] = useMemo(() => {
    if (!schools || isLoading || error) return []

    return [
      {
        key: genUUID(),
        title: 'لیست مدارس',
        icon: null,
        children: schools.map((school: any) => ({
          key: genUUID(),
          title: school.data.title,
          icon: null,
          children: [
            {
              key: genUUID(),
              title: 'داشبورد مدیریت',
              link: routes.schoolManagement(school.id),
              icon: <SettingIcon />,
              disabled: school.data.role === 'reporter'
            },
            {
              key: genUUID(),
              title: 'داشبورد نظارت',
              link: routes.schoolReport(school.id),
              icon: <DashboardIcon />
            }
          ]
        }))
      }
    ]
  }, [schools, isLoading, error])

  // ترکیب داده‌های ثابت + داینامیک
  return [...staticItems, ...dynamicSchoolItems]
}
