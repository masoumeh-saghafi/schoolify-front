// React Type
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import ContentBox from "@schoolify/core/components/common/ContentBox";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import DetailField from "@schoolify/core/components/common/DetailField";
import Button from "@schoolify/core/components/base/inputs/Button";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import Card from "@schoolify/core/components/base/inputs/Card";
import CardContent from "@schoolify/core/components/base/inputs/CardContent";

// Core Components
import ControlledGridTextField from "@schoolify/core/components/common/ControlledGridTextField";
import FormattedDate from "@schoolify/core/components/common/FormattedDate";
import AsyncStateHandler from "@schoolify/core/components/common/AsyncStateHandler";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import useGetAdminTicket from "@schoolify/features/admin/tickets/hooks/useGetAdminTicket";
import useAddAdminTicketResponse from "@schoolify/features/admin/tickets/hooks/useAddAdminTicketResponse";
import useUpdateAdminTicket from "@schoolify/features/admin/tickets/hooks/useUpdateAdminTicket";

// Feature Components
import UpdateAdminTicketDetail from "@schoolify/features/admin/tickets/components/UpdateAdminTicketDetail";

// Custom Utilities
import { adminTicketInfoData } from "@schoolify/features/admin/tickets/utilities/adminTicketInfoData";

// Validation Schema
import { ticketDetailAdminValidationSchema } from "@schoolify/features/admin/tickets/validation/ticketDetailAdminValidation";
import {
  statusOptions,
  typeOptions,
} from "@schoolify/features/admin/tickets/validation/baseTypes";

//Type Definitions
import type z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { isDirty } from "zod/v3";

// Form schema
type SchemaProps = z.infer<typeof ticketDetailAdminValidationSchema>;

// Custom Types
interface DetailAdminTicketProps {}

const DetailAdminTicket = (props: DetailAdminTicketProps) => {
  // Hooks
  const location = useLocation();

  const queryParams = location.hash.split("?")[1];
  const params = new URLSearchParams(queryParams);
  const ticketId = params.get("id") ?? "";

  const {
    data: ticketAdminData,
    isLoading,
    error,
  } = useGetAdminTicket(ticketId);
  const theme = useAppTheme();
  const { mutateAsync: updateAdminTicket } = useUpdateAdminTicket();
  const { mutateAsync: addAdminTicketResponse } = useAddAdminTicketResponse();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<SchemaProps>({
    resolver: zodResolver(ticketDetailAdminValidationSchema),
    mode: "onChange",
    defaultValues: {
      content: "",
    },
  });

  // Handlers
  const handleAddAdminTicketResponse = async (data: SchemaProps) => {
    const result = await addAdminTicketResponse({
      data: data,
      ticketId: ticketId,
    });
    if (result.isSuccess) handleReset();
  };

  const handleReset = () => {
    reset({ content: "" });
  };
  const handleUpdateAdminTicket = async (id: string, updatedFields: any) => {
    await updateAdminTicket({
      data: updatedFields,
      ticketId: id,
    });
  };

  // Helpers
  const adminTicketFields = adminTicketInfoData(
    ticketAdminData?.data,
    typeOptions,
    statusOptions
  );
  if (!ticketId) return <>تیکت نامعتبر</>;

  // Render
  return (
    <Box>
      <ContentBox label="مشخصات تیکت">
        <AsyncStateHandler isLoading={isLoading} error={error}>
          <Grid container spacing={2} sx={{ m: 2 }}>
            {adminTicketFields.map((field, index) => (
              <DetailField
                key={index}
                label={field.label}
                value={field.value}
              />
            ))}
          </Grid>
        </AsyncStateHandler>
      </ContentBox>

      <ContentBox label="ویرایش تیکت">
        <AsyncStateHandler isLoading={isLoading} error={error}>
          <UpdateAdminTicketDetail
            recordId={ticketAdminData?.id ?? ""}
            onSubmit={handleUpdateAdminTicket}
            defaultValues={{
              status: ticketAdminData?.data?.status ?? "close",
              type: ticketAdminData?.data?.type ?? "support",
            }}
          />
        </AsyncStateHandler>
      </ContentBox>

      <ContentBox
        label="ارسال پاسخ"
        component="form"
        onSubmit={handleSubmit(handleAddAdminTicketResponse)}
      >
        <ControlledGridTextField
          key="content"
          label="متن پیام"
          name="content"
          rows={5}
          helperText={errors.content?.message}
          multiline={true}
          control={control}
          sm={12}
          xs={12}
        />

        <Grid
          size={12}
          display="flex"
          justifyContent="flex-end"
          gap={2}
          sx={{ mt: 2 }}
        >
          <Button variant="outlined" color="secondary" onClick={handleReset}>
            لغو
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={!isValid || !isDirty}
          >
            ارسال
          </Button>
        </Grid>
      </ContentBox>

      <ContentBox label="لیست پیام‌ها">
        <AsyncStateHandler isLoading={isLoading} error={error}>
          {ticketAdminData?.data?.messages?.map((message, index) => {
            const role = message.user.role;
            let backgroundColor = theme.palette.background.default;

            if (role === "support") {
              backgroundColor = theme.palette.background.support;
            } else if (role === "user") {
              backgroundColor = theme.palette.background.user;
            }

            return (
              <Card key={index} sx={{ mb: 2, backgroundColor }}>
                <CardContent sx={{ position: "relative" }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ mb: 1, fontWeight: "bold" }}
                  >
                    {message.user?.fullName}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 3,
                      color: theme.palette.text.black,
                      textAlign: "justify",
                    }}
                  >
                    {message.content}
                  </Typography>

                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ position: "absolute", bottom: 8, right: 16 }}
                  >
                    <FormattedDate date={message.createDate} showTime />
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </AsyncStateHandler>
      </ContentBox>
    </Box>
  );
};
export default DetailAdminTicket;
