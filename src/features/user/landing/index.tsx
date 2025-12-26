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
import { ArrowLeftWithLineIcon } from "@schoolify/core/components/icon/ArrowLeftWithLineIcon";

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
    <Box>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 15, md: 20 },
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
          variant="h1"
          sx={{
            color: theme.palette.brand.main,
            fontWeight: "bold",
            mb: 1,
            fontSize: { xs: "2.3rem", md: "4rem" },
          }}
        >
          مدیریت مالی مدرسه
        </Typography>
        <Typography
          variant="h1"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: "bold",
            mb: 3,
            fontSize: { xs: "1.9rem", md: "3rem" },
          }}
        >
          ساده و مطمئن
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.info.dark,
            fontWeight: "normal",
            maxWidth: 800,
            mx: "auto",
            mb: 6,
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
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.white,
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: theme.palette.brand.main,
              color: theme.palette.text.white,
            },
          }}
        >
          همین حالا شروع کنید
        </Button>
        <Typography
          variant="body2"
          sx={{ mt: 4, opacity: 0.8, fontSize: "0.85rem" }}
        >
          فرایند مدیریت مالی مدرسه را با دقت و کارآمدی بی‌نظیر تجربه کنید.
        </Typography>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          py: { xs: 15, md: 20 },
          px: { xs: 3, md: 8 },
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: theme.palette.text.title,
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.4rem" },
          }}
        >
          امکانات اسکولیفای
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: theme.palette.info.dark,
            mb: 6,
            // fontSize: { xs: "1.9rem", md: "3rem" },
          }}
        >
          ابزارهای قدرتمند برای مدیریت مالی مدرسه شما
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{
            maxWidth: 1200, // سقف عرض کل کارت‌ها
            mx: "auto", // وسط‌چین
          }}
        >
          {features.map((feature, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  maxWidth: 520,
                  mx: "auto",
                  height: "100%", // ⬅ همه کارت‌ها هم‌قد
                  backgroundColor: "#e0ffe0",
                  borderRadius: 3,
                  textAlign: "center",
                  display: "flex",
                  // flexDirection: "column", // ⬅ ستون‌بندی
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 0px 2px rgba(0,0,0,0.1)",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    "& .card-info-icon": {
                      bgcolor: "primary.main",
                      transform: "scale(1.05)",
                      "& svg": { color: "#fff" },
                    },
                  },
                }}
              >
                <Box
                  className="card-info-icon"
                  sx={{
                    px: 1.7,
                    py: 3.7,
                    borderRadius: 3,
                    bgcolor: "rgba(54, 176, 82,0.1)",
                    transition: "all .3s",
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "& svg": {
                      width: 36,
                      height: 36,
                      color: "primary.main",
                      transition: ".3s",
                    },
                  }}
                >
                  <feature.icon color={theme.palette.brand.light} />
                </Box>
                <Box
                  sx={{
                    mx: 3,
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1, // ⬅ پرکننده ارتفاع
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "start",
                      fontWeight: "bold",
                      color: theme.palette.brand.main,
                      mb: 1,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "start",
                      color: theme.palette.info.dark,
                      lineHeight: 1.8,
                      display: "-webkit-box",
                      WebkitLineClamp: 4, // ⬅ همه کارت‌ها ۴ خط
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Before / After Section */}
      <Box
        sx={{
          py: { xs: 15, md: 20 },
          px: { xs: 3, md: 8 },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: theme.palette.text.title,
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.4rem" },
          }}
        >
          تحول در مدیریت مالی مدرسه
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: theme.palette.info.dark,
            mb: 8,
            maxWidth: 800,
            mx: "auto",
            lineHeight: 2,
          }}
        >
          اسکولیفای فقط یک نرم‌افزار نیست؛ تغییری اساسی در شیوه مدیریت مالی
          مدرسه شما ایجاد می‌کند.
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{
            maxWidth: 1200,
            mx: "auto",
          }}
        >
          {/* Before */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: "100%",
                maxWidth: 520,
                mx: "auto",
                borderRadius: 4,
                backgroundColor: theme.palette.background.paper,
                border: "1px solid rgba(255,0,0,0.08)",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "error.main",
                  mb: 3,
                }}
              >
                ❌ قبل از اسکولیفای
              </Typography>

              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                {[
                  "ثبت دستی پرداخت‌ها و احتمال بالای خطای انسانی",
                  "پیگیری بدهی‌ها با دفتر، تماس تلفنی یا پیام‌های پراکنده",
                  "گزارش‌گیری زمان‌بر و بدون دید تحلیلی",
                  "عدم شفافیت مالی برای مدیریت مدرسه",
                  "وابستگی شدید سیستم مالی به یک فرد خاص",
                ].map((item, index) => (
                  <Typography
                    key={index}
                    component="li"
                    variant="body2"
                    sx={{
                      mb: 1.5,
                      color: theme.palette.text.primary,
                      lineHeight: 1.9,
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Paper>
          </Grid>

          {/* After */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: "100%",
                maxWidth: 520,
                mx: "auto",
                borderRadius: 4,
                backgroundColor: theme.palette.background.paper,
                border: "1px solid rgba(0,128,0,0.08)",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "success.main",
                  mb: 3,
                }}
              >
                ✅ بعد از اسکولیفای
              </Typography>

              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                {[
                  "ثبت دقیق تمام پرداخت‌ها بدون خطا",
                  "دسترسی سریع به وضعیت مالی هر دانش‌آموز",
                  "گزارش‌های لحظه‌ای و قابل تحلیل برای تصمیم‌گیری",
                  "شفافیت کامل مالی برای مدیران و حسابداران",
                  "سیستمی پایدار، مستقل از افراد و قابل توسعه",
                ].map((item, index) => (
                  <Typography
                    key={index}
                    component="li"
                    variant="body2"
                    sx={{
                      mb: 1.5,
                      color: theme.palette.text.primary,
                      lineHeight: 1.9,
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* CTA Section – Energetic */}
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
          همین حالا ثبت‌نام کنید و امور مالی مدرسه‌تان را با اسکولیفای در یک
          سیستم هوشمند و شفاف مدیریت کنید!
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
            to={routes.aboutUs}
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

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Landing;
