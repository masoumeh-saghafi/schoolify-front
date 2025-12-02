import { useParams } from "react-router-dom";
import { useForm, useWatch, type SubmitHandler } from "react-hook-form";
import type { Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";

import Box from "@schoolify/core/components/base/inputs/Box";
import ContentBox from "@schoolify/core/components/common/ContentBox";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import ControlledGridTextField from "@schoolify/core/components/common/ControlledGridTextField";
import SubmitButton from "@schoolify/core/components/common/SubmitButton";
import ControlledAutocomplete from "@schoolify/core/components/common/ControlledAutocomplete";

import useListSummaryEducationYear from "@schoolify/features/user/shared/school/hooks/useListSummaryEducationYears";
import useMapToOptions, {
  type OptionType,
} from "@schoolify/core/hooks/common/useMapToOptions";

import useAddCostType from "../hooks/useAddCostType";
import { validationSchema } from "../validation/costTypeValid";
import { addCostFields } from "../utilities/addCostFields";

type SchemaProps = z.infer<typeof validationSchema>;

interface AddCostTypeProps {}

const AddCostType = (props: AddCostTypeProps) => {
  const { schoolId = "" } = useParams();

  // useForm with explicit Resolver typing to avoid the zod/TS mismatch
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isDirty },
  } = useForm<SchemaProps>({
    resolver: zodResolver(validationSchema) as unknown as Resolver<SchemaProps>,
    mode: "onChange",
    defaultValues: {
      title: "",
      baseAmount: 0 as unknown as number, // keep it number typed
      referenceType: "",
      isActive: undefined,
      educationYearId: "",
    },
  });

  // const isActiveValue = useWatch({ control, name: 'isActive' })

  const { data: educationYearData } = useListSummaryEducationYear(schoolId);

  const educationYearOptions: OptionType[] = useMapToOptions(educationYearData);

  const apiData: Record<string, OptionType[]> = {
    educationYearData: educationYearOptions,
  };

  const { mutateAsync: addCostType } = useAddCostType();

  const handleAddCostType: SubmitHandler<SchemaProps> = async (data) => {
    const result = await addCostType({
      data,
      educationYearId: data.educationYearId,
    });
    if (result.isSuccess) {
      reset(
        { title: "" },
        {
          keepValues: true,
          keepDirty: false,
          keepErrors: true,
        }
      );
    }
  };



  const normalizeStaticOptions = (opts: any[] | undefined): OptionType[] => {
    if (!opts) return [];
    return opts.map((o) => ({
      key: String(o.key ?? o.value ?? o.label ?? o),
      value: String(o.value ?? o.label ?? o),
    }));
  };

  function renderDynamicField(field: any) {
    switch (field.type) {
      case "text":
      case "number": {
        return (
          <ControlledGridTextField
            key={field.name}
            control={control as any}
            name={field.name}
            label={field.label}
            {...(field.type === "number"
              ? ({ inputProps: { inputMode: "numeric" } } as any)
              : {})}
          />
        );
      }

      case "select": {
       
        return (
         
          <ControlledAutocomplete
            key={field.name}
            control={control as any}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            options={normalizeStaticOptions(field.options)}
          />
        );
      }

      case "select-api": {
        return (
          
          <ControlledAutocomplete
            key={field.name}
            control={control as any}
            name={field.name}
            label={field.label}
            placeholder={`لطفا ${field.label.toLowerCase()} را انتخاب نمایید`}
            options={apiData[field.optionsKey] ?? []}
          />
        );
      }

      default:
        return null;
    }
  }

  return (
    <Box>
      <ContentBox
        label="ایجاد عنوان هزینه"
        component="form"
        onSubmit={handleSubmit(handleAddCostType)}
      >
        <Grid container spacing={2}>
          {/* render dynamic fields from addCostFields */}
          {addCostFields.map((field) => renderDynamicField(field))}

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

export default AddCostType;
