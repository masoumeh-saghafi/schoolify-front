// MUI Components
import Button from "@schoolify/core/components/base/inputs/Button";

// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import DataTable from "@schoolify/core/components/common/DataTable";
import FormattedDate from "@schoolify/core/components/common/FormattedDate";

// Custom Hooks
import useListPayment, {
  listPaymentQueryKey,
} from "@schoolify/features/user/profile/accountManagement/payment/hooks/useListPayment";
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import AsyncStateHandler from "@schoolify/core/components/common/AsyncStateHandler";

// Custom Utilities
import { TransactionsColumns } from "@schoolify/features/user/profile/accountManagement/payment/utilities/RecentPaymentsData";

// React Type
import { useNavigate } from "react-router-dom";
import routes from "@schoolify/core/utilities/routes";

// Utility Function
const translateStatus = (status: string) => {
  switch (status) {
    case "processing":
      return "در حال پردازش";
    case "success":
      return "موفقیت‌آمیز";
    case "failure":
      return "ناموفق";
    default:
      return status;
  }
};

const RecentPayments = () => {
  // Hooks
  const navigate = useNavigate();
  const { data, isLoading, error } = useListPayment();
  const theme = useAppTheme();

  // Helpers
  const columns = TransactionsColumns();

  // Handlers
  const redirectToPaymentHandler = (paymentId: string) => {
    navigate(routes.paymentGateway(paymentId), {
      state: {
        from: location.pathname + location.hash,
        refetchQueryKey: listPaymentQueryKey,
      },
    });
  };

  // Render
  return (
    <ContentBox label="تراکنش‌های اخیر">
      <AsyncStateHandler isLoading={isLoading} error={error}>
        <DataTable
          columns={columns}
          rows={
            data?.map((payment: any) => ({
              id: payment.id,
              title: payment.data?.title,
              createDate: payment.data?.createDate,
              amount: payment.data?.amount,
              updateDate: payment.data?.updateDate,
              status: payment.data?.status,
            })) || []
          }
          renderCell={(row, col) => {
            switch (col.id) {
              case "createDate":
              case "updateDate":
                return row[col.id] ? (
                  <FormattedDate date={+new Date(row[col.id])} />
                ) : (
                  "---"
                );
              case "amount":
                return row.amount?.toLocaleString() || "---";
              case "status":
                return translateStatus(row.status);
              case "actions":
                return (
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    sx={{
                      minWidth: 100,
                      backgroundColor:
                        row.status === "processing"
                          ? theme.palette.primary.main
                          : theme.palette.primary.dark,
                    }}
                    onClick={() => redirectToPaymentHandler(row.id)}
                    disabled={row.status !== "processing"}
                  >
                    ورود به درگاه
                  </Button>
                );
              default:
                return row[col.id] || "---";
            }
          }}
        />
      </AsyncStateHandler>
    </ContentBox>
  );
};

export default RecentPayments;
