import useMapToOptions, {
  type OptionType,
} from "@schoolify/core/hooks/common/useMapToOptions";

type CostDataFields = "costTypeId";

export const addCostData: {
  name: CostDataFields;
  label: string;
  optionsMapper: (data: any[]) => OptionType[];
  loading: boolean;
}[] = [
  // {
  //   name: "educationYearId",
  //   label: "سال تحصیلی",
  //   optionsMapper: useMapToOptions,
  //   loading: false,
  // },
  {
    name: "costTypeId",
    label: "عنوان هزینه",
    optionsMapper: useMapToOptions,
    loading: false,
  },
];
