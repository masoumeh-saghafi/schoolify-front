// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Typography from "@schoolify/core/components/base/inputs/Typography";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// Icons
import { FileTextIcon } from "@schoolify/core/components/icon/FileTextIcon";
import { ShieldIcon } from "@schoolify/core/components/icon/ShieldIcon";

const HeroSection = () => {
  // Hooks
  const theme = useAppTheme();

  return (
    <Box
      component="section"
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.brand.main} 0%, ${theme.palette.primary.main} 100%)`,
        color: theme.palette.text.white,
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: "25%",
          left: "5%",
          opacity: 0.1,
        }}
        aria-hidden="true"
      >
        <FileTextIcon width={100} height={100} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          opacity: 0.1,
        }}
        aria-hidden="true"
      >
        <ShieldIcon width={80} height={80} />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          mb: 2,
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FileTextIcon
            width={30}
            height={30}
            color={theme.palette.text.white}
          />
        </Box>
      </Box>

      <Typography
        component="h1"
        variant="h1"
        sx={{
          fontWeight: "bold",
          mb: 2,
          fontSize: { xs: "1.8rem", md: "2.5rem" },
          color: theme.palette.text.white,
        }}
      >
        قوانین و مقررات
      </Typography>

      <Typography
        component="p"
        sx={{
          maxWidth: 700,
          mx: "auto",
          lineHeight: 1.8,
          opacity: 0.95,
          fontSize: { xs: "0.95rem", md: "1.1rem" },
          color: theme.palette.text.white,
        }}
      >
        لطفاً قبل از استفاده از سامانه اسکولیفای، قوانین و مقررات زیر را با دقت
        مطالعه فرمایید
      </Typography>
    </Box>
  );
};

export default HeroSection;
