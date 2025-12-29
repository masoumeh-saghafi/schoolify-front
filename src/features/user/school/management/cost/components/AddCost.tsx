// React Type
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm, useWatch, type Resolver } from "react-hook-form";

//Type Definitions
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";

// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Grid from "@schoolify/core/components/base/inputs/Grid";

// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import SubmitButton from "@schoolify/core/components/common/SubmitButton";
import ControlledAutocomplete from "@schoolify/core/components/common/ControlledAutocomplete";
import ControlledGridTextField from "@schoolify/core/components/common/ControlledGridTextField";
import ControlledPriceField from "@schoolify/core/components/common/ControlledPriceField";
import ControlledHiddenInput from "@schoolify/core/components/common/ControlledHiddenInput";
import AutocompleteSelect from "@schoolify/core/components/common/AutocompleteSelect";

// Custom Hooks
import useListStudents from "@schoolify/features/user/school/management/shared/hooks/useListStudents";
import useListSummaryEducationYear from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationYears";
import useAddCost from "../hooks/useAddCost";
import useMapToOptions from "@schoolify/core/hooks/common/useMapToOptions";
import useListSummaryEducationLevel from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationLevel";
import useListSummaryEducationGrade from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationGrade";
import useListSummaryClass from "@schoolify/features/user/school/management/shared/hooks/useListSummaryClass";
import useListSummaryCostTypes from "@schoolify/features/user/school/management/shared/hooks/useListSummaryCostTypes";

// Custom Utilities
import { addCostData } from "@schoolify/features/user/school/management/cost/utilities/addCostData";
import { validationSchema } from "@schoolify/features/user/school/management/cost/validation/costValid";

// Form schema
type SchemaProps = z.infer<typeof validationSchema>;

// Custom Types
interface AddCostProps {}

const AddCost = (props: AddCostProps) => {
  // const {} = props;

  // States
  const [selectedEducationYearId, setSelectedEducationYearId] = useState("");
  const [selectedEducationLevelId, setSelectedEducationLevelId] = useState("");
  const [selectedEducationGradeId, setSelectedEducationGradeId] = useState("");
  const [selectedClassId, setSelectedClassId] = useState("");
  const [referenceRecordId, setReferenceRecordId] = useState("");

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
      educationYearId: selectedEducationYearId,
      educationLevelId: selectedEducationLevelId,
      educationGradeId: selectedEducationGradeId,
      classRoomId: selectedClassId,
      // identityCode: `%${studentSearchText}%`
    },
    disabled: !selectedEducationYearId,
  });
  const { data: costTypesData } = useListSummaryCostTypes(
    selectedEducationYearId
  );
  const { mutateAsync: addCost } = useAddCost();

  const selectedCostTypeId = useWatch({
    control,
    name: "costTypeId",
  });

  const educationYearDataOptions = useMapToOptions(educationYearData);
  const educationLevelDataOptions = useMapToOptions(educationLevelsData);
  const educationGradeDataOptions = useMapToOptions(educationGradesData);
  const classDataOptions = useMapToOptions(classesData);

  const studentsDataAny: any[] = studentsData?.docs ?? [];
  const studentDataOptions = useMapToOptions(studentsDataAny);

  // Effect
  useEffect(() => {
    setValue("referenceRecordId", referenceRecordId);
  }, [referenceRecordId]);

  // Helpers
  const costType = costTypesData
    ?.filter((c) => c.id === selectedCostTypeId)
    ?.at(0);

  const dataMap: Record<string, any[]> = {
    costTypeId: costTypesData ?? [],
    educationYearId: educationYearData ?? [],
  };

  // Handlers
  const handleAddCost = async (data: SchemaProps) => {
    const result = await addCost({
      data: data,
      educationYearId: selectedEducationYearId,
    });
    if (result.isSuccess) reset(data);
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
            key="description"
          />

          <ControlledPriceField
            control={control}
            name="amount"
            label="مبلغ پرداختی"
            placeholder="مبلغ ثابت هزینه برای همه (مبلغ ثابت + مبلغ پرداختی = مبلغ نهایی)"
            key="paymentAmount"
          />

          <ControlledHiddenInput control={control} name="referenceRecordId" />

          {costType?.data?.referenceType === "educationYear" && (
            <>
              {selectedEducationYearId !== referenceRecordId &&
                setReferenceRecordId(selectedEducationYearId)}
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
