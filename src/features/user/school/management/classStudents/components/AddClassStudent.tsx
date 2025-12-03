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
import SubmitButton from "@schoolify/core/components/common/SubmitButton";
import { validationSchema } from "../validation/classValid";
import useListSummaryEducationYear from "@schoolify/features/user/shared/school/hooks/useListSummaryEducationYears";
import useListSummaryEducationLevel from "@schoolify/features/user/shared/school/hooks/useListSummaryEducationLevel";
import useListSummaryEducationGrade from "@schoolify/features/user/shared/school/hooks/useListSummaryEducationGrade";
import useAddClass from "../hooks/useAddClassStudent";
import useListSummaryClass from "@schoolify/features/user/shared/school/hooks/useListSummaryClass";
import useListStudents from "@schoolify/features/user/shared/school/hooks/useListStudents";
import { addClassStudentData } from "../utilities/addClassStudentData";
import ControlledAutocomplete from "@schoolify/core/components/common/ControlledAutocomplete";
import { useCallback, useState } from "react";

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
      classId: "",
    },
  });
  const [studentSearchText, setStudentSearchText] = useState("");

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
      identityCode: `%${studentSearchText}%`,
    },
    disabled: !selectedClassId,
  });

  //
  //
  const { mutateAsync: addClassStudent } = useAddClass();

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
    // if (result.isSuccess)
    // reset(
    //   { title: "" },
    //   {
    //     keepValues: true,
    //     keepDirty: false,
    //     keepErrors: true,
    //   }
    // );
  };
  const handleStudentInput = useCallback((val: string) => {
    if (studentSearchText === val) return;
    setStudentSearchText(val);
  }, []);

  // Render
  return (
    <Box>
      <ContentBox
        label="افزودن  کلاس"
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
              inputValue={
                field.name === "studentId" ? studentSearchText : undefined
              }
              onInputChange={
                field.name === "studentId" ? handleStudentInput : undefined
              }
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
