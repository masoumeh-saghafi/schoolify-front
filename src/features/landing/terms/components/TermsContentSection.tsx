// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import Paper from "@schoolify/core/components/base/inputs/Paper";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// Data
import {
  termsData,
  lastUpdated,
} from "@schoolify/features/landing/terms/utilities/termsData";

// Icons
import {
  FileText,
  UserCheck,
  AlertTriangle,
  Lock,
  Scale,
  RefreshCw,
  Eye,
  Copyright,
} from "lucide-react";

const iconMap: Record<string, typeof FileText> = {
  intro: FileText,
  registration: UserCheck,
  disclaimer: AlertTriangle,
  "account-security": Lock,
  "legal-compliance": Scale,
  changes: RefreshCw,
  privacy: Eye,
  "intellectual-property": Copyright,
};

const TermsContentSection = () => {
  // Hooks
  const theme = useAppTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          maxWidth: 900,
          mx: "auto",
        }}
      >
        {/* Last Updated */}
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 4,
            backgroundColor: theme.palette.primary.light,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <RefreshCw size={18} color={theme.palette.brand.main} />
          <Typography
            sx={{
              color: theme.palette.brand.main,
              fontWeight: "medium",
              fontSize: "0.9rem",
            }}
          >
            آخرین به‌روزرسانی: {lastUpdated}
          </Typography>
        </Paper>

        {/* Terms Sections */}
        {termsData.map((section, index) => {
          const IconComponent = iconMap[section.id] || FileText;
          return (
            <Paper
              key={section.id}
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                mb: 3,
                backgroundColor: theme.palette.background.card,
                borderRadius: 3,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: 45,
                    height: 45,
                    borderRadius: "12px",
                    background: `linear-gradient(135deg, ${theme.palette.brand.main} 0%, ${theme.palette.primary.main} 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <IconComponent size={22} color={theme.palette.text.white} />
                </Box>
                <Box>
                  <Typography
                    component="span"
                    sx={{
                      color: theme.palette.info.dark,
                      fontSize: "0.85rem",
                      mb: 0.5,
                      display: "block",
                    }}
                  >
                    بخش {index + 1}
                  </Typography>
                  <Typography
                    component="h2"
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      color: theme.palette.text.cardTitle,
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                    }}
                  >
                    {section.title}
                  </Typography>
                </Box>
              </Box>
              <Typography
                component="p"
                sx={{
                  color: theme.palette.info.dark,
                  lineHeight: 2.2,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  pr: { xs: 0, md: 7 },
                }}
              >
                {section.content}
              </Typography>
            </Paper>
          );
        })}

        {/* Agreement Notice */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            mt: 4,
            backgroundColor: theme.palette.brand.main,
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: theme.palette.text.white,
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.1rem" },
              mb: 1,
            }}
          >
            تأیید قوانین و مقررات
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.white,
              opacity: 0.9,
              lineHeight: 1.8,
              fontSize: { xs: "0.9rem", md: "0.95rem" },
            }}
          >
            با ثبت‌نام و استفاده از سامانه اسکولیفای، شما تمامی قوانین و مقررات
            فوق را مطالعه کرده و آن‌ها را می‌پذیرید.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default TermsContentSection;
