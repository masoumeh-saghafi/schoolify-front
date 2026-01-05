import { useEffect } from "react";
import HeroSection from "@schoolify/features/landing/developers/components/HeroSection";
import TeamStatsSection from "@schoolify/features/landing/developers/components/TeamStatsSection";
import TeamMembersSection from "@schoolify/features/landing/developers/components/TeamMembersSection";
import TechStackSection from "@schoolify/features/landing/developers/components/TechStackSection";
import CTASection from "@schoolify/features/landing/developers/components/CTASection";

// SEO Utilities
import {
  updateSEO,
  addStructuredData,
  createBreadcrumbData,
  defaultSEOConfigs,
} from "@schoolify/core/utilities/seo";

const Developers = () => {
  // SEO Setup
  useEffect(() => {
    updateSEO(defaultSEOConfigs.developers);

    // Add AboutPage structured data
    addStructuredData(
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "توسعه‌دهندگان اسکولیفای | تیم توسعه نرم‌افزار مدیریت مالی مدارس",
        description: defaultSEOConfigs.developers.description,
        url: "https://schoolify.ir/developers",
        mainEntity: {
          "@type": "Organization",
          name: "اسکولیفای",
          url: "https://schoolify.ir",
          member: [
            {
              "@type": "Person",
              name: "متین خالقی نژاد",
              jobTitle: "توسعه‌دهنده بک‌اند",
              description:
                "با نزدیک به 6 سال سابقه در برنامه‌نویسی بک‌اند، مسئول اصلی تحلیل سیستم، طراحی معماری و پیاده‌سازی زیرساخت‌های بک‌اند و دیتابیس سامانه اسکولیفای",
              email: "matin.khaleghi.nezhad@gmail.com",
              sameAs: "https://www.linkedin.com/in/matin-khaleghi-nezhad/",
              knowsAbout: [
                "معماری نرم‌افزار",
                "طراحی دیتابیس",
                "API Development",
                "CleanCode",
                "Python",
                "ASP .Net Core",
                "SQL Server",
              ],
            },
            {
              "@type": "Person",
              name: "معصومه ثقفی",
              jobTitle: "توسعه‌دهنده فرانت‌اند",
              description:
                "با حدود 2 سال تجربه در حوزه فرانت‌اند و طراحی UI/UX، مسئول ایجاد رابط کاربری بصری جذاب و تجربه‌ی کاربری روان برای اسکولیفای",
              email: "masoumehsaghafi2002@gmail.com",
              sameAs: "https://www.linkedin.com/in/masoumeh-saghafi-839a75354/",
              knowsAbout: [
                "React",
                "UI/UX Fundamentals",
                "TypeScript",
                "Responsive Design",
                "Material-UI",
              ],
            },
          ],
        },
      },
      "developers-page"
    );

    // Add breadcrumb
    addStructuredData(
      createBreadcrumbData([
        { name: "صفحه اصلی", url: "https://schoolify.ir" },
        { name: "توسعه‌دهندگان", url: "https://schoolify.ir/developers" },
      ]),
      "developers-breadcrumb"
    );

    // Add Person structured data with URL to personal pages for Entity SEO
    addStructuredData(
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://schoolify.ir/developers/matin-khaleghi#person",
        name: "متین خالقی نژاد",
        alternateName: [
          "متین خالقی",
          "Matin Khaleghi Nezhad",
          "Matin Khaleghi",
        ],
        url: "https://schoolify.ir/developers/matin-khaleghi",
        jobTitle: "توسعه‌دهنده بک‌اند",
        worksFor: {
          "@type": "Organization",
          name: "اسکولیفای",
          url: "https://schoolify.ir",
        },
        email: "matin.khaleghi.nezhad@gmail.com",
        sameAs: "https://www.linkedin.com/in/matin-khaleghi-nezhad/",
        knowsAbout: [
          "Backend Development",
          "Python",
          "Node.js",
          "PostgreSQL",
          "Software Architecture",
        ],
      },
      "person-matin"
    );

    addStructuredData(
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://schoolify.ir/developers/masoumeh-saghafi#person",
        name: "معصومه ثقفی",
        alternateName: "Masoumeh Saghafi",
        url: "https://schoolify.ir/developers/masoumeh-saghafi",
        jobTitle: "توسعه‌دهنده فرانت‌اند",
        worksFor: {
          "@type": "Organization",
          name: "اسکولیفای",
          url: "https://schoolify.ir",
        },
        email: "masoumehsaghafi2002@gmail.com",
        sameAs: "https://www.linkedin.com/in/masoumeh-saghafi-839a75354/",
        knowsAbout: [
          "Frontend Development",
          "React",
          "TypeScript",
          "UI/UX Fundamentals",
          "Material-UI",
        ],
      },
      "person-masoumeh"
    );
  }, []);

  return (
    <main>
      <HeroSection />
      <TeamStatsSection />
      <TeamMembersSection />
      <TechStackSection />
      <CTASection />
    </main>
  );
};

export default Developers;
