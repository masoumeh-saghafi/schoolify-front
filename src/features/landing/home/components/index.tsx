import { useEffect } from "react";
import HeroSection from "@schoolify/features/landing/home/components/HeroSection";
import FeaturesSection from "@schoolify/features/landing/home/components/FeaturesSection";
import BeforeAfterSection from "@schoolify/features/landing/home/components/BeforeAfterSection";
import CTASection from "@schoolify/features/landing/home/components/CTASection";

// SEO Utilities
import {
  updateSEO,
  addStructuredData,
  defaultSEOConfigs,
} from "@schoolify/core/utilities/seo";

const Home = () => {
  // SEO Setup
  useEffect(() => {
    updateSEO(defaultSEOConfigs.home);

    // Add Organization structured data
    addStructuredData(
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "اسکولیفای",
        alternateName: "Schoolify",
        url: "https://schoolify.ir",
        logo: "https://schoolify.ir/favicon.svg",
        description:
          "سامانه جامع مدیریت مالی مدارس و مراکز آموزشی - ثبت شهریه، گزارش‌گیری مالی، مدیریت دانش‌آموزان",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: "Persian",
        },
        sameAs: [
          "https://www.linkedin.com/in/matin-khaleghi-nezhad/",
          "https://www.linkedin.com/in/masoumeh-saghafi-839a75354/",
        ],
      },
      "home-org"
    );

    // Add WebPage structured data
    addStructuredData(
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "صفحه اصلی اسکولیفای",
        description: defaultSEOConfigs.home.description,
        url: "https://schoolify.ir/",
        isPartOf: {
          "@type": "WebSite",
          name: "اسکولیفای",
          url: "https://schoolify.ir",
        },
        about: {
          "@type": "Thing",
          name: "مدیریت مالی مدارس",
        },
        mainEntity: {
          "@type": "SoftwareApplication",
          name: "اسکولیفای",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "IRR",
          },
        },
      },
      "home-page"
    );
  }, []);

  // Render
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <BeforeAfterSection />
      <CTASection />
    </main>
  );
};

export default Home;
