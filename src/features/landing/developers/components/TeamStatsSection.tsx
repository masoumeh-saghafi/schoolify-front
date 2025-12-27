// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import Paper from "@schoolify/core/components/base/inputs/Paper";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// Data
import { teamStats } from "@schoolify/features/landing/developers/utilities/developersData";

const TeamStatsSection = () => {
  // Hooks
  const theme = useAppTheme();

  return (
    <Box
      component="section"
      aria-label="آمار تیم توسعه"
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 3, md: 8 },
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          maxWidth: 1000,
          mx: "auto",
        }}
      >
        {teamStats.map((stat, index) => (
          <Grid key={index} size={{ xs: 6, sm: 3 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2, md: 3 },
                textAlign: "center",
                backgroundColor: "transparent",
              }}
            >
              <Typography
                component="span"
                sx={{
                  display: "block",
                  fontWeight: "bold",
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  color: theme.palette.brand.main,
                  mb: 1,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                component="span"
                sx={{
                  color: theme.palette.info.dark,
                  fontSize: { xs: "0.85rem", md: "1rem" },
                }}
              >
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamStatsSection;
