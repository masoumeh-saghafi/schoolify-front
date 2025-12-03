import useMapToOptions, {
  type OptionType,
} from "@schoolify/core/hooks/common/useMapToOptions";

type StudentPaymentFields = "educationYearId" | "studentId";

export const addStudentPaymentData: {
  name: StudentPaymentFields;
  label: string;
  optionsMapper: (data: any[]) => OptionType[];
  loading: boolean;
}[] = [
  {
    name: "educationYearId",
    label: "سال تحصیلی",
    optionsMapper: useMapToOptions,
    loading: false,
  },
  {
    name: "studentId",
    label: "دانش‌آموز",
    optionsMapper: useMapToOptions,
    loading: false,
  },
];
