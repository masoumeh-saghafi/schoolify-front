// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Typography from "@schoolify/core/components/base/inputs/Typography";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// Icons
import { Users, Code2, Heart } from "lucide-react";

const HeroSection = () => {
  // Hooks
  const theme = useAppTheme();

  return (
    <Box
      component="section"
      itemScope
      itemType="https://schema.org/AboutPage"
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.brand.main} 0%, ${theme.palette.primary.main} 100%)`,
        color: theme.palette.text.white,
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 8 },
        textAlign: "center",
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          opacity: 0.1,
          transform: "rotate(-15deg)",
        }}
        aria-hidden="true"
      >
        <Code2 size={120} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          opacity: 0.1,
          transform: "rotate(15deg)",
        }}
        aria-hidden="true"
      >
        <Users size={100} />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          mb: 3,
        }}
      >
        <Heart size={32} color={theme.palette.text.white} />
        <Typography
          component="span"
          sx={{
            fontSize: { xs: "0.9rem", md: "1.1rem" },
            fontWeight: "medium",
            opacity: 0.9,
            color: theme.palette.text.white,
          }}
        >
          با افتخار ساخته شده توسط تیم ایرانی
        </Typography>
      </Box>

      <Typography
        component="h1"
        variant="h1"
        itemProp="name"
        sx={{
          fontWeight: "bold",
          mb: 3,
          fontSize: { xs: "2rem", md: "3rem" },
          color: theme.palette.text.white,
        }}
      >
        توسعه‌دهندگان اسکولیفای
      </Typography>

      <Typography
        component="p"
        variant="h6"
        itemProp="description"
        sx={{
          maxWidth: 900,
          mx: "auto",
          lineHeight: 2,
          opacity: 0.95,
          fontSize: { xs: "0.95rem", md: "1.15rem" },
          color: theme.palette.text.white,
          fontWeight: "normal",
        }}
      >
        ما با تلفیق تخصص‌های مکمل در حوزه برنامه‌نویسی بک‌اند و طراحی فرانت‌اند،
        با هدف ارائه یک سامانه جامع و کاربردی برای مدیریت مالی مراکز آموزشی، این
        پروژه را به ثمر رساندیم. موفقیت اسکولیفای، مرهون تلاش مشترک و تخصص حیاتی
        هر یک از اعضای تیم در حوزه کاری خودشان است.
      </Typography>
    </Box>
  );
};

export default HeroSection;
