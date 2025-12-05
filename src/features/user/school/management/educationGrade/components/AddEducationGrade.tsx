// MUI Components

// Core Components

// Feature Components

// Custom Hooks

// React Type
import { useParams } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";

//Type Definitions
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";

import Box from "@schoolify/core/components/base/inputs/Box";
import ContentBox from "@schoolify/core/components/common/ContentBox";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import ControlledGridTextField from "@schoolify/core/components/common/ControlledGridTextField";
import SubmitButton from "@schoolify/core/components/common/SubmitButton";
import { validationSchema } from "../validation/educationGradeValid";
import useListSummaryEducationYear from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationYears";
import useListSummaryEducationLevel from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationLevel";

import { addEducationLGradeData } from "../utilities/addEducationLGradeData";
import ControlledAutocomplete from "@schoolify/core/components/common/ControlledAutocomplete";
import useAddEducationGrade from "../hooks/useAddEducationGrade";

type SchemaProps = z.infer<typeof validationSchema>;

interface AddEducationGradeProps {}

const AddEducationGrade = (props: AddEducationGradeProps) => {
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
    defaultValues: {
      educationYearId: "",
      educationLevelId: "",
      title: "",
    },
  });
  const selectedEducationYearId = useWatch({
    control,
    name: "educationYearId",
  });

  const { data: educationYearData } = useListSummaryEducationYear(schoolId);
  const { data: educationLevelsData } = useListSummaryEducationLevel(
    selectedEducationYearId
  );

  const { mutateAsync: addEducationGrade } = useAddEducationGrade();

  const dataMap: Record<string, any[]> = {
    educationYearId: educationYearData ?? [],
    educationLevelId: educationLevelsData ?? [],
  };

  // Handlers
  const handleAddEducationGrade = async (data: SchemaProps) => {
    const result = await addEducationGrade({
      data: data,
      educationLevelId: data.educationLevelId,
    });
    if (result.isSuccess)
      reset(
        { title: "" },
        {
          keepValues: true,
          keepDirty: false,
          keepErrors: true,
        }
      );
  };

  // Render
  return (
    <Box>
      <ContentBox
        label="افزودن پایه تحصیلی"
        onSubmit={handleSubmit(handleAddEducationGrade)}
        component="form"
      >
        <Grid container spacing={2}>
          <ControlledGridTextField
            key="EducationGrade"
            control={control}
            name="title"
            label="نام پایه "
          />
          {addEducationLGradeData.map((field) => (
            <ControlledAutocomplete
              key={field.name}
              control={control}
              name={field.name}
              label={field.label}
              placeholder={`لطفا ${field.label.toLowerCase()} را انتخاب نمایید`}
              options={field.optionsMapper(dataMap[field.name])}
            />
          ))}

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

export default AddEducationGrade;
