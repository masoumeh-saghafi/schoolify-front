// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Button from "@schoolify/core/components/base/inputs/Button";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import ContentBox from "@schoolify/core/components/common/ContentBox";

// Core Components
import DetailField from "@schoolify/core/components/common/DetailField";
import AsyncStateHandler from "@schoolify/core/components/common/AsyncStateHandler";

// Icon Components
import { EditIcon } from "@schoolify/core/components/icon/EditIcon";

// Custom Utilities
import { PersonalInfoData } from "@schoolify/features/user/profile/accountManagement/personalInfo/utilities/personalInfoData";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import useUserProfile from "@schoolify/features/shared/profile/hooks/useUserProfile";

// Custom Types
// interface PersonalInfoProps {}

const PersonalInfo = () => {
  // Props
  // const {} = props;

  // Hooks
  const { data, isLoading, error } = useUserProfile();

  const theme = useAppTheme();

  // Helpers
  const user = data?.data;
  const userFields = PersonalInfoData(user);

  return (
    <Box>
      <ContentBox label="مشخصات کاربر">
        <AsyncStateHandler isLoading={isLoading} error={error}>
          <Grid container sx={{ margin: 2 }} spacing={2}>
            {userFields.map((field, index) => (
              <DetailField
                key={index}
                label={field.label}
                value={field.value}
              />
            ))}

            <Grid size={{ xs: 12, sm: 6 }}>
              <Button
                fullWidth
                size="small"
                variant="contained"
                onClick={() => {}}
                startIcon={<EditIcon />}
                sx={{
                  direction: "rtl",
                  gap: 1,
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.text.white,
                }}
              >
                ویرایش اطلاعات
              </Button>
            </Grid>
          </Grid>
        </AsyncStateHandler>
      </ContentBox>
    </Box>
  );
};

export default PersonalInfo;
