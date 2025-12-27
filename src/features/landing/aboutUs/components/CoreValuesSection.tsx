// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import Paper from "@schoolify/core/components/base/inputs/Paper";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import { coreValuesSectionData } from "@schoolify/features/landing/aboutUs/utilities/coreValuesSectionData";

const CoreValuesSection = () => {
  // Hooks
  const theme = useAppTheme();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: theme.palette.text.title,
          mb: 2,
          fontSize: { xs: "1.8rem", md: "2.2rem" },
        }}
      >
        ارزش‌های کلیدی
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          color: theme.palette.info.dark,
          mb: 6,
          fontSize: { xs: "0.9rem", md: "1.1rem" },
        }}
      >
        اصولی که ما را در مسیر خود هدایت می‌کنند
      </Typography>

      <Grid
        container
        spacing={3}
        sx={{
          maxWidth: 1200, // سقف عرض کل کارت‌ها
          mx: "auto", // وسط‌چین
        }}
      >
        {coreValuesSectionData.map((value, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: "100%",
                backgroundColor: theme.palette.background.card,
                borderRadius: 3,
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Box
                sx={{
                  width: 55,
                  height: 55,
                  borderRadius: "50%",
                  backgroundColor: theme.palette.primary.main,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <value.icon size={28} color={theme.palette.text.white} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: theme.palette.text.cardTitle,
                  mb: 1,
                  fontSize: { xs: "1rem", md: "1.2rem" },
                }}
              >
                {value.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.info.dark,
                  lineHeight: 1.8,
                  fontSize: { xs: "0.85rem", md: "1rem" },
                }}
              >
                {value.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoreValuesSection;
