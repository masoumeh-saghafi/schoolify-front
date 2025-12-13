interface CostUpdateFormValues {
  description: string
  amount:number
}

export const updateCostData: {
  name: keyof CostUpdateFormValues;
  label: string;
}[] = [
  { name: "description", label: "توضیحات" },
  { name: "amount", label: " مبلغ" },
 
];
