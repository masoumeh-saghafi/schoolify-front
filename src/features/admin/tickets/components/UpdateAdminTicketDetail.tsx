// React Type
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

//Type Definitions
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";

// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Grid from "@schoolify/core/components/base/inputs/Grid";

// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import ControlledAutocomplete from "@schoolify/core/components/common/ControlledAutocomplete";

// Custom Utilities
// import { UpdateAdminTicketDetailData } from '@schoolify/features/user/school/management/Ticket/utilities/UpdateAdminTicketDetailData'

// Validation Schema

// import { identityTypeOptions } from '@schoolify/features/user/school/management/Ticket/validation/baseTypes'

// Custom Hooks
// import useUpdateAdminTicketDetail from '@schoolify/features/user/school/management/Ticket/hooks/useUpdateAdminTicketDetail'
// import useUpdateAdminTicketDetail from '../hooks/useUpdateAdminTicketDetail'
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import { updateAdminTicketValidationSchema } from "../validation/updateAdminTicketValidation";
import useGetAdminTicket from "../hooks/useGetAdminTicket";
import useUpdateAdminTicket from "../hooks/useUpdateAdminTicket";
import { updateAdminTicketData } from "../utilities/updateAdminTicketData";
import SubmitButton from "@schoolify/core/components/common/SubmitButton";
import { useEffect } from "react";

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

  const theme = useAppTheme();
  const { ticketId = "" } = useParams();

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
