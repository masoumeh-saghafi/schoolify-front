// MUI Components

// Core Components

// Feature Components

// Custom Hooks

// React Type
import { useParams } from "react-router-dom";
import { useForm, useWatch, type Resolver } from "react-hook-form";

//Type Definitions
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";

import Box from "@schoolify/core/components/base/inputs/Box";
import ContentBox from "@schoolify/core/components/common/ContentBox";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import SubmitButton from "@schoolify/core/components/common/SubmitButton";

import useListSummaryEducationYear from "@schoolify/features/user/shared/school/hooks/useListSummaryEducationYears";

import useListStudents from "@schoolify/features/user/shared/school/hooks/useListStudents";

import ControlledAutocomplete from "@schoolify/core/components/common/ControlledAutocomplete";
import { useCallback, useState } from "react";
import { validationSchema } from "../validation/studentPaymentValid";
import useAddStudentPayment from "../hooks/useAddStudentPayment";
import useMapToOptions, {
  type OptionType,
} from "@schoolify/core/hooks/common/useMapToOptions";
import ControlledJalaliDatePicker from "@schoolify/core/components/common/ControlledJalaliDatePicker";
import ControlledTextField from "@schoolify/core/components/common/ControlledTextField";

type SchemaProps = z.infer<typeof validationSchema>;

interface AddStudentPaymentProps {}

const AddStudentPayment = (props: AddStudentPaymentProps) => {
  // const {} = props;
  const { schoolId = "" } = useParams();

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
      identityCode: `%${studentSearchText}%`,
    },
    disabled: !selectedEducationYearId,
  });

  const educationYearOptions: OptionType[] = useMapToOptions(educationYearData);
  const studentsDataAny: any[] = studentsData?.docs ?? [];
  const studentOptions: OptionType[] = useMapToOptions(studentsDataAny);

  //
  //
  const { mutateAsync: addStudentPayment } = useAddStudentPayment();

  // const apiData: Record<string, OptionType[]> = {
  //   educationYearData: educationYearOptions,
  // };

  // const dataMap: Record<string, any[]> = {
  //   educationYearId: educationYearData ?? [],
  //   studentId: studentsData?.docs ?? [],
  // };

  // Handlers
  const handleAddStudentPayment = async (data: SchemaProps) => {
    const result = await addStudentPayment({
      studentId: data.studentId,
      // studentPayment:data.,
      data,
    });
    // if (result.isSuccess)
    // reset(
    //   { title: "" },
    //   {
    //     keepValues: true,
    //     keepDirty: false,
    //     keepErrors: true,
    //   }
    // );
  };
  const handleStudentInput = useCallback((val: string) => {
    setStudentSearchText(val);
  }, []);

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
          <ControlledTextField
            control={control}
            name="description"
            label="توضیحات"
          />
          <ControlledTextField
            control={control}
            name="amount"
            label="مبلغ پرداختی"
            // type='number'
          />
          <ControlledTextField
            control={control}
            name="paymentNumber"
            label="شماره پرداخت"
            // type='number'
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
            inputValue={studentSearchText}
            onInputChange={handleStudentInput}
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
