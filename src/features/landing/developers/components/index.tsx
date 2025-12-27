import { useEffect } from "react";
import HeroSection from "./HeroSection";
import TeamStatsSection from "./TeamStatsSection";
import TeamMembersSection from "./TeamMembersSection";
import TechStackSection from "./TechStackSection";
import CTASection from "./CTASection";

const Developers = () => {
  // JSON-LD Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "توسعه‌دهندگان اسکولیفای | تیم توسعه نرم‌افزار مدیریت مالی مدارس",
    description:
      "آشنایی با تیم توسعه‌دهندگان اسکولیفای - متین خالقی نژاد (توسعه‌دهنده بک‌اند) و معصومه ثقفی (توسعه‌دهنده فرانت‌اند و طراح UI/UX)",
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
            "مقیاس‌پذیری",
            "Python",
            "Node.js",
            "PostgreSQL",
          ],
        },
        {
          "@type": "Person",
          name: "معصومه ثقفی",
          jobTitle: "توسعه‌دهنده فرانت‌اند و طراح UI/UX",
          description:
            "با حدود 2 سال تجربه در حوزه فرانت‌اند و طراحی UI/UX، مسئول ایجاد رابط کاربری بصری جذاب و تجربه‌ی کاربری روان برای اسکولیفای",
          email: "masoumehsaghafi2002@gmail.com",
          sameAs: "https://www.linkedin.com/in/masoumeh-saghafi-839a75354/",
          knowsAbout: [
            "React",
            "UI/UX Design",
            "TypeScript",
            "Responsive Design",
            "Material-UI",
          ],
        },
      ],
    },
  };

  // Update document head for SEO
  useEffect(() => {
    // Set title
    document.title = "توسعه‌دهندگان اسکولیفای | متین خالقی نژاد و معصومه ثقفی";

    // Helper to set or create meta tags
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Primary Meta Tags
    setMeta("title", "توسعه‌دهندگان اسکولیفای | متین خالقی نژاد و معصومه ثقفی");
    setMeta(
      "description",
      "آشنایی با تیم توسعه‌دهندگان اسکولیفای - متین خالقی نژاد (توسعه‌دهنده بک‌اند با 6 سال تجربه) و معصومه ثقفی (توسعه‌دهنده فرانت‌اند و طراح UI/UX). سازندگان سامانه مدیریت مالی مدارس."
    );
    setMeta(
      "keywords",
      "متین خالقی نژاد, معصومه ثقفی, توسعه‌دهنده بک‌اند, توسعه‌دهنده فرانت‌اند, طراح UI/UX, اسکولیفای, برنامه‌نویس ایرانی, توسعه‌دهنده نرم‌افزار, Matin Khaleghi Nezhad, Masoumeh Saghafi"
    );
    setMeta("author", "تیم اسکولیفای");
    setMeta("robots", "index, follow");

    // Open Graph / Facebook
    setMeta("og:type", "website", true);
    setMeta("og:url", "https://schoolify.ir/developers", true);
    setMeta(
      "og:title",
      "توسعه‌دهندگان اسکولیفای | متین خالقی نژاد و معصومه ثقفی",
      true
    );
    setMeta(
      "og:description",
      "آشنایی با تیم توسعه‌دهندگان اسکولیفای - سازندگان سامانه مدیریت مالی مدارس",
      true
    );
    setMeta("og:locale", "fa_IR", true);
    setMeta("og:site_name", "اسکولیفای", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:url", "https://schoolify.ir/developers");
    setMeta(
      "twitter:title",
      "توسعه‌دهندگان اسکولیفای | متین خالقی نژاد و معصومه ثقفی"
    );
    setMeta(
      "twitter:description",
      "آشنایی با تیم توسعه‌دهندگان اسکولیفای - سازندگان سامانه مدیریت مالی مدارس"
    );

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://schoolify.ir/developers");

    // JSON-LD Structured Data
    let script = document.querySelector(
      'script[type="application/ld+json"][data-page="developers"]'
    );
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-page", "developers");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
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
