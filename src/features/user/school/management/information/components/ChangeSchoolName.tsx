import type z from "zod";
import { titleValidationSchema } from "@schoolify/features/user/school/management/information/validation/titleValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useSchoolInfo from "@schoolify/features/user/school/management/information/hooks/useInfoSchool";
import useListSummarySchools from "@schoolify/features/user/shared/school/hooks/useListSummarySchools";
import ContentBox from "@schoolify/core/components/common/ContentBox";
import ControlledTextField from "@schoolify/core/components/common/ControlledTextField";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import SubmitButton from "@schoolify/core/components/common/SubmitButton";
import { updateSchoolName } from "@schoolify/features/user/school/management/information/utilities/api/api";
import AsyncStateHandler from "@schoolify/core/components/common/AsyncStateHandler";
import useUpdateSchoolName from "../hooks/useUpdateUserProfile";

type SchemaProps = z.infer<typeof titleValidationSchema>;

const ChangeSchoolName = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<SchemaProps>({
    resolver: zodResolver(titleValidationSchema),
    mode: "onChange",
  });

  const { schoolId = "" } = useParams();
  const { data, isLoading, error } = useSchoolInfo(schoolId);
  const { mutateAsync: updateSchoolName } = useUpdateSchoolName();

  const onSubmitChangeSchoolName = async (data: SchemaProps) => {
    await updateSchoolName({ data, schoolId });
  };

  return (
    <ContentBox
      label="ویرایش مدرسه"
      component="form"
      onSubmit={handleSubmit(onSubmitChangeSchoolName)}
    >
      <AsyncStateHandler isLoading={isLoading} error={error}>
        <Grid container sx={{ margin: 2 }} spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <ControlledTextField
              control={control}
              name="title"
              label="نام"
              defaultValue={data?.data?.title}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <SubmitButton isValid={isValid} isDirty={isDirty}>
              ویرایش اطلاعات
            </SubmitButton>
          </Grid>
        </Grid>
      </AsyncStateHandler>
    </ContentBox>
  );
};

export default ChangeSchoolName;
