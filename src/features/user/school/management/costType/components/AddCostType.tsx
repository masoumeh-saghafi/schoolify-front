// // MUI Components

// // Core Components

// // Feature Components

// // Custom Hooks

// // React Type
// import { useParams } from 'react-router-dom'
// import { useForm, useWatch } from 'react-hook-form'

// //Type Definitions
// import { zodResolver } from '@hookform/resolvers/zod'
// import type z from 'zod'

// import Box from '@schoolify/core/components/base/inputs/Box'
// import ContentBox from '@schoolify/core/components/common/ContentBox'
// import Grid from '@schoolify/core/components/base/inputs/Grid'
// import ControlledGridTextField from '@schoolify/core/components/common/ControlledGridTextField'
// import SubmitButton from '@schoolify/core/components/common/SubmitButton'

// import useListSummaryEducationYear from '@schoolify/features/user/shared/school/hooks/useListSummaryEducationYears'

// import {
//   addCostFields} from '../utilities/addCostFields'
// import ControlledAutocomplete from '@schoolify/core/components/common/ControlledAutocomplete'
// import useAddCostType from '../hooks/useAddCostType'
// import { validationSchema } from '../validation/costTypeValid'
// import useMapToOptions from '@schoolify/core/hooks/common/useMapToOptions'

// type SchemaProps = z.infer<typeof validationSchema>

// interface AddCostTypeProps {}

// const AddCostType = (props: AddCostTypeProps) => {
//   // const {} = props;
//   const { schoolId = '' } = useParams()

//   // Hooks
//   const {
//     handleSubmit,
//     control,
//     reset,
//     formState: { isValid, isDirty }
//   } = useForm<SchemaProps>({
//     resolver: zodResolver(validationSchema),
//     mode: 'onChange',
//     defaultValues: {
//       title: '',
//       baseAmount: 0,
//       referenceType: '',
//       isActive: true,
//       educationYearId: ''
//     }
//   })

//   const { data: educationYearData } = useListSummaryEducationYear(schoolId)

//   const { mutateAsync: addCostType } = useAddCostType()

//   const isActiveValue = useWatch({ control, name: 'isActive' })

//   const dataMap: Record<string, any[]> = {
//     educationYearId: educationYearData ?? []
//   }

//   // Handlers
//   const handleAddCostType = async (data: SchemaProps) => {
//     const result = await addCostType({
//       data: data,
//       educationYearId: data.educationYearId
//     })
//     if (result.isSuccess)
//       reset(
//         { title: '' },
//         {
//           keepValues: true,
//           keepDirty: false,
//           keepErrors: true
//         }
//       )
//   }

//   // Render
//   return (
//     <Box>
//       <ContentBox
//         label='ایجاد عنوان هزینه'
//         component='form'
//         onSubmit={handleSubmit(handleAddCostType)}
//       >
//         <Grid container spacing={2}>
//           {addCostFields.map(field =>
//             renderDynamicField(field, control, apiData)
//           )}

//           <Grid size={{ xs: 12, sm: 6 }}>
//             <SubmitButton isValid={isValid} isDirty={isDirty}>
//               ایجاد
//             </SubmitButton>
//           </Grid>
//         </Grid>
//       </ContentBox>
//     </Box>
//   )

//   function renderDynamicField (field, control, apiData) {
//     switch (field.type) {
//       case 'text':
//       case 'number':
//         return (
//           <ControlledGridTextField
//             key={field.name}
//             control={control}
//             name={field.name}
//             label={field.label}
//             type={field.type}
//           />
//         )

//       case 'select':
//         return (
//           <ControlledAutocomplete
//             key={field.name}
//             control={control}
//             name={field.name}
//             label={field.label}
//             options={field.options}
//           />
//         )

//       case 'select-api':
//         const mappedOptions = useMapToOptions(apiData[field.optionsKey])

//         return (
//           <ControlledAutocomplete
//             key={field.name}
//             control={control}
//             name={field.name}
//             label={field.label}
//             options={mappedOptions}
//           />
//         )

//       default:
//         return null
//     }
//   }
// }

// export default AddCostType



// AddCostType.tsx
import { useParams } from 'react-router-dom'
import { useForm, useWatch, type SubmitHandler } from 'react-hook-form'
import type { Resolver } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type z from 'zod'

import Box from '@schoolify/core/components/base/inputs/Box'
import ContentBox from '@schoolify/core/components/common/ContentBox'
import Grid from '@schoolify/core/components/base/inputs/Grid'
import ControlledGridTextField from '@schoolify/core/components/common/ControlledGridTextField'
import SubmitButton from '@schoolify/core/components/common/SubmitButton'
import ControlledAutocomplete from '@schoolify/core/components/common/ControlledAutocomplete'

