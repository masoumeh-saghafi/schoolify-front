import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import { genUUID } from "@schoolify/core/utilities/uuid";
import AddStudent from "../components/AddStudent";
import ListStudent from "../components/ListStudent";

export const tabSchoolStudentData: TabBoxDataProps[] = [
  {
    label: ' ایجاد دانش آموز',
    key: genUUID(),
    children: <AddStudent />
  },
  { label: ' لیست دانش آموزان ', key: genUUID(), children: <ListStudent/> },

]
