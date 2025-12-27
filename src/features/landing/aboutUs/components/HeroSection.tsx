// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Typography from "@schoolify/core/components/base/inputs/Typography";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

const HeroSection = () => {
  // Hooks
  const theme = useAppTheme();

  return (
    <Box
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
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          mb: 3,
          fontSize: { xs: "1.8rem", md: "2.8rem" },
          color: theme.palette.text.white,
        }}
      >
        مدیریت مالی مدارس، آسان، هوشمند و آماده برای فردا
      </Typography>
      <Typography
        variant="h6"
        sx={{
          maxWidth: 900,
          mx: "auto",
          lineHeight: 2,
          opacity: 0.9,
          fontSize: { xs: "0.9rem", md: "1.1rem" },
          color: theme.palette.text.white,
          fontWeight: "normal",
        }}
      >
        ما در اسکولیفای بر این باوریم که مدیران و کادر اداری مدارس باید وقت خود
        را صرف آموزش و پرورش دانش‌آموزان کنند، نه دست و پنجه نرم کردن با جداول
        پیچیده و حسابداری دستی. هدف ما ارائه ابزاری است که با دقت، سرعت و سادگی،
        امور مالی را مدیریت کند و به مدارس اجازه دهد روی آنچه واقعاً اهمیت دارد
        تمرکز کنند.
      </Typography>
    </Box>
  );
};

export default HeroSection;
