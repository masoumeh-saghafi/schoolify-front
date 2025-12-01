import useMapToOptions, {
  type OptionType,
} from "@schoolify/core/hooks/common/useMapToOptions";

export type ClassStudentFields =
  | "educationYearId"
  | "educationLevelId"
  | "educationGradeId"
  | "studentId"
  | "classId";

export interface listClassStudentDataInterface {
  name: ClassStudentFields;
  label: string;
  optionsMapper: (data: any[]) => OptionType[];
  loading: boolean;
}

export const listClassStudentData: listClassStudentDataInterface[] = [
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
];
