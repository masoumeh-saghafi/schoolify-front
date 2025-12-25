// React Types
import { Link } from "react-router-dom";

// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import Button from "@schoolify/core/components/base/inputs/Button";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import Paper from "@schoolify/core/components/base/inputs/Paper";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// Core Utilities
import routes from "@schoolify/core/utilities/routes";

// Feature Components
import Header from "@schoolify/features/shared/layout/header";
import Footer from "@schoolify/features/shared/layout/footer";

// Icons
import {
  CreditCard,
  BarChart3,
  Shield,
  Layout,
  Clock,
  Brain,
  Eye,
  Headphones,
} from "lucide-react";

// Data
const features = [
  {
    icon: CreditCard,
    title: "مدیریت پرداخت‌ها",
    description:
      "ثبت و پیگیری دقیق شهریه‌ها، خدمات و پرداخت‌های دانش‌آموزان با سیستم هوشمند یادآوری.",
  },
  {
    icon: BarChart3,
    title: "گزارش‌های حرفه‌ای",
    description:
      "تولید گزارش‌های مالی متنوع و قابل تنظیم برای تصمیم‌گیری سریع و دقیق مدیران.",
  },
  {
    icon: Shield,
    title: "امنیت اطلاعات",
    description:
      "نگهداری امن داده‌های مالی با رمزنگاری پیشرفته و دسترسی محدود به افراد مجاز.",
  },
  {
    icon: Layout,
    title: "رابط کاربری ساده",
    description:
      "طراحی شهودی و کاربرپسند که نیازی به آموزش تخصصی ندارد — فقط وارد شوید و شروع کنید.",
  },
];

const whyUs = [
  {
    icon: Clock,
    title: "صرفه‌جویی در زمان و منابع",
    description: "تمام فرایندهای مالی در یک محیط یکپارچه انجام می‌شوند.",
  },
  {
    icon: Brain,
    title: "تصمیم‌گیری هوشمندانه",
    description:
      "داده‌ها و گزارش‌ها شما را برای برنامه‌ریزی و پیش‌بینی دقیق یاری می‌کنند.",
  },
  {
    icon: Eye,
    title: "شفافیت کامل",
    description:
      "همه پرداخت‌ها و گزارش‌ها قابل مشاهده و پیگیری هستند، بدون اشتباه و سردرگمی.",
  },
  {
    icon: Headphones,
    title: "پشتیبانی حرفه‌ای",
    description:
      "تیم اسکولیفای همیشه آماده پاسخگویی به سوالات و حل مشکلات شماست.",
  },
];

const Landing = () => {
  // Hooks
  const theme = useAppTheme();

  // Render
  return (
    <Box sx={{ direction: "rtl" }}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.brand.main} 0%, ${theme.palette.primary.main} 100%)`,
          color: theme.palette.text.white,
          py: { xs: 8, md: 12 },
          px: { xs: 3, md: 8 },
          textAlign: "center",
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 3,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          مدیریت مالی مدرسه، ساده، سریع و مطمئن
        </Typography>
        <Typography
          variant="h6"
          sx={{
            maxWidth: 800,
            mx: "auto",
            mb: 4,
            lineHeight: 2,
            opacity: 0.9,
            fontSize: { xs: "0.9rem", md: "1.1rem" },
          }}
        >
          اسکولیفای، راهکاری نوین برای ساماندهی امور مالی مدارس: از ثبت شهریه تا
          گزارش‌گیری حرفه‌ای، همه چیز در یک محیط امن و کاربرپسند.
        </Typography>
        <Button
          component={Link}
          to={routes.login}
          variant="contained"
          size="large"
          sx={{
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.brand.main,
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: theme.palette.background.paper,
            },
          }}
        >
          همین حالا شروع کنید
        </Button>
        <Typography
          variant="body2"
          sx={{ mt: 3, opacity: 0.8, fontSize: "0.85rem" }}
        >
          فرایند مدیریت مالی مدرسه را با دقت و کارآمدی بی‌نظیر تجربه کنید.
        </Typography>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 8 },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: theme.palette.text.title,
            mb: 2,
          }}
        >
          امکانات اسکولیفای
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
            mb: 6,
          }}
        >
          ابزارهای قدرتمند برای مدیریت مالی مدرسه شما
        </Typography>

        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: 3,
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.primary.light,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  <feature.icon size={28} color={theme.palette.brand.main} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: theme.palette.text.cardTitle,
                    mb: 1,
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.primary, lineHeight: 1.8 }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Why Schoolify Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 8 },
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: theme.palette.text.title,
            mb: 2,
          }}
        >
          چرا اسکولیفای؟
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
            mb: 6,
            maxWidth: 700,
            mx: "auto",
          }}
        >
          با اسکولیفای، مدیریت مالی مدرسه نه تنها ساده و سریع می‌شود، بلکه:
        </Typography>

        <Grid container spacing={3}>
          {whyUs.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  p: 3,
                  backgroundColor: theme.palette.background.card,
                  borderRadius: 3,
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 2,
                    backgroundColor: theme.palette.primary.main,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <item.icon size={24} color={theme.palette.text.white} />
                </Box>
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      color: theme.palette.text.cardTitle,
                      mb: 0.5,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.primary, lineHeight: 1.8 }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          px: { xs: 3, md: 8 },
          backgroundColor: theme.palette.brand.main,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: theme.palette.text.white,
            mb: 2,
          }}
        >
          آماده‌اید امور مالی مدرسه را ساده کنید؟
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.grey[300],
            mb: 4,
          }}
        >
          همین حالا ثبت‌نام کنید و از تمام امکانات اسکولیفای استفاده کنید.
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
            to={routes.login}
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.text.white,
              px: 4,
              py: 1.5,
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.brand.main,
              },
            }}
          >
            ثبت‌نام رایگان
          </Button>
          <Button
            component={Link}
            to={routes.aboutUs}
            variant="outlined"
            sx={{
              borderColor: theme.palette.primary.light,
              color: theme.palette.primary.light,
              px: 4,
              py: 1.5,
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.brand.main,
              },
            }}
          >
            تماس با ما
          </Button>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Landing;
