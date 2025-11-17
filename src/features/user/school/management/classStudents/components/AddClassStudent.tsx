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
import { validationSchema } from "../validation/classValid";
import useListSummaryEducationYear from "@schoolify/features/user/shared/school/hooks/useListSummaryEducationYears";
import useListSummaryEducationLevel from "@schoolify/features/user/shared/school/hooks/useListSummaryEducationLevel";
import useListSummaryEducationGrade from "@schoolify/features/user/shared/school/hooks/useListSummaryEducationGrade";
import useAddClass from "../hooks/useAddClassStudent";

type SchemaProps = z.infer<typeof validationSchema>;

interface AddClassStudentProps {}

const AddClassStudent = (props: AddClassStudentProps) => {
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
      educationGradeId: "",
      title: "",
    },
  });
  const selectedEducationYearId = useWatch({
    control,
    name: "educationYearId",
  });
  const selectedEducationLevelId = useWatch({
    control,
    name: "educationLevelId",
  });

  const { data: educationYearData } = useListSummaryEducationYear(schoolId);
  const { data: educationLevelsData } = useListSummaryEducationLevel(
    selectedEducationYearId
  );

  const { data: educationGradesData } = useListSummaryEducationGrade(
    selectedEducationLevelId
  );

  const { mutateAsync: addClass } = useAddClass();
  // const options = (educationYearData ??
  //   []) as BaseIdDataEntity<ListSummaryEducationYearEntity>[]

  // const options =
  //   data?.data?.data?.map(item => ({
  //     key: item.id,
  //     value: item.data.title
  //   })) ?? []

  // Handlers
  const handleAddClass = async (data: SchemaProps) => {
    const result = await addClass({
      data: data,
      educationYearId: data.educationYearId,
      // eeducationLevelId:data.educationLevelId,
      // educationGradeId: data.educationGradeId
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
        label="افزودن  کلاس"
        onSubmit={handleSubmit(handleAddClass)}
        component="form"
      >
        <Grid container spacing={2}>
          <ControlledGridTextField
            key="EducationGrade"
            control={control}
            name="title"
            label="نام کلاس "
          />
          {/* <ControlledAutocomplete
            control={control}
            name='educationYearId'
            label='سال تحصیلی'
            placeholder='لطفا یک سال را انتخاب نمایید'
            options={educationYearData?.data.data?.map()}
            
          /> */}

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

export default AddClassStudent;
