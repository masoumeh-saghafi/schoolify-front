// React Types
import { Link } from "react-router-dom";

// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import Grid from "@schoolify/core/components/base/inputs/Grid";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// Core Utilities
import routes from "@schoolify/core/utilities/routes";

// Icons
import { Instagram, Send, Twitter, Phone, Mail } from "lucide-react";
import { WhatsAppIcon } from "@schoolify/core/components/icon/WhatsAppIcon";
import { TelegramIcon } from "@schoolify/core/components/icon/TelegramIcon";
import useClientDeviceTypeIsMobile from "@schoolify/core/hooks/common/useClientDeviceTypeIsMobile";
import { scrollToTop } from "@schoolify/core/utilities/scroll";

// Custom Types
interface FooterProps {}

const quickLinks = [
  { title: "صفحه اصلی", link: routes.index, scrollToTop: true },
  { title: "درباره ما", link: routes.aboutUs, scrollToTop: true },
  { title: "تماس باما", link: routes.contactUs, scrollToTop: false },
  { title: "ورود", link: routes.login, scrollToTop: true },
];

const Footer = (props: FooterProps) => {
  // Hooks
  const theme = useAppTheme();
  const isMobile = useClientDeviceTypeIsMobile();

  // Render
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.white,
        py: 6,
        px: { xs: 3, md: 8 },
        // direction: "rtl",
      }}
    >
      <Grid container spacing={4}>
        {/* Logo & Description */}
        <Grid
          size={{ xs: 12, md: 4, sm: 4 }}
          sx={{
            display: "flex",
            justifyContent: isMobile ? "flex-start" : "center",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 2,
                color: theme.palette.text.primary,
                fontSize: "1.2rem",
                // color: theme.palette.primary.main,
              }}
            >
              اسکولیفای
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.info.dark,
                lineHeight: 2,
              }}
            >
              مدیریت مالی مدرسه،
              <br></br>
              ساده و مطمئن
            </Typography>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid
          size={{ xs: 12, md: 4, sm: 4 }}
          sx={{
            display: "flex",
            justifyContent: isMobile ? "flex-start" : "center",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
                color: theme.palette.text.primary,
                fontSize: "1.2rem",
              }}
            >
              دسترسی سریع
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {quickLinks.map((item) => (
                <Typography
                  key={item.title}
                  component={Link}
                  to={item.link}
                  onClick={item.scrollToTop ? scrollToTop : undefined}
                  sx={{
                    fontSize: "0.9rem",
                    color: theme.palette.info.dark,
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {item.title}
                </Typography>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Social Media */}
        <Grid
          size={{ xs: 12, md: 4, sm: 4 }}
          sx={{
            display: "flex",
            justifyContent: isMobile ? "flex-start" : "center",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
                color: theme.palette.text.primary,
                fontSize: "1rem",
              }}
            >
              شبکه‌های اجتماعی
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box
                component="a"
                href="https://wa.me/+989191587842"
                target="_blank"
                sx={{
                  color: theme.palette.info.dark,
                  transition: "color 0.2s ease",
                  "&:hover": { color: theme.palette.primary.main },
                }}
              >
                <WhatsAppIcon />
              </Box>
              <Box
                component="a"
                href="https://t.me/+989191587842"
                target="_blank"
                sx={{
                  color: theme.palette.info.dark,
                  transition: "color 0.2s ease",
                  "&:hover": { color: "#0088cc" },
                }}
              >
                <TelegramIcon />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Box
        sx={{
          borderTop: `1px solid ${theme.palette.grey[600]}`,
          mt: 4,
          pt: 3,
          textAlign: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.info.dark,
            textAlign: "center",
            mt: 4, // فاصله از بالا
          }}
        >
          © {new Date().getFullYear()} اسکولیفای. تمامی حقوق محفوظ است.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
