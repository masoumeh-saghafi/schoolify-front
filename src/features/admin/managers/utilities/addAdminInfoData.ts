interface AdminInfoFormValues {
  firstName: string
  lastName: string
  phoneNumber: number
}

export const addAdminInfoData: {
  name: keyof AdminInfoFormValues
  label: string
}[] = [
  { name: 'firstName', label: 'نام' },
  { name: 'lastName', label: 'نام خانوادگی' },
  { name: 'phoneNumber', label: 'شماره موبایل' }
]
