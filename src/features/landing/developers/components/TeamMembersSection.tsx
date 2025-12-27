// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import Paper from "@schoolify/core/components/base/inputs/Paper";
import IconButton from "@schoolify/core/components/base/inputs/IconButton";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// Icons
import { Linkedin, Mail, Briefcase, Award } from "lucide-react";

// Data
import { developersData } from "@schoolify/features/landing/developers/utilities/developersData";

const TeamMembersSection = () => {
  // Hooks
  const theme = useAppTheme();

  return (
    <Box
      component="section"
      aria-label="اعضای تیم توسعه"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: theme.palette.text.title,
          mb: 2,
          fontSize: { xs: "1.8rem", md: "2.4rem" },
        }}
      >
        تیم ما
      </Typography>
      <Typography
        component="p"
        sx={{
          textAlign: "center",
          color: theme.palette.info.dark,
          mb: 6,
          fontSize: { xs: "0.9rem", md: "1.1rem" },
          maxWidth: 700,
          mx: "auto",
        }}
      >
        آشنایی با متخصصانی که پشت سامانه اسکولیفای هستند
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {developersData.map((developer, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
            <Paper
              component="article"
              itemScope
              itemType="https://schema.org/Person"
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                height: "100%",
                backgroundColor: theme.palette.background.card,
                borderRadius: 4,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                },
              }}
            >
              {/* Decorative top accent */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: `linear-gradient(90deg, ${theme.palette.brand.main}, ${theme.palette.primary.main})`,
                }}
                aria-hidden="true"
              />

              {/* Header with icon and name */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: "16px",
                    background: `linear-gradient(135deg, ${theme.palette.brand.main} 0%, ${theme.palette.primary.main} 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <developer.icon size={32} color={theme.palette.text.white} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    component="h3"
                    variant="h5"
                    itemProp="name"
                    sx={{
                      fontWeight: "bold",
                      color: theme.palette.text.cardTitle,
                      mb: 0.5,
                      fontSize: { xs: "1.2rem", md: "1.4rem" },
                    }}
                  >
                    {developer.name}
                  </Typography>
                  <Typography
                    component="span"
                    itemProp="jobTitle"
                    sx={{
                      color: theme.palette.brand.main,
                      fontWeight: "medium",
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      display: "block",
                    }}
                  >
                    {developer.role}
                  </Typography>
                </Box>
              </Box>

              {/* Experience badge */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                  p: 1.5,
                  backgroundColor: theme.palette.primary.light,
                  borderRadius: 2,
                  width: "fit-content",
                }}
              >
                <Briefcase size={18} color={theme.palette.brand.main} />
                <Typography
                  component="span"
                  sx={{
                    fontSize: "0.9rem",
                    color: theme.palette.brand.main,
                    fontWeight: "medium",
                  }}
                >
                  {developer.experience} تجربه
                </Typography>
              </Box>

              {/* Description */}
              <Typography
                component="p"
                itemProp="description"
                sx={{
                  color: theme.palette.info.dark,
                  lineHeight: 2,
                  mb: 3,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                {developer.description}
              </Typography>

              {/* Skills */}
              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 1.5,
                  }}
                >
                  <Award size={18} color={theme.palette.brand.main} />
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      color: theme.palette.text.cardTitle,
                    }}
                  >
                    تخصص‌ها
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  {developer.skills.map((skill, idx) => (
                    <Box
                      key={idx}
                      component="span"
                      itemProp="knowsAbout"
                      sx={{
                        px: 2,
                        py: 0.5,
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: "20px",
                        fontSize: "0.85rem",
                        color: theme.palette.info.dark,
                        border: `1px solid ${theme.palette.divider}`,
                      }}
                    >
                      {skill}
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Social Links */}
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  pt: 2,
                  borderTop: `1px solid ${theme.palette.divider}`,
                }}
              >
                <IconButton
                  component="a"
                  href={`mailto:${developer.email}`}
                  itemProp="email"
                  aria-label={`ارسال ایمیل به ${developer.name}`}
                  sx={{
                    color: theme.palette.brand.main,
                    backgroundColor: theme.palette.primary.light,
                    "&:hover": {
                      backgroundColor: theme.palette.brand.main,
                      color: theme.palette.text.white,
                    },
                  }}
                >
                  <Mail size={20} />
                </IconButton>
                <IconButton
                  component="a"
                  href={developer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  itemProp="sameAs"
                  aria-label={`پروفایل لینکدین ${developer.name}`}
                  sx={{
                    color: theme.palette.brand.main,
                    backgroundColor: theme.palette.primary.light,
                    "&:hover": {
                      backgroundColor: "#0077B5",
                      color: theme.palette.text.white,
                    },
                  }}
                >
                  <Linkedin size={20} />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamMembersSection;
