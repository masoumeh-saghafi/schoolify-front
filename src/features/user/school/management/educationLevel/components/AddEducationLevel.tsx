// React Type
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

//Type Definitions
import { zodResolver } from '@hookform/resolvers/zod'
import type z from 'zod'

// MUI Components
import Box from '@schoolify/core/components/base/inputs/Box'
import ContentBox from '@schoolify/core/components/common/ContentBox'
import Grid from '@schoolify/core/components/base/inputs/Grid'

// Core Components
import ControlledGridTextField from "@schoolify/core/components/common/ControlledGridTextField";
import SubmitButton from "@schoolify/core/components/common/SubmitButton";
import ControlledAutocomplete from '@schoolify/core/components/common/ControlledAutocomplete'


// Custom Hooks
import useMapToOptions from '@schoolify/core/hooks/common/useMapToOptions'
import useAddEducationLevel from "@schoolify/features/user/school/management/educationLevel/hooks/useAddEducationLevel";
import useListSummaryEducationYear from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationYears";

// Validation Schema
import { validationSchema } from "@schoolify/features/user/school/management/educationLevel/validation/educationLevelValidation";

// Form schema
type SchemaProps = z.infer<typeof validationSchema>;

// Custom Types
interface AddEducationLevelProps {}

const AddEducationLevel = (props: AddEducationLevelProps) => {
  // const {} = props;
 
  // Hooks
  const { schoolId = "" } = useParams();
  const { data: educationYearData } = useListSummaryEducationYear(schoolId);
  const { mutateAsync: addEducationLevel } = useAddEducationLevel();
  const options = useMapToOptions(educationYearData);

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isDirty },
  } = useForm<SchemaProps>({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      educationYearId: "",
      title: "",
    },
  });


  // Handlers
  const handleAddEducationLevel = async (data: SchemaProps) => {
    const result = await addEducationLevel({
      data: data,
      educationYearId: data.educationYearId,
    });
    if (result.isSuccess) reset();
  };

  // Render
  return (
    <Box>
      <ContentBox
        label="افزودن مقطع تحصیلی"
        onSubmit={handleSubmit(handleAddEducationLevel)}
        component="form"
      >
        <Grid container spacing={2}>
          <ControlledAutocomplete
            label="سال تحصیلی"
            name="educationYearId"
            control={control}
            options={options}
            placeholder="لطفا یک سال را انتخاب نمایید"
          />

          <ControlledGridTextField
            label="مقطع تحصیلی "
            name="title"
            key="EducationLevel"
            control={control}
          />

          <Grid size={{ xs: 12, sm: 6 }}>
            <SubmitButton isValid={isValid} isDirty={isDirty}>
              ایجاد
            </SubmitButton>
          </Grid>
        </Grid>
      </ContentBox>
    </Box>
  );
};

export default AddEducationLevel;
