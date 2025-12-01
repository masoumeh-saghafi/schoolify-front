import useMapToOptions, {
  type OptionType,
} from "@schoolify/core/hooks/common/useMapToOptions";
import {
  listClassStudentData,
  type listClassStudentDataInterface,
} from "./listClassStudentData";

export const addClassStudentData: listClassStudentDataInterface[] = [
  ...listClassStudentData,
  {
    name: "studentId",
    label: "کدملی دانش‌آموز",
    optionsMapper: useMapToOptions,
    loading: false,
  },
];
