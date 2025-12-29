// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import Paper from "@schoolify/core/components/base/inputs/Paper";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// Icons Components
import { techStack } from "@schoolify/features/landing/developers/utilities/developersData";
import { CpuIcon } from "@schoolify/core/components/icon/CpuIcon";

const TechStackSection = () => {
  // Hooks
  const theme = useAppTheme();

  return (
    <Box
      component="section"
      aria-label="تکنولوژی‌های مورد استفاده"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: theme.palette.text.title,
          mb: 2,
          fontSize: { xs: "1.8rem", md: "2.4rem" },
        }}
      >
        تکنولوژی‌های مورد استفاده
      </Typography>
      <Typography
        component="p"
        sx={{
          textAlign: "center",
          color: theme.palette.info.dark,
          mb: 6,
          fontSize: { xs: "0.9rem", md: "1.1rem" },
          maxWidth: 600,
          mx: "auto",
        }}
      >
        ابزارها و فناوری‌هایی که برای ساخت اسکولیفای به کار رفته‌اند
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          maxWidth: 800,
          mx: "auto",
        }}
      >
        {techStack.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  textAlign: "center",
                  backgroundColor: theme.palette.background.card,
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  border: `1px solid transparent`,
                  "&:hover": {
                    borderColor: theme.palette.brand.main,
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 45,
                    height: 45,
                    borderRadius: "12px",
                    backgroundColor: theme.palette.primary.light,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 1.5,
                  }}
                  aria-hidden="true"
                >
                  <IconComponent
                    width={30}
                    height={30}
                    color={theme.palette.brand.main}
                  />
                </Box>
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "medium",
                    color: theme.palette.text.cardTitle,
                    fontSize: { xs: "0.85rem", md: "0.95rem" },
                  }}
                >
                  {tech.title}
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default TechStackSection;
