export default interface ListSummaryCostTypesEntity {
  title: string;
  baseAmount: number;
  referenceType:
    | "educationYear"
    | "educationLevel"
    | "educationGrade"
    | "class"
    | "student";
}
