import Button from "@schoolify/core/components/base/inputs/Button";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import ContentBox from "@schoolify/core/components/common/ContentBox";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import { useNavigate } from "react-router-dom";
import useListSubscriptions from "../hooks/useListSubscriptions";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import FormattedDate from "@schoolify/core/components/common/FormattedDate";
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import { postRenewalSubscription } from "../utilities/api/api";
import useListUserSubscriptions from "../hooks/useListUserSubscriptions";
import routes from "@schoolify/core/utilities/routes";

dayjs.extend(jalaliday);

const calculateRemainingDays = (endDate: string | undefined) => {
  if (!endDate) return 0;

  const now = dayjs();
  const end = dayjs(endDate);
  const difference = end.diff(now, "day");
  return difference > 0 ? difference : 0;
};

const SubscriptionsPurchased = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useListUserSubscriptions();
  const theme = useAppTheme();

  if (isLoading) return <Typography>در حال بارگذاری...</Typography>;
  if (error)
    return <Typography color="error">خطا در دریافت اطلاعات</Typography>;

  const renewalHandler = async (
    subscriptionData: any,
    subscriptionId: string
  ) => {
    try {
      const response = await postRenewalSubscription(
        subscriptionData,
        subscriptionId
      );
      console.log(response.data);
      console.log(response);

      if (response.data?.paymentId) {
        navigate(routes.paymentGateway(response.data.paymentId), {
          state: { from: location.pathname },
        });
      } else {
        alert("مشکلی در دریافت اطلاعات پرداخت وجود دارد");
      }
    } catch (error) {
      alert("خطا در تمدید اشتراک. لطفاً دوباره تلاش کنید.");
    }
  };

  const activeSubscriptions =
    data?.filter((sub: any) => sub.data.status === "active") || [];

  return (
    <ContentBox label=" اشتراک‌های خریداری‌شده">
      <TableContainer
        sx={{
          borderColor: theme.palette.grey[100],
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ color: theme.palette.text.header }}>
              <TableCell>نام مدرسه</TableCell>
              <TableCell>زمان خرید</TableCell>
              <TableCell>زمان پایان</TableCell>
              <TableCell>مدت‌زمان باقی‌مانده (روز)</TableCell>
              <TableCell>آخرین بروزرسانی</TableCell>
              <TableCell>تمدید</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activeSubscriptions.map((sub, index) => {
              const daysRemaining = calculateRemainingDays(
                sub.data?.expireDate
              );
              return (
                <TableRow key={index} sx={{ color: theme.palette.text.black }}>
                  <TableCell>{sub.data?.school.data?.title}</TableCell>
                  <TableCell>
                    {sub.data?.createDate && (
                      <FormattedDate date={+new Date(sub.data.createDate)} />
                    )}
                  </TableCell>
                  <TableCell>
                    {sub.data?.expireDate && (
                      <FormattedDate date={+new Date(sub.data.expireDate)} />
                    )}
                  </TableCell>
                  <TableCell>{daysRemaining}</TableCell>
                  <TableCell>
                    {sub.data?.updateDate && (
                      <FormattedDate date={+new Date(sub.data.updateDate)} />
                    )}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      size="small"
                      disabled={daysRemaining <= 0}
                      onClick={() => renewalHandler({}, sub.id)}
                      sx={{
                        backgroundColor:
                          daysRemaining > 0
                            ? theme.palette.primary.main
                            : theme.palette.primary.dark,
                      }}
                    >
                      تمدید
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </ContentBox>
  );
};
export default SubscriptionsPurchased;
