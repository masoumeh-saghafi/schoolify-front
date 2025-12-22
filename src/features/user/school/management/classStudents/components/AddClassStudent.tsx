// React Type
import { useParams } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { useCallback, useState } from "react";

// Type Definitions
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";

// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import ContentBox from "@schoolify/core/components/common/ContentBox";
import Grid from "@schoolify/core/components/base/inputs/Grid";

// Core Components
import SubmitButton from "@schoolify/core/components/common/SubmitButton";
import ControlledAutocomplete from "@schoolify/core/components/common/ControlledAutocomplete";

// Custom Hooks
import useListSummaryEducationYear from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationYears";
import useListSummaryEducationLevel from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationLevel";
import useListSummaryEducationGrade from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationGrade";
import useAddClass from "@schoolify/features/user/school/management/classStudents/hooks/useAddClassStudent";
import useListSummaryClass from "@schoolify/features/user/school/management/shared/hooks/useListSummaryClass";
import useListStudents from "@schoolify/features/user/school/management/shared/hooks/useListStudents";

// Custom Utilities
import { validationSchema } from "@schoolify/features/user/school/management/classStudents/validation/classValid";
import { addClassStudentData } from "@schoolify/features/user/school/management/classStudents/utilities/addClassStudentData";

// Form schema
type SchemaProps = z.infer<typeof validationSchema>;

interface AddClassStudentProps {}

const AddClassStudent = (props: AddClassStudentProps) => {
  // const {} = props;

  // States
  const [studentSearchText, setStudentSearchText] = useState("");

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
      classId: "",
      studentId: "",
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
  const selectedEducationGradeId = useWatch({
    control,
    name: "educationGradeId",
  });
  const selectedClassId = useWatch({
    control,
    name: "classId",
  });

  const { schoolId = "" } = useParams();
  const { data: educationYearData } = useListSummaryEducationYear(schoolId);
  const { data: educationLevelsData } = useListSummaryEducationLevel(
    selectedEducationYearId
  );
  const { data: educationGradesData } = useListSummaryEducationGrade(
    selectedEducationLevelId
  );
  const { data: classesData } = useListSummaryClass(selectedEducationGradeId);

  const { data: studentsData } = useListStudents({
    schoolId: schoolId,
    pagination: { size: -1 },
    filters: {
      classRoomId: selectedClassId,
      // identityCode: `%${studentSearchText}%`
    },
    disabled: !selectedClassId,
  });

  const { mutateAsync: addClassStudent } = useAddClass();

  // Helpers
  const dataMap: Record<string, any[]> = {
    educationYearId: educationYearData ?? [],
    educationLevelId: educationLevelsData ?? [],
    educationGradeId: educationGradesData ?? [],
    classId: classesData ?? [],
    studentId: studentsData?.docs ?? [],
  };

  // Handlers
  const handleAddClass = async (data: SchemaProps) => {
    const result = await addClassStudent({
      studentId: data.studentId,
      classId: selectedClassId,
      schoolId: schoolId,
    });
    if (result.isSuccess) reset(data);
  };

  // const handleStudentInput = useCallback((val: string) => {
  //   if (studentSearchText === val) return;
  //   setStudentSearchText(val);
  // }, []);

  // Render
  return (
    <Box>
      <ContentBox
        label="افزودن دانش‌آموز به کلاس"
        onSubmit={handleSubmit(handleAddClass)}
        component="form"
      >
        <Grid container spacing={2}>
          {addClassStudentData.map((field) => (
            <ControlledAutocomplete
              key={field.name}
              control={control}
              name={field.name}
              label={field.label}
              placeholder={`لطفا ${field.label.toLowerCase()} را انتخاب نمایید`}
              options={field.optionsMapper(dataMap[field.name])}
              // inputValue={
              //   field.name === "studentId" ? studentSearchText : undefined
              // }
              // onInputChange={
              //   field.name === "studentId" ? handleStudentInput : undefined
              // }
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

export default AddClassStudent;
