import { useForm } from "react-hook-form";
import { fullNameSchema } from "../validations/fullNameValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import useUpdateUserProfile from "../hooks/useUpdateUserProfile";
import { useEffect, useState } from "react";
import useUserProfile from "../../personalInfo/hooks/useUserProfile";
import type z from "zod";
import ContentBox from "@schoolify/core/components/common/ContentBox";

import Grid from "@schoolify/core/components/base/inputs/Grid";
import ControlledGridTextField from "@schoolify/core/components/common/ControlledGridTextField";
import { ChangeFullNameData } from "../utilities/ChangeFullNameData";
import Button from "@schoolify/core/components/base/inputs/Button";
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

export type FullNameSchemaProps = z.infer<typeof fullNameSchema>;

const ChangeFullName = () => {
  const { data: userData } = useUserProfile();
  const { mutateAsync: updateUserProfile } = useUpdateUserProfile();
  const theme = useAppTheme();
  const filed = ChangeFullNameData;

  const [initialValues, setInitialValues] = useState<FullNameSchemaProps>({
    FirstName: "",
    LastName: "",
  });

  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isValid },
  } = useForm<FullNameSchemaProps>({
    resolver: zodResolver(fullNameSchema),
    mode: "onChange",
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (userData) {
      const initial = {
        FirstName: userData.data?.firstName ?? "",
        LastName: userData.data?.lastName ?? "",
      };
      setInitialValues(initial);
      setValue("FirstName", initial.FirstName);
      setValue("LastName", initial.LastName);
    }
  }, [userData, setValue]);

  const watchFirstName = watch("FirstName");
  const watchLastName = watch("LastName");

  const hasChanged =
    watchFirstName !== initialValues.FirstName ||
    watchLastName !== initialValues.LastName;

  const onSubmitChangeFullName = async (data: FullNameSchemaProps) => {
    try {
      await updateUserProfile(data);
    } catch (error) {
      alert("مشکلی در دریافت اطلاعات وجود دارد");
    }
  };
  return (
    <ContentBox
      label="تغییر مشخصات کاربر "
      component="form"
      onSubmit={handleSubmit(onSubmitChangeFullName)}
    >
      <Grid container sx={{ margin: 2 }} spacing={2}>
        {filed.map((item: any) => (
          <ControlledGridTextField
            key={item.name}
            control={control}
            name={item.name as keyof FullNameSchemaProps}
            label={item.label}
          />
        ))}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Button
            type="submit"
            fullWidth
            size="small"
            variant="contained"
            disabled={!isValid || !hasChanged}
            sx={{
              direction: "rtl",
              gap: 1,
              backgroundColor:
                isValid && hasChanged
                  ? {
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.text.white,
                    }
                  : {
                      backgroundColor: theme.palette.secondary.main,
                      color: theme.palette.text.white,
                    },
            }}
          >
            ویرایش اطلاعات
          </Button>
        </Grid>
      </Grid>
    </ContentBox>
  );
};

export default ChangeFullName;
