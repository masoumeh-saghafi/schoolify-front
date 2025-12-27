// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import Paper from "@schoolify/core/components/base/inputs/Paper";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

const BeforeAfterSection = () => {
  // Hooks
  const theme = useAppTheme();

  // Render
  return (
    <Box
      sx={{
        py: { xs: 15, md: 20 },
        px: { xs: 3, md: 8 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: theme.palette.text.title,
          mb: 2,
          fontSize: { xs: "1.8rem", md: "2.4rem" },
        }}
      >
        تحول در مدیریت مالی مدرسه
      </Typography>

      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          color: theme.palette.info.dark,
          mb: 8,
          maxWidth: 800,
          mx: "auto",
          lineHeight: 2,
        }}
      >
        اسکولیفای فقط یک نرم‌افزار نیست؛ تغییری اساسی در شیوه مدیریت مالی مدرسه
        شما ایجاد می‌کند.
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {/* Before */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              height: "100%",
              maxWidth: 520,
              mx: "auto",
              borderRadius: 4,
              backgroundColor: theme.palette.background.paper,
              border: "1px solid rgba(255,0,0,0.08)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "error.main",
                mb: 3,
              }}
            >
              ❌ قبل از اسکولیفای
            </Typography>

            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              {[
                "ثبت دستی پرداخت‌ها و احتمال بالای خطای انسانی",
                "پیگیری بدهی‌ها با دفتر، تماس تلفنی یا پیام‌های پراکنده",
                "گزارش‌گیری زمان‌بر و بدون دید تحلیلی",
                "عدم شفافیت مالی برای مدیریت مدرسه",
                "وابستگی شدید سیستم مالی به یک فرد خاص",
              ].map((item, index) => (
                <Typography
                  key={index}
                  component="li"
                  variant="body2"
                  sx={{
                    mb: 1.5,
                    color: theme.palette.text.primary,
                    lineHeight: 1.9,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* After */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              height: "100%",
              maxWidth: 520,
              mx: "auto",
              borderRadius: 4,
              backgroundColor: theme.palette.background.paper,
              border: "1px solid rgba(0,128,0,0.08)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "success.main",
                mb: 3,
              }}
            >
              ✅ بعد از اسکولیفای
            </Typography>

            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              {[
                "ثبت دقیق تمام پرداخت‌ها بدون خطا",
                "دسترسی سریع به وضعیت مالی هر دانش‌آموز",
                "گزارش‌های لحظه‌ای و قابل تحلیل برای تصمیم‌گیری",
                "شفافیت کامل مالی برای مدیران و حسابداران",
                "سیستمی پایدار، مستقل از افراد و قابل توسعه",
              ].map((item, index) => (
                <Typography
                  key={index}
                  component="li"
                  variant="body2"
                  sx={{
                    mb: 1.5,
                    color: theme.palette.text.primary,
                    lineHeight: 1.9,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BeforeAfterSection;