import useListSummaryEducationYear from '@schoolify/features/user/shared/school/hooks/useListSummaryEducationYears'
import useMapToOptions, {
  type OptionType
} from '@schoolify/core/hooks/common/useMapToOptions'

import useAddCostType from '../hooks/useAddCostType'
import { validationSchema } from '../validation/costTypeValid'
import { addCostFields } from '../utilities/addCostFields'

type SchemaProps = z.infer<typeof validationSchema>

interface AddCostTypeProps {}

const AddCostType = (props: AddCostTypeProps) => {
  const { schoolId = '' } = useParams()

  // useForm with explicit Resolver typing to avoid the zod/TS mismatch
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isDirty }
  } = useForm<SchemaProps>({
    resolver: zodResolver(validationSchema) as unknown as Resolver<SchemaProps>,
    mode: 'onChange',
    defaultValues: {
      title: '',
      baseAmount: 0 as unknown as number, // keep it number typed
      referenceType: '',
      isActive: true,
      educationYearId: ''
    }
  })

  

  // watch example (you already used it)
  const isActiveValue = useWatch({ control, name: 'isActive' })

  // API data
  const { data: educationYearData } = useListSummaryEducationYear(schoolId)

  // map API data once (hooks called at top level)
  const educationYearOptions: OptionType[] = useMapToOptions(educationYearData)

  // collect api mapped options in an object so renderDynamicField can read them without calling hooks
  const apiData: Record<string, OptionType[]> = {
    educationYearData: educationYearOptions
  }

  const { mutateAsync: addCostType } = useAddCostType()

  // submit handler typed as SubmitHandler<SchemaProps>
  const handleAddCostType: SubmitHandler<SchemaProps> = async data => {
    const result = await addCostType({
      data,
      educationYearId: data.educationYearId
    })
    if (result.isSuccess) {
      reset(
        { title: '' },
        {
          keepValues: true,
          keepDirty: false,
          keepErrors: true
        }
      )
    }
  }

  // helper to normalize static options shapes to OptionType[]
  const normalizeStaticOptions = (opts: any[] | undefined): OptionType[] => {
    if (!opts) return []
    return opts.map(o => {
      // support { key, value } or { key, label } or { value, label }
      const key = o.key ?? o.value ?? o.label ?? String(o)
      const value = o.value ?? o.label ?? String(o)
      return { key: String(key), value: String(value) }
    })
  }

  // render function (no hooks inside, uses apiData and normalizeStaticOptions)
  function renderDynamicField (field: any) {
    switch (field.type) {
      case 'text':
      case 'number': {
        // ControlledGridTextField's props typing may not accept 'type', so cast to any
        return (
          <ControlledGridTextField
            key={field.name}
            control={control as any}
            name={field.name}
            label={field.label}
            {...(field.type === 'number'
              ? ({ inputProps: { inputMode: 'numeric' } } as any)
              : {})}
          />
        )
      }

      case 'select': {
        const staticOptions = normalizeStaticOptions(field.options)
        return (
          <ControlledAutocomplete
            key={field.name}
            control={control as any}
            name={field.name}
            label={field.label}
            placeholder={
              field.placeholder ??
              `لطفا ${field.label.toLowerCase()} را انتخاب نمایید`
            }
            options={staticOptions}
          />
        )
      }

      case 'select-api': {
        // apiData key comes from field.optionsKey
        const opts: OptionType[] = apiData[field.optionsKey] ?? []
        return (
          <ControlledAutocomplete
            key={field.name}
            control={control as any}
            name={field.name}
            label={field.label}
            placeholder={
              field.placeholder ??
              `لطفا ${field.label.toLowerCase()} را انتخاب نمایید`
            }
            options={opts}
          />
        )
      }

      default:
        return null
    }
  }

  return (
    <Box>
      <ContentBox
        label='ایجاد عنوان هزینه'
        component='form'
        onSubmit={handleSubmit(handleAddCostType)}
      >
        <Grid container spacing={2}>
          {/* render dynamic fields from addCostFields */}
          {addCostFields.map(field => renderDynamicField(field))}

          <Grid size={{ xs: 12, sm: 6 }}>
            <SubmitButton isValid={isValid} isDirty={isDirty}>
              ایجاد
            </SubmitButton>
          </Grid>
        </Grid>
      </ContentBox>
    </Box>
  )
}

export default AddCostType


// import { useParams } from 'react-router-dom'
// import { useForm, useWatch, type SubmitHandler } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import type z from 'zod'

// import Box from '@schoolify/core/components/base/inputs/Box'
// import ContentBox from '@schoolify/core/components/common/ContentBox'
// import Grid from '@schoolify/core/components/base/inputs/Grid'
// import ControlledGridTextField from '@schoolify/core/components/common/ControlledGridTextField'
// import ControlledAutocomplete from '@schoolify/core/components/common/ControlledAutocomplete'
// import SubmitButton from '@schoolify/core/components/common/SubmitButton'

