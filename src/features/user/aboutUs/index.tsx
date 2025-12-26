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
  Target,
  Lightbulb,
  Shield,
  Zap,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

// Data
const coreValues = [
  {
    icon: Target,
    title: "دقت",
    description: "هر تراکنش با دقت ثبت و قابل پیگیری است.",
  },
  {
    icon: Lightbulb,
    title: "سادگی",
    description: "رابط کاربری شهودی که یادگیری آن دقایقی بیشتر طول نمی‌کشد.",
  },
  {
    icon: Shield,
    title: "امنیت",
    description: "داده‌های شما با بالاترین استانداردهای امنیتی محافظت می‌شوند.",
  },
  {
    icon: Zap,
    title: "بهره‌وری",
    description: "صرفه‌جویی در زمان و منابع برای تمرکز روی آموزش.",
  },
];

const contactInfo = [
  {
    icon: Phone,
    title: "شماره تماس",
    items: ["0919-158-7842", "0992-861-9396"],
  },
  // {
  //   icon: Mail,
  //   title: "ایمیل",
  //   items: ["support@schoolify.ir", "info@schoolify.ir"],
  // },
  {
    icon: Clock,
    title: "ساعات کاری",
    items: ["شنبه تا چهارشنبه: ۸ تا ۱۷", "پنج‌شنبه: ۸ تا ۱۳"],
  },
];

const AboutUs = () => {
  // Hooks
  const theme = useAppTheme();

  return (
    <Box>
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
          ما در اسکولیفای بر این باوریم که مدیران و کادر اداری مدارس باید وقت
          خود را صرف آموزش و پرورش دانش‌آموزان کنند، نه دست و پنجه نرم کردن با
          جداول پیچیده و حسابداری دستی. هدف ما ارائه ابزاری است که با دقت، سرعت
          و سادگی، امور مالی را مدیریت کند و به مدارس اجازه دهد روی آنچه واقعاً
          اهمیت دارد تمرکز کنند.
        </Typography>
      </Box>

      {/* Story Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 8 },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Grid
          container
          spacing={6}
          alignItems="stretch"
          sx={{
            maxWidth: 1400, // سقف عرض کل کارت‌ها
            mx: "auto", // وسط‌چین
          }}
        >
          <Grid
            size={{ xs: 0, md: 6 }}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <Box
              sx={{
                // backgroundColor: theme.palette.primary.light,
                // borderRadius: 4,
                // p: 4,
                // textAlign: 'center',
                backgroundColor: theme.palette.primary.light,
                borderRadius: 4,
                p: 4,
                textAlign: "center",
                height: "100%", // کل ارتفاع Grid را پر کند
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // محتوا را عمودی وسط‌چین کند
                alignItems: "center",
                minHeight: "100%", // حداقل ارتفاع را کامل کند
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: theme.palette.brand.main,
                  mb: 2,
                  fontSize: { xs: "1.8rem", md: "2rem" },
                }}
              >
                با اسکولیفای
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.info.dark,
                  lineHeight: 2,
                  fontSize: { xs: "0.9rem", md: "1.1rem" },
                }}
              >
                مدیریت مالی دیگر دغدغه‌ای سخت و پیچیده نیست؛ بلکه تجربه‌ای ساده،
                مطمئن و دلپذیر است.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: theme.palette.text.title,
                mb: 3,
                fontSize: { xs: "1.8rem", md: "2.2rem" },
              }}
            >
              داستان ما
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.info.dark,
                lineHeight: 2,
                mb: 3,
                fontSize: { xs: "0.9rem", md: "1.1rem" },
              }}
            >
              اسکولیفای از یک ایده ساده شروع شد: اینکه مدیریت مالی مدارس نباید
              پیچیده، زمان‌بر یا خسته‌کننده باشد. تجربه مستقیم کار با مدارس و
              مشاهده ساعت‌ها وقت تلف شده برای ثبت دستی پرداخت‌ها و
              گزارش‌گیری‌های پیچیده، الهام‌بخش تیم ما شد تا سامانه‌ای بسازیم که
              کارآمد، دقیق و روان باشد.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.info.dark,
                lineHeight: 2,
                fontSize: { xs: "0.9rem", md: "1.1rem" },
              }}
            >
              اسکولیفای با تکیه بر دانش فنی و طراحی رابط کاربری بهینه، فرآیندهای
              مالی را ساده می‌کند و امکان می‌دهد مدیران و کادر آموزشی روی آموزش
              و پرورش دانش‌آموزان تمرکز کنند.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Core Values Section */}
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
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
        >
          ارزش‌های کلیدی
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: theme.palette.info.dark,
            mb: 6,
            fontSize: { xs: "0.9rem", md: "1.1rem" },
          }}
        >
          اصولی که ما را در مسیر خود هدایت می‌کنند
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{
            maxWidth: 1200, // سقف عرض کل کارت‌ها
            mx: "auto", // وسط‌چین
          }}
        >
          {coreValues.map((value, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  backgroundColor: theme.palette.background.card,
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
                    width: 55,
                    height: 55,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.primary.main,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  <value.icon size={28} color={theme.palette.text.white} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: theme.palette.text.cardTitle,
                    mb: 1,
                    fontSize: { xs: "1rem", md: "1.2rem" },
                  }}
                >
                  {value.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.info.dark,
                    lineHeight: 1.8,
                    fontSize: { xs: "0.85rem", md: "1rem" },
                  }}
                >
                  {value.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Contact Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 8 },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <div id="contact"></div>
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
          تماس با ما
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: theme.palette.info.dark,
            mb: 6,
            fontSize: { xs: "0.9rem", md: "1.1rem" },
          }}
        >
          در صورت بروز هرگونه مشکل یا سوال، تیم پشتیبانی ما آماده کمک به شماست
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{
            maxWidth: 1200, // سقف عرض کل کارت‌ها
            mx: "auto", // وسط‌چین
          }}
        >
          {contactInfo.map((contact, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: 3,
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.primary.light,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  <contact.icon size={24} color={theme.palette.brand.main} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: theme.palette.text.cardTitle,
                    mb: 1,
                    fontSize: { xs: "1rem", md: "1.2rem" },
                  }}
                >
                  {contact.title}
                </Typography>
                {contact.items.map((item, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    sx={{
                      color: theme.palette.info.dark,
                      fontSize: { xs: "0.85rem", md: "1rem" },
                      direction: contact.icon === Phone ? "ltr" : "rtl",
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default AboutUs;
