// React Type
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

//Type Definitions
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";

// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import ContentBox from "@schoolify/core/components/common/ContentBox";
import Grid from "@schoolify/core/components/base/inputs/Grid";

// Core Components
import ControlledGridTextField from "@schoolify/core/components/common/ControlledGridTextField";
import SubmitButton from "@schoolify/core/components/common/SubmitButton";
import ControlledHiddenInput from "@schoolify/core/components/common/ControlledHiddenInput";

// Custom Hooks
import useAddEducationYear from "@schoolify/features/user/school/management/educationYear/hooks/useAddEducationYear";

// Validation Schema
import { validationSchema } from "@schoolify/features/user/school/management/educationYear/validation/educationYearsValid";

// Form schema
type SchemaProps = z.infer<typeof validationSchema>;

// Custom Types
interface AddEducationYearProps {}

const AddEducationYear = (props: AddEducationYearProps) => {
  // const {} = props;

  // Hooks
  const { schoolId = "" } = useParams();
  const { mutateAsync: addEducationYear } = useAddEducationYear();

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isDirty },
  } = useForm<SchemaProps>({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      schoolId: schoolId ?? "",
    },
  });

  // Handlers
  const handleAddEducationYear = async (data: SchemaProps) => {
    const result = await addEducationYear({ data: data, schoolId: schoolId });
    if (result.isSuccess) reset(data);
  };

  // Render
  return (
    <Box>
      <ContentBox
        label="افزودن سال تحصیلی"
        onSubmit={handleSubmit(handleAddEducationYear)}
        component="form"
      >
        <Grid container spacing={2}>
          <ControlledGridTextField
            key="EducationYear"
            control={control}
            name="title"
            label="سال تحصیلی "
            placeholder="1402-03"
          />

          {/* Hidden input for schoolId */}
          <ControlledHiddenInput control={control} name="schoolId" />

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

export default AddEducationYear;
