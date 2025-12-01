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
import SubmitButton from "@schoolify/core/components/common/SubmitButton";

import useListSummaryEducationYear from "@schoolify/features/user/shared/school/hooks/useListSummaryEducationYears";

import ControlledAutocomplete from "@schoolify/core/components/common/ControlledAutocomplete";
import { useCallback, useState } from "react";
import { validationSchema } from "../validation/costValid";
import useListSummaryCostTypes from "@schoolify/features/user/shared/school/hooks/useListSummaryCostTypes";
import useAddCost from "../hooks/useAddCost";


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
    formState: { isValid, isDirty },
  } = useForm<SchemaProps>({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
       description: "",
      amount: 0,
      referenceRecordId: "",
      costTypeId: "",
    },
  });

const [selectedEducationYearId, setSelectedEducationYearId] = useState('')
const [studentSearchText, setStudentSearchText] = useState('')

  const { data: educationYearData } = useListSummaryEducationYear(schoolId);
const { data: costTypesData} =
  useListSummaryCostTypes(selectedEducationYearId)


  //
  //
  const { mutateAsync: addCost } = useAddCost();


  const dataMap: Record<string, any[]> = {
    educationYearId: educationYearData ?? [],

  };

  // Handlers
const handleAddCost = async (data: SchemaProps) => {
  const result = await addCost({
    data: data,
  educationYearId: data.costTypeId // i thing is it false???
  })
  if (result.isSuccess)
    reset(
     {description:''},
      {
        keepValues: true,
        keepDirty: false,
        keepErrors: true
      }
    )
}

  const handleStudentInput = useCallback((val: string) => {
    setStudentSearchText(val);
  }, []);

  // Render
  return (
    <Box>
      <ContentBox
        label="افزودن  کلاس"
        onSubmit={handleSubmit(handleAddCost)}
        component="form"
      >
        <Grid container spacing={2}>
          {addCostData.map((field) => (
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

export default AddCost;
