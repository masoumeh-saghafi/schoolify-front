// React Type
import { useForm } from "react-hook-form";

//Type Definitions
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";

// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Grid from "@schoolify/core/components/base/inputs/Grid";

// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import ControlledGridTextField from "@schoolify/core/components/common/ControlledGridTextField";
import ControlledAutocomplete from "@schoolify/core/components/common/ControlledAutocomplete";
import SubmitButton from "@schoolify/core/components/common/SubmitButton";
import ControlledPriceField from "@schoolify/core/components/common/ControlledPriceField";
import type { OptionType } from "@schoolify/core/hooks/common/useMapToOptions";

// Validation Schema
import { updateCostTypeValidationSchema } from "@schoolify/features/user/school/management/costType/validation/updateStudentValidationSchema";
import { isActiveTypes } from "../validation/baseTypes";

// Form schema
type SchemaProps = z.infer<typeof updateCostTypeValidationSchema>;

// Custom Types
interface UpdateCostTypeProps {
  recordId: string;
  defaultValues: SchemaProps;
  onSubmit?: (id: string, updatedFields: any, row: any) => void;
}

const UpdateCostType = (props: UpdateCostTypeProps) => {
  // Props
  const { defaultValues, onSubmit, recordId } = props;

  // Hooks
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, isDirty },
  } = useForm({
    defaultValues,
    resolver: zodResolver(updateCostTypeValidationSchema),
    mode: "onChange",
  });

  // Handlers
  const handleUpdateRecord = async (data: SchemaProps) => {
    onSubmit?.(recordId, data, data);
    reset(data);
  };

  // Render
  return (
    <Box>
      <ContentBox onSubmit={handleSubmit(handleUpdateRecord)} component="form">
        <Grid container spacing={2.5}>
          <ControlledGridTextField
            key="CostType"
            control={control}
            name="title"
            label="عنوان هزینه"
          />
          <ControlledPriceField
            control={control}
            name="baseAmount"
            label="هزینه ثابت"
          />
          <ControlledAutocomplete
            control={control}
            name="isActive"
            label="وضعیت"
            placeholder="لطفا یک مورد را انتخاب نمایید"
            options={isActiveTypes}
          />

          <Grid size={{ xs: 12, sm: 6 }}>
            <SubmitButton isValid={isValid} isDirty={isDirty}>
              ویرایش
            </SubmitButton>
          </Grid>
        </Grid>
      </ContentBox>
    </Box>
  );
};

export default UpdateCostType;
