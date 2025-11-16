// MUI Components

// Core Components

// Feature Components

// Custom Hooks

// React Type
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

//Type Definitions
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";

import Box from "@schoolify/core/components/base/inputs/Box";
import ContentBox from "@schoolify/core/components/common/ContentBox";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import ControlledGridTextField from "@schoolify/core/components/common/ControlledGridTextField";
import SubmitButton from "@schoolify/core/components/common/SubmitButton";

import useAddEducationLevel from "../hooks/useAddEducationLevel";
import { validationSchema } from "../validation/educationLevelValid";
import useListSummaryEducationYear from "@schoolify/features/user/shared/school/hooks/useListSummaryEducationYears";
import ControlledAutocomplete from "@schoolify/core/components/common/ControlledAutocomplete";

type SchemaProps = z.infer<typeof validationSchema>;

interface AddEducationLevelProps {}

const AddEducationLevel = (props: AddEducationLevelProps) => {
  // const {} = props;
  const { schoolId = "" } = useParams();

  // Hooks
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isDirty },
  } = useForm<SchemaProps>({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
  });

  const { data: educationYearData } = useListSummaryEducationYear(schoolId);
  const { mutateAsync: addEducationLevel } = useAddEducationLevel();

  console.log(educationYearData);
  console.log(
    educationYearData?.map((item) => ({
      key: item.id,
      value: item.data?.title ?? "",
    })) ?? []
  );

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
          <ControlledGridTextField
            key="EducationLevel"
            control={control}
            name="title"
            label="مقطع تحصیلی "
          />
          <ControlledAutocomplete
            control={control}
            name="educationYearId"
            label="سال تحصیلی"
            placeholder="لطفا یک سال را انتخاب نمایید"
            options={
              educationYearData?.map((item) => ({
                key: item.id,
                value: item.data?.title ?? "",
              })) ?? []
            }
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
