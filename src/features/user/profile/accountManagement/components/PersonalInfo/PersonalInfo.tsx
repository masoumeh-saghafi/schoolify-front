import Box from "@schoolify/core/components/base/inputs/Box";
import Button from "@schoolify/core/components/base/inputs/Button";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import TextField from "@schoolify/core/components/base/inputs/TextField";
import ContentBox from "@schoolify/core/components/common/ContentBox";
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import useUserProfile from "../../hooks/useUserProfile";

interface PersonalInfoProps {}

const PersonalInfo = (props: PersonalInfoProps) => {
  // Props
  const {} = props;

  // Hooks
  const { data, isLoading, error } = useUserProfile();
  console.log(data);

  const theme = useAppTheme();

  return (
    <Box>
      <ContentBox label="مشخصات کاربر">
        <Grid container sx={{ margin: 2 }} spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ mb: 2 }}>
            <TextField
              label="نام"
              type="text"
              size="small"
              value={data?.data?.firstName}
              fullWidth
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
                input: {
                  readOnly: true,
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }} sx={{ mb: 2 }}>
            <TextField
              label="نام خانوادگی"
              type="text"
              size="small"
              value={data?.data?.lastName}
              fullWidth
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
                input: {
                  readOnly: true,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ mb: 1 }}>
            <TextField
              label="شماره موبایل"
              type="text"
              size="small"
              value={data?.data?.phoneNumber}
              fullWidth
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
                input: {
                  readOnly: true,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Button
              fullWidth
              size="small"
              variant="contained"
              onClick={() => {}}
              // startIcon={<EditIcon />} // TODO - ADD THIS ICON
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
      </ContentBox>

      {/* <NotificationInfo /> */}
    </Box>
  );
};

export default PersonalInfo;
