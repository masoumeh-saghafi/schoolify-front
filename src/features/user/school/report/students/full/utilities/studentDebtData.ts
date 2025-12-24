import type StudentReportEntity from "@schoolify/features/user/school/report/students/full/types/api/StudentReportEntity";
interface StudentDebtField {
  label: string;
  value?: string | number | null;
}

export const StudentDebtData = (
  data: StudentReportEntity | null | undefined
): StudentDebtField[] => [
  {
    label: "مبلغ قابل پرداخت بدون احتساب تخفیف",
    value: data?.debtStatus.totalPaymentAmountWithoutDiscount.toLocaleString(),
  },
  {
    label: "تخفیف",
    value: Math.abs(data?.debtStatus.totalDiscount ?? 0).toLocaleString(),
  },
  {
    label: "مبلغ قابل پرداخت",
    value: data?.debtStatus.totalPaymentAmount.toLocaleString(),
  },
  {
    label: "مبلغ پرداخت شده",
    value: data?.debtStatus.totalPayedAmount.toLocaleString(),
  },
  {
    label: "مبلغ بدهی (باقیمانده)",
    value: data?.debtStatus.totalDebt.toLocaleString(),
  },
];
