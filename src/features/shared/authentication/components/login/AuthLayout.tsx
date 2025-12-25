// ==============================
// AuthLayout Component
// Layout container for authentication-related pages.
// Handles responsive background images, logo display, and overall page structure.
// ==============================

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// MUI Components
import Grid from "@schoolify/core/components/base/inputs/Grid";
import Box from "@schoolify/core/components/base/inputs/Box";
import Typography from "@schoolify/core/components/base/inputs/Typography";

// Core Components
import Logo from "@schoolify/core/shared/Logo";

//Public
import loginBgLarge from "/images/loginBgLarge.png?url";
import loginBgSmall from "/images/loginBgSmall.png?url";
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
        minHeight: "100vh",
        backgroundColor: theme.palette.background.paper,
        direction: "rtl",
      }}
    >
      {/* Desktop Background & Logo */}
      {!isMobile && (
        <Grid
          size={{ md: 6 }}
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.brand.main} 0%, ${theme.palette.primary.main} 100%)`,
            backgroundImage: `url(${loginBgLarge})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(135deg, ${theme.palette.brand.main}90 0%, ${theme.palette.primary.main}80 100%)`,
            },
          }}
        >
          <Box sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <Logo
              variant="h3"
              sx={{ color: theme.palette.text.white, mb: 2 }}
            />
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.primary.light,
                fontWeight: "normal",
                maxWidth: 300,
              }}
            >
              مدیریت مالی مدرسه، ساده و مطمئن
            </Typography>
          </Box>
        </Grid>
      )}

      <Grid size={{ xs: 12, md: 6 }}>
        {/* Mobile Top Logo & Background */}
        {isMobile && (
          <Box
            sx={{
              backgroundImage: `url(${loginBgSmall})`,
              backgroundSize: "cover",
              height: 120,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${theme.palette.brand.main}90 0%, ${theme.palette.primary.main}80 100%)`,
              },
            }}
          >
            <Logo
              variant="h5"
              sx={{ color: theme.palette.text.white, position: "relative", zIndex: 1 }}
            />
          </Box>
        )}

        {/* Form Content Wrapper */}
        <Box
          sx={{
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: isMobile ? "auto" : "100%",
          }}
        >
          {/* Page Title */}
          <Box
            sx={{
              mb: 4,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: theme.palette.text.title,
                mb: 1,
              }}
            >
              ورود | ثبت نام
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.primary,
              }}
            >
              به اسکولیفای خوش آمدید
            </Typography>
          </Box>

          {/* Children (Form Fields / Buttons) */}
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