// import useListSummaryEducationYear from '@schoolify/features/user/shared/school/hooks/useListSummaryEducationYears'
// import useMapToOptions, {
//   type OptionType
// } from '@schoolify/core/hooks/common/useMapToOptions'

// import useAddCostType from '../hooks/useAddCostType'
// import { validationSchema } from '../validation/costTypeValid'
// import { addCostFields } from '../utilities/addCostFields'

// type SchemaProps = z.infer<typeof validationSchema>

// interface AddCostTypeProps {}

// const AddCostType = (props: AddCostTypeProps) => {
//   const { schoolId = '' } = useParams()

//   // ----------------------------
//   // useForm با Resolver صحیح
//   // ----------------------------
//   const {
//     handleSubmit,
//     control,
//     reset,
//     formState: { isValid, isDirty }
//   } = useForm<SchemaProps>({
//     resolver: zodResolver(validationSchema),
//     mode: 'onChange',
//     defaultValues: {
//       title: '',
//       baseAmount: 0,
//       referenceType: '',
//       isActive: true,
//       educationYearId: ''
//     }
//   })

//   const isActiveValue = useWatch({ control, name: 'isActive' })

//   // ----------------------------
//   // گرفتن داده‌های API
//   // ----------------------------
//   const { data: educationYearData } = useListSummaryEducationYear(schoolId)

//   // ----------------------------
//   // تبدیل داده‌های nullable به OptionType[]
//   // ----------------------------
//   const educationYearOptions: OptionType[] = useMapToOptions(educationYearData)

//   // ----------------------------
//   // همه داده‌های API را در یک Map جمع می‌کنیم
//   // تا در renderDynamicField بدون فراخوانی هوک استفاده شود
//   // ----------------------------
//   const apiData: Record<string, OptionType[]> = {
//     educationYearData
//   }

//   const { mutateAsync: addCostType } = useAddCostType()

//   // ----------------------------
//   // Submit Handler
//   // ----------------------------
//   const handleAddCostType: SubmitHandler<SchemaProps> = async data => {
//     const result = await addCostType({
//       data,
//       educationYearId: data.educationYearId
//     })

//     if (result.isSuccess) {
//       reset(
//         { title: '' },
//         {
//           keepValues: true,
//           keepDirty: false,
//           keepErrors: true
//         }
//       )
//     }
//   }

//   // ----------------------------
//   // normalize static options (convert {key,value} یا {key,label} به OptionType)
//   // ----------------------------
//   const normalizeStaticOptions = (opts: any[] | undefined): OptionType[] => {
//     if (!opts) return []
//     return opts.map(o => {
//       const key = o.key ?? o.value ?? o.label ?? String(o)
//       const value = o.value ?? o.label ?? String(o)
//       return { key: String(key), value: String(value) }
//     })
//   }

//   // ----------------------------
//   // تابع رندر داینامیک فیلدها
//   // بدون استفاده از هوک‌ها داخل switch
//   // ----------------------------
//   function renderDynamicField (field: any) {
//     switch (field.type) {
//       case 'text':
//       case 'number':
//         return (
//           <ControlledGridTextField
//             key={field.name}
//             control={control as any}
//             name={field.name}
//             label={field.label}
//             {...(field.type === 'number'
//               ? ({ inputProps: { inputMode: 'numeric' } } as any)
//               : {})}
//           />
//         )

//       case 'select':
//         return (
//           <ControlledAutocomplete
//             key={field.name}
//             control={control as any}
//             name={field.name}
//             label={field.label}
//             placeholder={`لطفا ${field.label.toLowerCase()} را انتخاب نمایید`}
//             options={normalizeStaticOptions(field.options)}
//           />
//         )

//       case 'select-api':
//         const opts: OptionType[] = apiData[field.optionsKey] ?? []
//         return (
//           <ControlledAutocomplete
//             key={field.name}
//             control={control as any}
//             name={field.name}
//             label={field.label}
//             placeholder={`لطفا ${field.label.toLowerCase()} را انتخاب نمایید`}
//             options={opts}
//           />
//         )

//       default:
//         return null
//     }
//   }

//   // ----------------------------
//   // JSX نهایی
//   // ----------------------------
//   return (
//     <Box>
//       <ContentBox
//         label='ایجاد عنوان هزینه'
//         component='form'
//         onSubmit={handleSubmit(handleAddCostType)}
//       >
//         <Grid container spacing={2}>
//           {addCostFields.map(field => renderDynamicField(field))}

//           <Grid size={{ xs: 12, sm: 6 }}>
//             <SubmitButton isValid={isValid} isDirty={isDirty}>
//               ایجاد
//             </SubmitButton>
//           </Grid>
//         </Grid>
//       </ContentBox>
//     </Box>
//   )
// }

// export default AddCostType
