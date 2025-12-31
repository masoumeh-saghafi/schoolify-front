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
import { WhatsAppIcon } from "@schoolify/core/components/icon/WhatsAppIcon";
import { TelegramIcon } from "@schoolify/core/components/icon/TelegramIcon";
import useClientDeviceTypeIsMobile from "@schoolify/core/hooks/common/useClientDeviceTypeIsMobile";
import { scrollToTop } from "@schoolify/core/utilities/scroll";

// Custom Types
interface FooterProps {}

const quickLinks = [
  { title: "صفحه اصلی", link: routes.index, scrollToTop: true },
  { title: "ورود", link: routes.login, scrollToTop: true },
  { title: "درباره ما", link: routes.aboutUs, scrollToTop: true },
  { title: "تماس باما", link: routes.contactUs, scrollToTop: false },
  { title: "توسعه‌دهندگان", link: routes.developers, scrollToTop: true },
  { title: "قوانین و مقررات", link: routes.terms, scrollToTop: true },
];

// Entity SEO: Developer personal page links with exact name anchor text
const developerLinks = [
  { name: "متین خالقی نژاد", link: routes.developerMatin },
  { name: "معصومه ثقفی", link: routes.developerMasoumeh },
];

const Footer = (props: FooterProps) => {
  // Hooks
  const theme = useAppTheme();
  const isMobile = useClientDeviceTypeIsMobile();

  // Render
  return (
    <Box
      component="footer"
      role="contentinfo"
      aria-label="پاورقی سایت اسکولیفای"
      itemScope
      itemType="https://schema.org/WPFooter"
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.white,
        py: 6,
        px: { xs: 3, md: 8 },
       
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
                rel="noopener noreferrer"
                aria-label="تماس از طریق واتساپ"
                title="واتساپ اسکولیفای"
                sx={{
                  color: theme.palette.info.dark,
                  transition: "color 0.2s ease",
                  "&:hover": { color: theme.palette.primary.main },
                }}
              >
                <WhatsAppIcon aria-hidden="true" />
              </Box>
              <Box
                component="a"
                href="https://t.me/+989191587842"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تماس از طریق تلگرام"
                title="تلگرام اسکولیفای"
                sx={{
                  color: theme.palette.info.dark,
                  transition: "color 0.2s ease",
                  "&:hover": { color: "#0088cc" },
                }}
              >
                <TelegramIcon aria-hidden="true" />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Developer Links - Entity SEO with exact name anchor text */}
      <Box
        sx={{
          borderTop: `1px solid ${theme.palette.grey[600]}`,
          mt: 4,
          pt: 3,
          textAlign: "center",
        }}
      >
        <Typography
          component="p"
          variant="body2"
          sx={{
            color: theme.palette.info.dark,
            mb: 2,
            fontSize: "0.85rem",
          }}
        >
          ساخته شده با ❤️ توسط{" "}
          {developerLinks.map((dev, index) => (
            <span key={dev.name}>
              <Typography
                component={Link}
                to={dev.link}
                onClick={scrollToTop}
                sx={{
                  color: theme.palette.brand.main,
                  textDecoration: "none",
                  fontWeight: "medium",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {dev.name}
              </Typography>
              {index < developerLinks.length - 1 && " و "}
            </span>
          ))}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: theme.palette.info.dark,
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} اسکولیفای. تمامی حقوق محفوظ است.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
