// ==============================
// AuthLayout Component
// Layout container for authentication-related pages.
// Handles responsive background images, logo display, and overall page structure.
// ==============================

// Custom Hooks
import useMediaQuery from "@mui/material/useMediaQuery";
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// MUI Components
import Grid2 from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Core Components
import Logo from "@schoolify/core/shared/Logo";

//Public
import loginBgLarge from "@public/images/loginBgLarge.png";
import loginBgSmall from "@public/images/loginBgSmall.png";

// Custom Types
interface AuthLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const AuthLayout = (props: AuthLayoutProps) => {
  // Props
  const { title, children } = props;

  // Hooks
  const theme = useAppTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Render
  return (
    <Grid2
      container
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.background.paper,
        Directions: "ltr",
      }}
    >
      {/* Desktop Background & Logo */}

      {!isMobile && (
        <Grid2
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
        </Grid2>
      )}

      <Grid2 size={{ xs: 12, md: 6 }}>
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
            {title}
          </Typography>

          {/* Children (Form Fields / Buttons) */}
          {children}
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default AuthLayout;
