// React Types
import { Link } from "react-router-dom";

// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import Button from "@schoolify/core/components/base/inputs/Button";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// Core Utilities
import routes from "@schoolify/core/utilities/routes";

// Icons
import { ArrowLeftWithLineIcon } from "@schoolify/core/components/icon/ArrowLeftWithLineIcon";

const CTASection = () => {
  // Hooks
  const theme = useAppTheme();

  // Render
  return (
    <Box
      sx={{
        py: { xs: 16, md: 22 },
        px: { xs: 3, md: 8 },
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.primary.main} 0%, rgba(52,171,69,0.8) 100%)`,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top, rgba(255,255,255,0.18), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          color: theme.palette.text.white,
          mb: 2,
          letterSpacing: "-0.5px",
          fontSize: { xs: "1.8rem", md: "2.4rem" },
        }}
      >
        آماده‌اید امور مالی مدرسه را ساده کنید؟
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "rgba(255,255,255,0.9)",
          mb: 5,
          maxWidth: 700,
          mx: "auto",
          lineHeight: 2,
          fontSize: { xs: "0.95rem", md: "1.05rem" },
        }}
      >
        همین حالا ثبت‌نام کنید و امور مالی مدرسه‌تان را با اسکولیفای در یک سیستم
        هوشمند و شفاف مدیریت کنید!
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: { xs: 2, md: 2.5 },
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Button
          component={Link}
          to={routes.login}
          variant="contained"
          sx={{
            backgroundColor: theme.palette.text.white,
            color: theme.palette.primary.main,
            px: { xs: 3, md: 5 },
            py: { xs: 1.3, md: 1.7 },
            minWidth: { xs: 160, md: 200 }, // طول حداقل برابر
            fontWeight: "bold",
            fontSize: { xs: "0.9rem", md: "1rem" },
            boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
            transition: "0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 5px 35px rgba(255, 255, 255, 0.1)",
              "& .svg-arrow-signup": {
                transform: "translateX(5px)",
              },
            },
            "& .svg-arrow-signup": {
              transition: "0.2s",
              ml: 1,
            },
          }}
        >
          ثبت‌ نام سریع
          <ArrowLeftWithLineIcon
            className="svg-arrow-signup"
            width={20}
            height={20}
          />
        </Button>

        <Button
          component={Link}
          to={routes.contactUs}
          variant="outlined"
          sx={{
            color: theme.palette.text.white,
            borderColor: theme.palette.text.white,
            borderWidth: 2,
            px: { xs: 3, md: 4 },
            py: { xs: 1.3, md: 1.7 },
            minWidth: { xs: 160, md: 200 }, // طول حداقل برابر با دکمه اصلی
            fontWeight: 500,
            fontSize: { xs: "0.8rem", md: "1rem" },
            opacity: 0.9,
            transition: "0.2s",
            "&:hover": {
              backgroundColor: theme.palette.text.white,
              color: theme.palette.primary.main,
              borderColor: theme.palette.text.white,
              opacity: 1,
              textDecoration: "none",
            },
          }}
        >
          مشاوره و تماس با ما
        </Button>
      </Box>
    </Box>
  );
};

export default CTASection;
