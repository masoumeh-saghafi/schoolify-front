import { useEffect } from "react";

// Feature Components
import HeroSection from "@schoolify/features/landing/terms/components/HeroSection";
import TermsContentSection from "@schoolify/features/landing/terms/components/TermsContentSection";

// SEO Utilities
import {
  updateSEO,
  addStructuredData,
  createBreadcrumbData,
  defaultSEOConfigs,
} from "@schoolify/core/utilities/seo";

const Terms = () => {
  // SEO Setup
  useEffect(() => {
    updateSEO(defaultSEOConfigs.terms);

    // Add WebPage structured data
    addStructuredData(
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "قوانین و مقررات اسکولیفای",
        description: defaultSEOConfigs.terms.description,
        url: "https://schoolify.ir/terms",
        isPartOf: {
          "@type": "WebSite",
          name: "اسکولیفای",
          url: "https://schoolify.ir",
        },
        mainContentOfPage: {
          "@type": "WebPageElement",
          cssSelector: "main",
        },
      },
      "terms-page"
    );

    // Add breadcrumb
    addStructuredData(
      createBreadcrumbData([
        { name: "صفحه اصلی", url: "https://schoolify.ir" },
        { name: "قوانین و مقررات", url: "https://schoolify.ir/terms" },
      ]),
      "terms-breadcrumb"
    );
  }, []);

  // Render
  return (
    <main>
      <HeroSection />
      <TermsContentSection />
    </main>
  );
};

export default Terms;
