import ContentBox from "@schoolify/core/components/common/ContentBox";
import { useLocation } from "react-router-dom";
import { ticketDetailAdminValidationSchema } from "../validation/ticketDetailAdminValidation";
import type z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import ControlledGridTextField from "@schoolify/core/components/common/ControlledGridTextField";
import { adminTicketInfoData } from "../utilities/adminTicketInfoData";
import { statusOptions, typeOptions } from "../validation/baseTypes";
import DetailField from "@schoolify/core/components/common/DetailField";
import Tooltip from "@schoolify/core/components/base/inputs/Tooltip";
import Button from "@schoolify/core/components/base/inputs/Button";
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import Box from "@schoolify/core/components/base/inputs/Box";
// import useGetUserTicket from "../hooks/useGetUserTicket";
import { isDirty } from "zod/v3";
import useGetAdminTicket from "../hooks/useGetAdminTicket";
import useAddAdminTicketResponse from "../hooks/useAddAdminTicketResponse";
import UpdateAdminTicketDetail from "./UpdateAdminTicketDetail";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import FormattedDate from "@schoolify/core/components/common/FormattedDate";
import useUpdateAdminTicket from "../hooks/useUpdateAdminTicket";
import AsyncStateHandler from "@schoolify/core/components/common/AsyncStateHandler";
type SchemaProps = z.infer<typeof ticketDetailAdminValidationSchema>;

interface DetailAdminTicketProps {}

const DetailAdminTicket = (props: DetailAdminTicketProps) => {
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

  const handleAddAdminTicketResponse = async (data: SchemaProps) => {
    const result = await addAdminTicketResponse({
      data: data,
      ticketId: ticketId,
    });
    if (result.isSuccess) handleReset();
  };

  // const handleCloseTicket = async () => {
  //   await closeTicket({ ticketId: ticketId })
  //   // if (result.isSuccess) reset();
  // }
  const handleReset = () => {
    reset({ content: "" });
  };
  const handleUpdateAdminTicket = async (id: string, updatedFields: any) => {
    await updateAdminTicket({
      data: updatedFields,
      ticketId: id,
    });
  };

  const adminTicketFields = adminTicketInfoData(
    ticketAdminData?.data,
    typeOptions,
    statusOptions
  );
  if (!ticketId) return <>تیکت نامعتبر</>;
  console.log(ticketAdminData);

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
