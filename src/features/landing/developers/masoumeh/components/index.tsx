import { useEffect } from "react";
import { Link } from "react-router-dom";

// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import Paper from "@schoolify/core/components/base/inputs/Paper";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import IconButton from "@schoolify/core/components/base/inputs/IconButton";
import Button from "@schoolify/core/components/base/inputs/Button";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// Icons
import {
  Palette,
  Linkedin,
  Mail,
  Briefcase,
  Award,
  ArrowRight,
  Layout,
  Smartphone,
  PenTool,
} from "lucide-react";

// Data
import {
  masoumehPersonData,
  masoumehStructuredData,
} from "@schoolify/features/landing/developers/utilities/masoumehData";

// SEO
import { updateSEO, addStructuredData } from "@schoolify/core/utilities/seo";

// Routes
import routes from "@schoolify/core/utilities/routes";

const MasoumehSaghafiPage = () => {
  const theme = useAppTheme();
  const data = masoumehPersonData;

  // SEO Setup
  useEffect(() => {
    updateSEO({
      title: data.seo.title,
      description: data.seo.description,
      keywords: data.seo.keywords,
      url: data.personalPageUrl,
    });

    // Add Person structured data - single entity per page
    addStructuredData(masoumehStructuredData, "masoumeh-person");

    // Add BreadcrumbList
    addStructuredData(
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "صفحه اصلی",
            item: "https://schoolify.ir",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "توسعه‌دهندگان",
            item: "https://schoolify.ir/developers",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "معصومه ثقفی",
            item: data.personalPageUrl,
          },
        ],
      },
      "masoumeh-breadcrumb"
    );
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <Box
        component="section"
        aria-label="معرفی معصومه ثقفی"
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.brand.main} 0%, ${theme.palette.primary.main} 100%)`,
          color: theme.palette.text.white,
          py: { xs: 8, md: 12 },
          px: { xs: 3, md: 8 },
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Back Link */}
        <Button
          component={Link}
          to={routes.developers}
          startIcon={<ArrowRight size={20} />}
          sx={{
            position: "absolute",
            top: { xs: 16, md: 24 },
            right: { xs: 16, md: 32 },
            color: theme.palette.text.white,
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
            },
          }}
        >
          بازگشت به تیم
        </Button>

        {/* Icon */}
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: "24px",
            background: "rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 3,
          }}
          aria-hidden="true"
        >
          <Palette size={50} color={theme.palette.text.white} />
        </Box>

        {/* H1 - Primary Entity Name */}
        <Typography
          component="h1"
          variant="h1"
          itemProp="name"
          sx={{
            fontWeight: "bold",
            mb: 1,
            fontSize: { xs: "2rem", md: "3rem" },
            color: theme.palette.text.white,
          }}
        >
          {data.namePersian}
        </Typography>

        {/* English Name */}
        <Typography
          component="p"
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            opacity: 0.9,
            mb: 2,
            color: theme.palette.text.white,
          }}
        >
          {data.nameEnglish}
        </Typography>

        {/* Job Title */}
        <Typography
          component="p"
          itemProp="jobTitle"
          sx={{
            fontSize: { xs: "1.1rem", md: "1.4rem" },
            color: theme.palette.text.white,
            fontWeight: "medium",
            mb: 3,
          }}
        >
          {data.jobTitle}
        </Typography>

        {/* Social Links */}
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <IconButton
            component="a"
            href={`mailto:${data.email}`}
            aria-label={`ارسال ایمیل به ${data.namePersian}`}
            sx={{
              backgroundColor: "rgba(255,255,255,0.15)",
              color: theme.palette.text.white,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.25)",
              },
            }}
          >
            <Mail size={24} />
          </IconButton>
          <IconButton
            component="a"
            href={data.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`پروفایل لینکدین ${data.namePersian}`}
            sx={{
              backgroundColor: "rgba(255,255,255,0.15)",
              color: theme.palette.text.white,
              "&:hover": {
                backgroundColor: "#0077B5",
              },
            }}
          >
            <Linkedin size={24} />
          </IconButton>
        </Box>
      </Box>

      {/* Biography Section */}
      <Box
        component="section"
        aria-labelledby="bio-heading"
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 8 },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box sx={{ maxWidth: 900, mx: "auto" }}>
          {/* H2 - About */}
          <Typography
            component="h2"
            id="bio-heading"
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: theme.palette.text.title,
              mb: 4,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            درباره {data.namePersian}
          </Typography>

          {/* Biography Content - Natural name repetition */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              backgroundColor: theme.palette.background.card,
              borderRadius: 3,
              mb: 4,
            }}
          >
            <Typography
              component="p"
              sx={{
                color: theme.palette.info.dark,
                lineHeight: 2.2,
                mb: 3,
                fontSize: { xs: "0.95rem", md: "1.05rem" },
              }}
            >
              {data.biography.intro}
            </Typography>

            <Typography
              component="p"
              sx={{
                color: theme.palette.info.dark,
                lineHeight: 2.2,
                mb: 3,
                fontSize: { xs: "0.95rem", md: "1.05rem" },
              }}
            >
              {data.biography.role}
            </Typography>

            <Typography
              component="p"
              sx={{
                color: theme.palette.info.dark,
                lineHeight: 2.2,
                mb: 3,
                fontSize: { xs: "0.95rem", md: "1.05rem" },
              }}
            >
              {data.biography.expertise}
            </Typography>

            <Typography
              component="p"
              sx={{
                color: theme.palette.info.dark,
                lineHeight: 2.2,
                fontSize: { xs: "0.95rem", md: "1.05rem" },
              }}
            >
              {data.biography.philosophy}
            </Typography>
          </Paper>

          {/* Experience Badge */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                p: 2,
                backgroundColor: theme.palette.primary.light,
                borderRadius: 2,
              }}
            >
              <Briefcase size={22} color={theme.palette.brand.main} />
              <Typography
                sx={{
                  color: theme.palette.brand.main,
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                {data.experience} تجربه حرفه‌ای
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Skills Section */}
      <Box
        component="section"
        aria-labelledby="skills-heading"
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 8 },
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Box sx={{ maxWidth: 900, mx: "auto" }}>
          {/* H2 - Skills */}
          <Typography
            component="h2"
            id="skills-heading"
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: theme.palette.text.title,
              mb: 4,
              fontSize: { xs: "1.5rem", md: "2rem" },
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Award size={28} color={theme.palette.brand.main} />
            مهارت‌ها و تخصص‌های {data.namePersian}
          </Typography>

          <Grid container spacing={2}>
            {data.skills.map((skill, index) => (
              <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    textAlign: "center",
                    backgroundColor: theme.palette.background.card,
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: theme.palette.text.cardTitle,
                      fontWeight: "medium",
                      fontSize: "0.9rem",
                    }}
                  >
                    {skill}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Expertise Areas Section */}
      <Box
        component="section"
        aria-labelledby="expertise-heading"
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 8 },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box sx={{ maxWidth: 900, mx: "auto" }}>
          {/* H2 - Expertise */}
          <Typography
            component="h2"
            id="expertise-heading"
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: theme.palette.text.title,
              mb: 4,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            حوزه‌های تخصصی
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  backgroundColor: theme.palette.background.card,
                  borderRadius: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <PenTool size={24} color={theme.palette.brand.main} />
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: "bold",
                      color: theme.palette.text.cardTitle,
                    }}
                  >
                    طراحی UI/UX
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: theme.palette.info.dark,
                    lineHeight: 2,
                    fontSize: "0.9rem",
                  }}
                >
                  طراحی رابط کاربری، تجربه کاربری، Figma
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  backgroundColor: theme.palette.background.card,
                  borderRadius: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <Layout size={24} color={theme.palette.brand.main} />
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: "bold",
                      color: theme.palette.text.cardTitle,
                    }}
                  >
                    فرانت‌اند
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: theme.palette.info.dark,
                    lineHeight: 2,
                    fontSize: "0.9rem",
                  }}
                >
                  React، TypeScript، Material-UI، Bootstrap
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  backgroundColor: theme.palette.background.card,
                  borderRadius: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <Smartphone size={24} color={theme.palette.brand.main} />
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: "bold",
                      color: theme.palette.text.cardTitle,
                    }}
                  >
                    واکنش‌گرا
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: theme.palette.info.dark,
                    lineHeight: 2,
                    fontSize: "0.9rem",
                  }}
                >
                  طراحی واکنش‌گرا، Mobile-First
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 8 },
          px: { xs: 3, md: 8 },
          background: `linear-gradient(135deg, ${theme.palette.brand.main} 0%, ${theme.palette.primary.main} 100%)`,
          textAlign: "center",
        }}
      >
        <Typography
          component="p"
          sx={{
            color: theme.palette.text.white,
            mb: 3,
            fontSize: { xs: "1rem", md: "1.2rem" },
          }}
        >
          می‌خواهید با {data.namePersian} در ارتباط باشید؟
        </Typography>

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button
            component="a"
            href={data.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            startIcon={<Linkedin size={20} />}
            sx={{
              backgroundColor: theme.palette.text.white,
              color: theme.palette.brand.main,
              fontWeight: "bold",
              px: 3,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.9)",
              },
            }}
          >
            لینکدین
          </Button>
          <Button
            component="a"
            href={`mailto:${data.email}`}
            variant="outlined"
            startIcon={<Mail size={20} />}
            sx={{
              color: theme.palette.text.white,
              borderColor: theme.palette.text.white,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: theme.palette.text.white,
              },
            }}
          >
            ایمیل
          </Button>
        </Box>
      </Box>
    </main>
  );
};

export default MasoumehSaghafiPage;
