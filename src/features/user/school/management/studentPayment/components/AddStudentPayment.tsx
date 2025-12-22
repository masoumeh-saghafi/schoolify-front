// React Type
import { useParams } from "react-router-dom";
import { useForm, useWatch, type Resolver } from "react-hook-form";
import { useCallback, useState } from "react";

//Type Definitions
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";

// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import ContentBox from "@schoolify/core/components/common/ContentBox";
import Grid from "@schoolify/core/components/base/inputs/Grid";

// Core Components
import SubmitButton from "@schoolify/core/components/common/SubmitButton";
import ControlledJalaliDatePicker from "@schoolify/core/components/common/ControlledJalaliDatePicker";
import ControlledPriceField from "@schoolify/core/components/common/ControlledPriceField";
import ControlledGridTextField from "@schoolify/core/components/common/ControlledGridTextField";
import ControlledAutocomplete from "@schoolify/core/components/common/ControlledAutocomplete";

// Custom Hooks
import useListStudents from "@schoolify/features/user/school/management/shared/hooks/useListStudents";
import useListSummaryEducationYear from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationYears";
import useAddStudentPayment from "../hooks/useAddStudentPayment";
import useMapToOptions, {
  type OptionType,
} from "@schoolify/core/hooks/common/useMapToOptions";

// Custom Utilities
import { validationSchema } from "@schoolify/features/user/school/management/studentPayment/validation/studentPaymentValid";

// Form schema
type SchemaProps = z.infer<typeof validationSchema>;

// React Type
interface AddStudentPaymentProps {}

const AddStudentPayment = (props: AddStudentPaymentProps) => {
  // const {} = props;

  // Hooks
  const {
    handleSubmit,
    control,
    reset,

    formState: { isValid, isDirty },
  } = useForm<SchemaProps>({
    resolver: zodResolver(validationSchema) as unknown as Resolver<SchemaProps>,
    mode: "onChange",
    defaultValues: {
      description: "",
      amount: 0,
      paymentNumber: "...",
      studentId: "",
      educationYearId: "",
    },
  });
  const { schoolId = "" } = useParams();
  const [studentSearchText, setStudentSearchText] = useState("");

  const selectedEducationYearId = useWatch({
    control,
    name: "educationYearId",
  });

  const { data: educationYearData } = useListSummaryEducationYear(schoolId);

  const { data: studentsData } = useListStudents({
    schoolId: schoolId,
    pagination: { size: -1 },
    filters: {
      educationYearId: selectedEducationYearId,
      // identityCode: `%${studentSearchText}%`
    },
    disabled: !selectedEducationYearId,
  });

  const educationYearOptions: OptionType[] = useMapToOptions(educationYearData);
  const studentsDataAny: any[] = studentsData?.docs ?? [];
  const studentOptions: OptionType[] = useMapToOptions(studentsDataAny);
  const { mutateAsync: addStudentPayment } = useAddStudentPayment();

  // Handlers
  const handleAddStudentPayment = async (data: SchemaProps) => {
    const result = await addStudentPayment({
      studentId: data.studentId,
      data,
    });
    if (result.isSuccess) reset(data);
  };
  // const handleStudentInput = useCallback((val: string) => {
  //   if (studentSearchText === val) return;
  //   setStudentSearchText(val);
  // }, []);

  // Render
  return (
    <Box>
      <ContentBox
        label="افزودن پرداختی دانش آموز"
        onSubmit={handleSubmit(handleAddStudentPayment)}
        component="form"
      >
        <Grid container spacing={2}>
          <ControlledAutocomplete
            control={control}
            name="educationYearId"
            label="سال تحصیلی"
            placeholder="لطفا یک سال را انتخاب نمایید"
            options={educationYearOptions}
          />
          <ControlledGridTextField
            control={control}
            name="description"
            label="توضیحات"
          />
          <ControlledPriceField
            control={control}
            name="amount"
            label="مبلغ پرداختی"
          />
          <ControlledGridTextField
            control={control}
            name="paymentNumber"
            label="شماره پرداخت"
          />
          <ControlledJalaliDatePicker
            control={control}
            name="paymentDate"
            label="تاریخ پرداخت"
            placeholder="تاریخ را انتخاب کنید"
          />
          <ControlledAutocomplete
            control={control}
            name="studentId"
            label="دانش‌آموز"
            placeholder="لطفا یک دانش‌آموز را انتخاب کنید"
            options={studentOptions}
            // inputValue={studentSearchText}
            // onInputChange={handleStudentInput}
          />
          <Grid />
          <Grid size={{ xs: 12, sm: 6 }}>
            <SubmitButton isValid={isValid} isDirty={isDirty}>
              ایجاد
            </SubmitButton>
          </Grid>
        </Grid>
      </ContentBox>
    </Box>
  );
};

export default AddStudentPayment;
