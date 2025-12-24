// React Type
import { useForm } from "react-hook-form";

//Type Definitions
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";

// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import ContentBox from "@schoolify/core/components/common/ContentBox";

// Core Components
import ControlledAutocomplete from "@schoolify/core/components/common/ControlledAutocomplete";
import SubmitButton from "@schoolify/core/components/common/SubmitButton";

// Custom Utilities
import { updateAdminTicketData } from "@schoolify/features/admin/tickets/utilities/updateAdminTicketData";


// Validation Schema
import { updateAdminTicketValidationSchema } from "@schoolify/features/admin/tickets/validation/updateAdminTicketValidation";


// Form schema
type SchemaProps = z.infer<typeof updateAdminTicketValidationSchema>;

// Custom Types
interface UpdateAdminTicketDetailProps {
  recordId: string;
  defaultValues: SchemaProps;
  onSubmit?: (id: string, updatedFields: any, row: any) => void;
}

const UpdateAdminTicketDetail = (props: UpdateAdminTicketDetailProps) => {
  // Props
  const { defaultValues, onSubmit, recordId } = props;

  // Hooks
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isDirty },
  } = useForm<SchemaProps>({
    defaultValues,
    resolver: zodResolver(updateAdminTicketValidationSchema),
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
        <Grid container sx={{ margin: 2 }} spacing={2}>
          {updateAdminTicketData.map((field) => (
            <ControlledAutocomplete
              key={field.name}
              control={control}
              name={field.name as "status" | "type"}
              label={field.label}
              placeholder={`لطفا ${field.label} را انتخاب نمایید`}
              options={field.options.map((option) => ({
                key: option.id,
                value: option.title,
              }))}
            />
          ))}
          <Grid size={{ xs: 12, sm: 6 }}>
            <SubmitButton isValid={isValid} isDirty={isDirty}>
              ویرایش تیکت
            </SubmitButton>
          </Grid>
        </Grid>
      </ContentBox>
    </Box>
  );
};

export default UpdateAdminTicketDetail;
