import type z from "zod";
import { validationSchema } from "../validation/studentInfovalidation";
import { useParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addStudent } from "../utilities/api/api";
import Box from "@schoolify/core/components/base/inputs/Box";
import ContentBox from "@schoolify/core/components/common/ContentBox";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import { addStudentData } from "../utilities/addStudentData";
import ControlledGridTextField from "@schoolify/core/components/common/ControlledGridTextField";
import ControlledAutocomplete from "@schoolify/core/components/common/ControlledAutocomplete";
import SubmitButton from "@schoolify/core/components/common/SubmitButton";
import { identityTypeOptions } from "../validation/identityType";
import useAddStudent from "../hooks/useAddStudent";

type SchemaProps = z.infer<typeof validationSchema>;

interface AddStudentProps {}

const AddStudent = (props: AddStudentProps) => {
  const {} = props;
  const { schoolId = "" } = useParams();

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isDirty },
  } = useForm<SchemaProps>({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
  });

  const { mutateAsync: addStudent } = useAddStudent();

  const onSubmitAddStudent = async (data: SchemaProps) => {
    const result = await addStudent({ data: data, schoolId: schoolId });
    if (result.isSuccess) reset();
  };

  return (
    <Box>
      <ContentBox
        label="افزودن دانش آموز"
        onSubmit={handleSubmit(onSubmitAddStudent)}
        component="form"
      >
        <Grid container spacing={2}>
          {addStudentData.map((field) => (
            <ControlledGridTextField
              key={field.name}
              control={control}
              name={field.name}
              label={field.label}
            />
          ))}

          <ControlledAutocomplete
            control={control}
            name="identityType"
            label="ملیت"
            placeholder="لطفا یک مورد را انتخاب نمایید"
            options={identityTypeOptions}
            size="small"
          />

          {/* Hidden input for schoolId */}
          <Controller
            name="schoolId"
            control={control}
            defaultValue={schoolId}
            render={({ field }) => <input type="hidden" {...field} />}
          />

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

export default AddStudent;
