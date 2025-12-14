  const RoleTypeEnum = {
  MANAGER: { key: 'manager', value: 'معاون' },
  REPORTER: { key: 'reporter', value: 'ناظر' }
} as const

export const roleTypeOptions = Object.values(RoleTypeEnum)
