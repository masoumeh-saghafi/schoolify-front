import useMapToOptions, {
  type OptionType,
} from "@schoolify/core/hooks/common/useMapToOptions";

type ClassStudentFields =
  | "educationYearId"
  | "educationLevelId"
  | "educationGradeId"
  | "studentId"
  | "classId";

export const addClassStudentData: {
  name: ClassStudentFields;
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
    name: "educationLevelId",
    label: "مقطع تحصیلی",
    optionsMapper: useMapToOptions,
    loading: false,
  },
  {
    name: "educationGradeId",
    label: "پایه تحصیلی",
    optionsMapper: useMapToOptions,
    loading: false,
  },
  {
    name: "classId",
    label: "کلاس",
    optionsMapper: useMapToOptions,
    loading: false,
  },
  {
    name: "studentId",
    label: "کدملی دانش‌آموز",
    optionsMapper: useMapToOptions,
    loading: false,
  },
];
