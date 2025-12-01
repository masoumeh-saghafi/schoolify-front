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
import { useCallback, useState } from "react";
import { validationSchema } from "../validation/costValid";
import useListSummaryCostTypes from "@schoolify/features/user/shared/school/hooks/useListSummaryCostTypes";
import useAddCost from "../hooks/useAddCost";
import { addCostData } from "../utilities/addCostData";
import AutocompleteSelect from "@schoolify/core/components/common/AutocompleteSelect";
import useMapToOptions from "@schoolify/core/hooks/common/useMapToOptions";
import ControlledHiddenInput from "@schoolify/core/components/common/ControlledHiddenInput";

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
    resolver: zodResolver(validationSchema) as unknown as Resolver<SchemaProps>,
    mode: "onChange",
    defaultValues: {
      description: "",
      amount: 0,
      referenceRecordId: "",
      costTypeId: "",
    },
  });

  const [referenceRecordId, setReferenceRecordId] = useState("");
  const [selectedEducationYearId, setSelectedEducationYearId] = useState("");

  const { data: educationYearData } = useListSummaryEducationYear(schoolId);
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
            options={useMapToOptions(educationYearData)}
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

          <ControlledHiddenInput
            control={control}
            name="referenceRecordId"
            defaultValue={referenceRecordId}
          />

          {costType?.data?.referenceType === "educationLevel" &&
            ""
            // <AutocompleteSelect
            //   label="سال تحصیلی"
            //   placeholder="لطفا یک سال را انتخاب نمایید"
            //   options={useMapToOptions(educationYearData)}
            //   value={selectedEducationYearId}
            //   onChange={setReferenceRecordId}
            // />
          }

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
