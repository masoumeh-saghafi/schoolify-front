// React Type
import { useParams } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { Resolver } from "react-hook-form";

//Type Definitions
import type z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import ContentBox from "@schoolify/core/components/common/ContentBox";
import Grid from "@schoolify/core/components/base/inputs/Grid";

// Core Components
import ControlledGridTextField from "@schoolify/core/components/common/ControlledGridTextField";
import SubmitButton from "@schoolify/core/components/common/SubmitButton";
import ControlledAutocomplete from "@schoolify/core/components/common/ControlledAutocomplete";
import ControlledPriceField from "@schoolify/core/components/common/ControlledPriceField";

// Custom Hooks
import useListSummaryEducationYear from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationYears";
import useMapToOptions from "@schoolify/core/hooks/common/useMapToOptions";
import useAddCostType from "@schoolify/features/user/school/management/costType/hooks/useAddCostType";

// Custom Utilities
import { addCostTypeData } from "@schoolify/features/user/school/management/costType/utilities/addCostTypeData";

// Validation Schema
import { validationSchema } from "@schoolify/features/user/school/management/costType/validation/costTypeValid";

// Form schema
type SchemaProps = z.infer<typeof validationSchema>;

// Custom Types
interface AddCostTypeProps {}

const AddCostType = (props: AddCostTypeProps) => {
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
      title: "",
      baseAmount: 0 as unknown as number, // keep it number typed
      referenceType: "",
      isActive: undefined,
      educationYearId: "",
    },
  });

  const { schoolId = "" } = useParams();
  const { data: educationYearData } = useListSummaryEducationYear(schoolId);

  const educationYearOptions = useMapToOptions(educationYearData);

  const { mutateAsync: addCostType } = useAddCostType();

  // Handlers
  const handleAddCostType: SubmitHandler<SchemaProps> = async (data) => {
    const result = await addCostType({
      data,
      educationYearId: data.educationYearId,
    });
    if (result.isSuccess) reset(data);
  };

  // Render
  return (
    <Box>
      <ContentBox
        label="ایجاد عنوان هزینه"
        component="form"
        onSubmit={handleSubmit(handleAddCostType)}
      >
        <Grid container spacing={2}>
          <ControlledGridTextField
            control={control}
            name="title"
            label="عنوان هزینه"
            placeholder="مثال: سرویس / شهریه ثابت / اردوی مشهد اسفندماه"
          />
          <ControlledPriceField
            control={control}
            name="baseAmount"
            label="مبلغ پایه"
            placeholder="مبلغ ثابت هزینه برای همه (مبلغ ثابت + مبلغ پرداختی = مبلغ نهایی)"
          />
          <ControlledAutocomplete
            label="سال تحصیلی"
            name="educationYearId"
            control={control}
            options={educationYearOptions}
            placeholder="لطفا یک سال را انتخاب نمایید"
          />

          {addCostTypeData.map((field) => (
            <ControlledAutocomplete
              key={field.name}
              control={control as any}
              name={field.name}
              label={field.label}
              placeholder={`لطفا ${field.label.toLowerCase()} را انتخاب نمایید`}
              options={
                (field as any).options?.map((option: any) => ({
                  key: option.key,
                  value: option.label || option.value || option.key,
                })) || []
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

export default AddCostType;
