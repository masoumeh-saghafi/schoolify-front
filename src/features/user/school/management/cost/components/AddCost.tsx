// MUI Components

// Core Components

// Feature Components

// Custom Hooks

// React Type
import { useParams } from "react-router-dom";
import { useForm, useWatch, type Resolver } from "react-hook-form";

//Type Definitions
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";

import Box from "@schoolify/core/components/base/inputs/Box";
import ContentBox from "@schoolify/core/components/common/ContentBox";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import SubmitButton from "@schoolify/core/components/common/SubmitButton";

import useListSummaryEducationYear from "@schoolify/features/user/shared/school/hooks/useListSummaryEducationYears";

import ControlledAutocomplete from "@schoolify/core/components/common/ControlledAutocomplete";
import { useCallback, useEffect, useState } from "react";
import { validationSchema } from "../validation/costValid";
import useListSummaryCostTypes from "@schoolify/features/user/shared/school/hooks/useListSummaryCostTypes";
import useAddCost from "../hooks/useAddCost";
import { addCostData } from "../utilities/addCostData";
import AutocompleteSelect from "@schoolify/core/components/common/AutocompleteSelect";
import useMapToOptions from "@schoolify/core/hooks/common/useMapToOptions";
import ControlledHiddenInput from "@schoolify/core/components/common/ControlledHiddenInput";
import useListSummaryEducationLevel from "@schoolify/features/user/shared/school/hooks/useListSummaryEducationLevel";
import useListSummaryEducationGrade from "@schoolify/features/user/shared/school/hooks/useListSummaryEducationGrade";
import useListSummaryClass from "@schoolify/features/user/shared/school/hooks/useListSummaryClass";
import useListStudents from "@schoolify/features/user/shared/school/hooks/useListStudents";
import ControlledTextField from "@schoolify/core/components/common/ControlledTextField";
import ControlledGridTextField from "@schoolify/core/components/common/ControlledGridTextField";

type SchemaProps = z.infer<typeof validationSchema>;

interface AddCostProps {}

