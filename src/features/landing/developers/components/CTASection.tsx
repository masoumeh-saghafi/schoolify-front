// React Router
import { Link } from "react-router-dom";

// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import Button from "@schoolify/core/components/base/inputs/Button";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// Icons
import { MessageCircleIcon } from "@schoolify/core/components/icon/MessageCircleIcon";
import { ArrowLeftWithLineIcon } from "@schoolify/core/components/icon/ArrowLeftWithLineIcon";

const CTASection = () => {
  // Hooks
  const theme = useAppTheme();

  return (
    <Box
      component="section"
      aria-label="تماس با تیم توسعه"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
        background: `linear-gradient(135deg, ${theme.palette.brand.main} 0%, ${theme.palette.primary.main} 100%)`,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: 700,
          mx: "auto",
        }}
      >
        <Box
          sx={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 3,
          }}
          aria-hidden="true"
        >
          <MessageCircleIcon width={38} height={38} color={theme.palette.text.white} />
        </Box>

        <Typography
          component="h2"
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: theme.palette.text.white,
            mb: 2,
            fontSize: { xs: "1.6rem", md: "2.2rem" },
          }}
        >
          سوالی دارید؟ با ما در تماس باشید
        </Typography>

        <Typography
          component="p"
          sx={{
            color: theme.palette.text.white,
            opacity: 0.9,
            mb: 4,
            fontSize: { xs: "0.9rem", md: "1.1rem" },
            lineHeight: 1.8,
          }}
        >
          تیم ما آماده پاسخگویی به سوالات فنی و همکاری‌های جدید است. از طریق
          صفحه تماس با ما در ارتباط باشید.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            component={Link}
            to="/about-us#contact"
            variant="contained"
            size="large"
            endIcon={<ArrowLeftWithLineIcon width={20} height={20} />}
            sx={{
              backgroundColor: theme.palette.text.white,
              color: theme.palette.brand.main,
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.9)",
              },
            }}
          >
            تماس با ما
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CTASection;
