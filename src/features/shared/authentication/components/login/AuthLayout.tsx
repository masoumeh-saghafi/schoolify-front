// React Type
import { Link } from "react-router-dom";

// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import IconButton from "@schoolify/core/components/base/inputs/IconButton";

// Core Components
import Logo from "@schoolify/core/shared/Logo";
import routes from "@schoolify/core/utilities/routes";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// Icon Components
import { ArrowRightIcon } from "@schoolify/core/components/icon/ArrowRightIcon";



interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const theme = useAppTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 0, sm: 2 },
      }}
    >
      {/* Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: 480 },
          height: { xs: "100vh", sm: "auto" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Card / Fullscreen on Mobile */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "100%", sm: "auto" },
            backgroundColor: theme.palette.background.paper,
            borderRadius: { xs: 0, sm: 3 },
            boxShadow: {
              xs: "none",
              sm: "0 4px 20px rgba(0, 0, 0, 0.08)",
            },
            p: { xs: 3, sm: 4 },
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Back Button */}
          <IconButton
            component={Link}
            to={routes.index}
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              color: theme.palette.text.secondary,
            }}
          >
            <ArrowRightIcon fontSize="small" />
          </IconButton>

          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 3,
              mt: { xs: 4, sm: 0 },
            }}
          >
            <Logo variant="h5" sx={{ color: theme.palette.text.title }} />
          </Box>

          {/* Title */}
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              color: theme.palette.primary.dark,
              mb: 1,
              textAlign: "start",
            }}
          >
            ورود یا ثبت نام در اسکولیفای
          </Typography>

          {/* Content */}
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AuthLayout;