const AddCost = (props: AddCostProps) => {
  // const {} = props;
  const { schoolId = "" } = useParams();

  // Hooks
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { isValid, isDirty },
  } = useForm<SchemaProps>({
    resolver: zodResolver(validationSchema) as unknown as Resolver<SchemaProps>,
    mode: "onChange",
    defaultValues: {
      description: "",
      amount: 0,
      referenceRecordId: "",
      costTypeId: "",
    },
  });

  const [studentSearchText, setStudentSearchText] = useState("");

  const [selectedEducationYearId, setSelectedEducationYearId] = useState("");
  const [selectedEducationLevelId, setSelectedEducationLevelId] = useState("");
  const [selectedEducationGradeId, setSelectedEducationGradeId] = useState("");
  const [selectedClassId, setSelectedClassId] = useState("");
  const [selectedStudentId, setSelectedStudentId] = useState("");

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
      educationYearId: selectedEducationYearId,
      educationLevelId: selectedEducationLevelId,
      educationGradeId: selectedEducationGradeId,
      classRoomId: selectedClassId,
      identityCode: `%${studentSearchText}%`,
    },
    disabled: !selectedEducationYearId,
  });

  const [referenceRecordId, setReferenceRecordId] = useState("");

  useEffect(() => {
    setValue("referenceRecordId", referenceRecordId);
  }, [referenceRecordId]);
  // const [selectedEducationYearId, setSelectedEducationYearId] = useState("");
  // const { data: educationYearData } = useListSummaryEducationYear(schoolId);

  const { data: costTypesData } = useListSummaryCostTypes(
    selectedEducationYearId
  );

  const selectedCostTypeId = useWatch({
    control,
    name: "costTypeId",
  });
  const costType = costTypesData
    ?.filter((c) => c.id === selectedCostTypeId)
    ?.at(0);
  //
  //
  const { mutateAsync: addCost } = useAddCost();

  const dataMap: Record<string, any[]> = {
    costTypeId: costTypesData ?? [],
    educationYearId: educationYearData ?? [],
  };

  const educationYearDataOptions = useMapToOptions(educationYearData);
  const educationLevelDataOptions = useMapToOptions(educationLevelsData);
  const educationGradeDataOptions = useMapToOptions(educationGradesData);
  const classDataOptions = useMapToOptions(classesData);

  const studentsDataAny: any[] = studentsData?.docs ?? [];
  const studentDataOptions = useMapToOptions(studentsDataAny);
  // Handlers
  const handleAddCost = async (data: SchemaProps) => {
    const result = await addCost({
      data: data,
      educationYearId: selectedEducationYearId,
    });
    if (result.isSuccess)
      reset(
        { description: "" },
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
        label="افزودن هزینه"
        onSubmit={handleSubmit(handleAddCost)}
        component="form"
      >
        <Grid container spacing={2}>
          <AutocompleteSelect
            label="سال تحصیلی"
            placeholder="لطفا یک سال را انتخاب نمایید"
            options={educationYearDataOptions}
            value={selectedEducationYearId}
            onChange={setSelectedEducationYearId}
          />

          {addCostData.map((field) => (
            <ControlledAutocomplete
              key={field.name}
              control={control}
              name={field.name}
              label={field.label}
              placeholder={`لطفا ${field.label.toLowerCase()} را انتخاب نمایید`}
              options={field.optionsMapper(dataMap[field.name])}
            />
          ))}

          <ControlledGridTextField
            control={control}
            name="description"
            label="توضیحات"
          />

          <ControlledGridTextField
            control={control}
            name="amount"
            label="مبلغ پرداختی"
            // type="number"
          />

          <ControlledHiddenInput control={control} name="referenceRecordId" />

          {/* {costType?.} */}

          {costType?.data?.referenceType === "educationYear" && (
            <>
              {selectedEducationYearId !== referenceRecordId &&
                setReferenceRecordId(selectedEducationYearId)}
              {/* <AutocompleteSelect
                label="سال تحصیلی"
                placeholder="لطفا یک سال را انتخاب نمایید"
                options={educationYearDataOptions}
                value={selectedEducationYearId}
                onChange={setReferenceRecordId}
                disabled={true}
              /> */}
            </>
          )}
          {costType?.data?.referenceType === "educationLevel" && (
            <>
              <AutocompleteSelect
                label="مقطع تحصیلی"
                placeholder="لطفا یک مقطع را انتخاب نمایید"
                options={educationLevelDataOptions}
                value={referenceRecordId}
                onChange={setReferenceRecordId}
              />
            </>
          )}
          {costType?.data?.referenceType === "educationGrade" && (
            <>
              <AutocompleteSelect
                label="مقطع تحصیلی"
                placeholder="لطفا یک مقطع را انتخاب نمایید"
                options={educationLevelDataOptions}
                value={selectedEducationLevelId}
                onChange={setSelectedEducationLevelId}
              />
              <AutocompleteSelect
                label="پایه تحصیلی"
                placeholder="لطفا یک پایه را انتخاب نمایید"
                options={educationGradeDataOptions}
                value={referenceRecordId}
                onChange={setReferenceRecordId}
              />
            </>
          )}
          {costType?.data?.referenceType === "class" && (
            <>
              <AutocompleteSelect
                label="مقطع تحصیلی"
                placeholder="لطفا یک مقطع را انتخاب نمایید"
                options={educationLevelDataOptions}
                value={selectedEducationLevelId}
                onChange={setSelectedEducationLevelId}
              />
              <AutocompleteSelect
                label="پایه تحصیلی"
                placeholder="لطفا یک پایه را انتخاب نمایید"
                options={educationGradeDataOptions}
                value={selectedEducationGradeId}
                onChange={setSelectedEducationGradeId}
              />
              <AutocompleteSelect
                label="کلاس"
                placeholder="لطفا یک کلاس را انتخاب نمایید"
                options={classDataOptions}
                value={referenceRecordId}
                onChange={setReferenceRecordId}
              />
            </>
          )}
          {costType?.data?.referenceType === "student" && (
            <>
              <AutocompleteSelect
                label="مقطع تحصیلی"
                placeholder="لطفا یک مقطع را انتخاب نمایید"
                options={educationLevelDataOptions}
                value={selectedEducationLevelId}
                onChange={setSelectedEducationLevelId}
              />
              <AutocompleteSelect
                label="پایه تحصیلی"
                placeholder="لطفا یک پایه را انتخاب نمایید"
                options={educationGradeDataOptions}
                value={selectedEducationGradeId}
                onChange={setSelectedEducationGradeId}
              />
              <AutocompleteSelect
                label="کلاس"
                placeholder="لطفا یک کلاس را انتخاب نمایید"
                options={classDataOptions}
                value={selectedClassId}
                onChange={setSelectedClassId}
              />
              <AutocompleteSelect
                label="دانش‌آموز"
                placeholder="لطفا یک دانش‌آموز را انتخاب نمایید"
                options={studentDataOptions}
                value={referenceRecordId}
                onChange={setReferenceRecordId}
              />
            </>
          )}

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

export default AddCost;
