export const PersonalInfoData = (user: any) => [
  { label: 'نام', value: user?.firstName },
  { label: 'نام خانوادگی', value: user?.lastName },
  { label: 'شماره موبایل', value: user?.phoneNumber }

]
