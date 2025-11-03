import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import { useNavigate } from "react-router-dom";
import useListSubscriptions from "../hooks/useListSubscriptions";
import { useState } from "react";
import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response";
import type ListSubscriptionsEntity from "../../editInfo/types/api/ListSubscriptionsEntity";
import ContentBox from "@schoolify/core/components/common/ContentBox";
import Paper from "@schoolify/core/components/base/inputs/Paper";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import Button from "@schoolify/core/components/base/inputs/Button";
import TextField from "@schoolify/core/components/base/inputs/TextField";
import { postBuySubscriptions } from "../utilities/api/api";
import routes from "@schoolify/core/utilities/routes";

const BuySubscription = () => {
  const navigate = useNavigate();
  const theme = useAppTheme();
  const { data, isLoading, error } = useListSubscriptions();
  const [schoolTitles, setSchoolTitles] = useState<Record<number, string>>({});

  const handleBuySubscription = async (
    subscription: BaseIdDataEntity<ListSubscriptionsEntity>,
    schoolTitle: string
  ) => {
    try {
      const payload = {
        schoolTitle,
        subscriptionId: subscription.id,
      };

      const response = await postBuySubscriptions(payload);

      if (response.data?.paymentId) {
        navigate(routes.paymentGateway(response.data.paymentId), {
          state: { from: location.pathname },
        });
      } else {
        alert("مشکلی در دریافت اطلاعات پرداخت وجود دارد");
      }
    } catch (error) {
      console.error(error);
      alert("خطا در برقراری ارتباط با سرور");
    }
  };

  return (
    <ContentBox label="خرید اشتراک ">
      <Grid container spacing={2}>
        {data?.map((subscription: any, index: any) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Paper
              elevation={2}
              sx={{
                p: 2,
                borderRadius: 2,
                borderColor: theme.palette.info.dark,
                backgroundColor: theme.palette.primary.light,
                textAlign: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{ color: theme.palette.text.cardTitle }}
                mb={1}
              >
                {subscription.data?.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.black }}
              >
                مدت زمان : {subscription.data?.daysCount} روز
              </Typography>
              <Typography
                variant="body2"
                my={1}
                sx={{
                  color: theme.palette.text.black,
                }}
              >
                مبلغ : {subscription.data?.amount.toLocaleString()} تومان
              </Typography>
              <TextField
                label="نام مدرسه"
                fullWidth
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                placeholder="لطفا نام مدرسه را وارد نمایید"
                size="small"
                sx={{
                  my: 1,
                  textAlign: "right",
                  backgroundColor: theme.palette.background.paper,
                  "& .MuiOutlinedInput-root": {
                    fontSize: "0.70rem", // سایز متن ورودی
                    color: theme.palette.text.placeholder, // رنگ متن ورودی

                    "& input": {
                      color: theme.palette.text.black, // رنگ متن تایپ‌شده
                    },
                    " fieldset": {
                      borderColor: theme.palette.grey[300], // رنگ پیش‌فرض بردر
                    },
                    "&:hover fieldset": {
                      borderColor: theme.palette.grey[300], // هاور
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.grey[600], // فوکوس
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: theme.palette.text.label,
                  },
                }}
                value={schoolTitles[index] || ""}
                onChange={(event: any) =>
                  setSchoolTitles({
                    ...schoolTitles,
                    [index]: event.target.value,
                  })
                }
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                disabled={!schoolTitles[index]}
                onClick={() =>
                  handleBuySubscription(subscription, schoolTitles[index])
                }
              >
                خرید اشتراک
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </ContentBox>
  );
};

export default BuySubscription;
