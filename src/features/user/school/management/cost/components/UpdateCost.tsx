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
import SubmitButton from "@schoolify/core/components/common/SubmitButton";

// Validation Schema
import { updateCostValidationSchema } from "@schoolify/features/user/school/management/cost/validation/updateCostValidationSchema";
import ControlledPriceField from "@schoolify/core/components/common/ControlledPriceField";

// Form schema
type SchemaProps = z.infer<typeof updateCostValidationSchema>;

// Custom Types
interface UpdateCostProps {
  recordId: string;
  defaultValues: SchemaProps;
  onSubmit?: (id: string, updatedFields: any, row: any) => void;
}

const UpdateCost = (props: UpdateCostProps) => {
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
    resolver: zodResolver(updateCostValidationSchema),
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
            key="description"
            control={control}
            name="description"
            label="توضیحات"
          />

          <ControlledPriceField
            control={control}
            name="amount"
            label="مبلغ پرداختی"
            placeholder="مبلغ ثابت هزینه برای همه (مبلغ ثابت + مبلغ پرداختی = مبلغ نهایی)"
            key="paymentAmount"
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

export default UpdateCost;
