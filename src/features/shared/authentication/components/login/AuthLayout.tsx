// ==============================
// AuthLayout Component
// Layout container for authentication-related pages.
// Handles responsive background images, logo display, and overall page structure.
// ==============================

// Custom Hooks
import useMediaQuery from "@mui/material/useMediaQuery";
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// MUI Components
import Grid from "@schoolify/core/components/base/inputs/Grid";
import Box from "@schoolify/core/components/base/inputs/Box";
import Typography from "@schoolify/core/components/base/inputs/Typography";

// Core Components
import Logo from "@schoolify/core/shared/Logo";

//Public
import loginBgLarge from "@public/images/loginBgLarge.png";
import loginBgSmall from "@public/images/loginBgSmall.png";
import useClientDeviceTypeIsMobile from "@schoolify/core/hooks/common/useClientDeviceTypeIsMobile";

// Custom Types
interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = (props: AuthLayoutProps) => {
  // Props
  const { children } = props;

  // Hooks
  const theme = useAppTheme();
  const isMobile = useClientDeviceTypeIsMobile();

  // Render
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.background.paper,
        directions: "rtl",
      }}
    >
      {/* Desktop Background & Logo */}

      {!isMobile && (
        <Grid
          size={{ md: 6 }}
          sx={{
            backgroundImage: `url(${loginBgLarge})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Logo variant="h4" sx={{ color: theme.palette.text.white }} />
        </Grid>
      )}

      <Grid size={{ xs: 12, md: 6 }}>
        {/* Mobile Top Logo & Background */}
        {isMobile && (
          <Box
            sx={{
              backgroundImage: `url(${loginBgSmall})`,
              backgroundSize: "cover",
              height: 75,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Logo variant="h5" sx={{ color: theme.palette.text.white }} />
          </Box>
        )}

        {/* Form Content Wrapper */}
        <Box
          sx={{
            px: 3,
            py: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: isMobile ? "auto" : "100%",
          }}
        >
          {/* Page Title */}
          <Typography
            variant="h6"
            sx={{ mb: 4, color: theme.palette.text.title }}
          >
            {"ورود | ثبت نام"}
          </Typography>

          {/* Children (Form Fields / Buttons) */}
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
