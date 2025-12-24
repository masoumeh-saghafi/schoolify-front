import type StudentReportEntity from "@schoolify/features/user/school/report/students/full/types/api/StudentReportEntity";
import { referenceTypeLabels } from "@schoolify/features/user/school/report/students/full/validation/baseTypes";

export interface StudentCostField {
  title: string;
  baseAmount?: number | undefined | null;
  referenceType: string | number;
  variableAmount?: number | undefined | null;
  description: string;
}
export const StudentCostData = (
  data: StudentReportEntity | null | undefined
): StudentCostField[] => {
  if (!data?.costs) return [];

  return (
    data.costs.map((cost) => ({
      title: cost.data?.costType?.data?.title ?? "",
      baseAmount: cost.data?.costType?.data?.baseAmount,
      referenceType:
        referenceTypeLabels[cost.data?.costType.data?.referenceType ?? 0] ||
        cost.data?.costType?.data?.referenceType ||
        "",
      variableAmount: cost.data?.amount ?? 0,
      description: cost.data?.description ?? "",
    })) ?? []
  );
};

export const studentCostColumns = [
  { id: "title", label: "عنوان هزینه" },
  { id: "baseAmount", label: "مبلغ ثابت" },
  { id: "referenceType", label: "نوع" },
  { id: "variableAmount", label: "مبلغ متغیر" },
  { id: "description", label: "توضیحات" },
];
