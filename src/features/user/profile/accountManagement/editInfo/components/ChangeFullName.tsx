// MUI Components
import Button from '@schoolify/core/components/base/inputs/Button'
import Grid from '@schoolify/core/components/base/inputs/Grid'
import ContentBox from '@schoolify/core/components/common/ContentBox'
import ControlledGridTextField from '@schoolify/core/components/common/ControlledGridTextField'

// Feature Components
import { fullNameSchema } from '@schoolify/features/user/profile/accountManagement/editInfo/validations/fullNameValidation'

// Custom Hooks
import useUpdateUserProfile from '@schoolify/features/user/profile/accountManagement/editInfo/hooks/useUpdateUserProfile'
import useUserProfile from '@schoolify/features/user/profile/accountManagement/personalInfo/hooks/useUserProfile'
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'

// Custom Utilities
import { ChangeFullNameData } from '@schoolify/features/user/profile/accountManagement/editInfo/utilities/ChangeFullNameData'

// React Type
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

//Type Definitions
import type z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export type FullNameSchemaProps = z.infer<typeof fullNameSchema>

const ChangeFullName = () => {
  // States
  const [initialValues, setInitialValues] = useState<FullNameSchemaProps>({
    FirstName: '',
    LastName: ''
  })

  // Hooks
  const { data: userData } = useUserProfile()
  const { mutateAsync: updateUserProfile } = useUpdateUserProfile()
  const theme = useAppTheme()
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { isValid }
  } = useForm<FullNameSchemaProps>({
    resolver: zodResolver(fullNameSchema),
    mode: 'onChange',
    defaultValues: initialValues
  })

  // UseEffect
  useEffect(() => {
    if (userData) {
      const initial = {
        FirstName: userData.data?.firstName ?? '',
        LastName: userData.data?.lastName ?? ''
      }
      setInitialValues(initial)
      setValue('FirstName', initial.FirstName)
      setValue('LastName', initial.LastName)
    }
  }, [userData, setValue])

  // Handlers
  const onSubmitChangeFullName = async (data: FullNameSchemaProps) => {
    try {
      await updateUserProfile(data)
    } catch (error) {
      alert('مشکلی در دریافت اطلاعات وجود دارد')
    }
  }

  // Handlers
  const watchFirstName = watch('FirstName')
  const watchLastName = watch('LastName')

  const hasChanged =
    watchFirstName !== initialValues.FirstName ||
    watchLastName !== initialValues.LastName

  const filed = ChangeFullNameData

  // Render
  return (
    <ContentBox
      label='تغییر مشخصات کاربر '
      component='form'
      onSubmit={handleSubmit(onSubmitChangeFullName)}
    >
      <Grid container sx={{ margin: 2 }} spacing={2}>
        {filed.map((item: any) => (
          <ControlledGridTextField
            key={item.name}
            control={control}
            name={item.name as keyof FullNameSchemaProps}
            label={item.label}
          />
        ))}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Button
            type='submit'
            fullWidth
            size='small'
            variant='contained'
            disabled={!isValid || !hasChanged}
            sx={{
              direction: 'rtl',
              gap: 1,
              backgroundColor:
                isValid && hasChanged
                  ? {
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.text.white
                    }
                  : {
                      backgroundColor: theme.palette.secondary.main,
                      color: theme.palette.text.white
                    }
            }}
          >
            ویرایش اطلاعات
          </Button>
        </Grid>
      </Grid>
    </ContentBox>
  )
}

export default ChangeFullName
