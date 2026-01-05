// SEO Helper Utilities for Schoolify

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  url: string;
  image?: string;
  type?: "website" | "article" | "profile";
  noIndex?: boolean;
}

/**
 * Updates document head with SEO meta tags
 */
export const updateSEO = (config: SEOConfig) => {
  const {
    title,
    description,
    keywords,
    url,
    image = "https://schoolify.ir/og-image.png",
    type = "website",
    noIndex = false,
  } = config;

  // Set document title
  document.title = title;

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
  setMeta("title", title);
  setMeta("description", description);
  if (keywords) {
    setMeta("keywords", keywords);
  }
  setMeta("author", "تیم اسکولیفای");
  setMeta("robots", noIndex ? "noindex, nofollow" : "index, follow");

  // Open Graph / Facebook
  setMeta("og:type", type, true);
  setMeta("og:url", url, true);
  setMeta("og:title", title, true);
  setMeta("og:description", description, true);
  setMeta("og:image", image, true);
  setMeta("og:locale", "fa_IR", true);
  setMeta("og:site_name", "اسکولیفای", true);

  // Twitter
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:url", url);
  setMeta("twitter:title", title);
  setMeta("twitter:description", description);
  setMeta("twitter:image", image);

  // Canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", url);
};

/**
 * Adds JSON-LD structured data to page
 */
export const addStructuredData = (data: object, pageId: string) => {
  let script = document.querySelector(
    `script[type="application/ld+json"][data-page="${pageId}"]`
  );
  if (!script) {
    script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.setAttribute("data-page", pageId);
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};

/**
 * Removes JSON-LD structured data from page
 */
export const removeStructuredData = (pageId: string) => {
  const script = document.querySelector(
    `script[type="application/ld+json"][data-page="${pageId}"]`
  );
  if (script) {
    script.remove();
  }
};

/**
 * Creates breadcrumb structured data
 */
export const createBreadcrumbData = (
  items: Array<{ name: string; url: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

// Default SEO configurations for different pages
export const defaultSEOConfigs = {
  home: {
    title: "اسکولیفای | سامانه جامع مدیریت مالی مدارس و مراکز آموزشی",
    description:
      "اسکولیفای - سامانه هوشمند مدیریت مالی مدارس، ثبت شهریه، گزارش‌گیری مالی، مدیریت دانش‌آموزان و پرداخت‌های آنلاین. ساده، امن و کاربردی برای مراکز آموزشی.",
    keywords:
      "مدیریت مالی مدرسه, نرم افزار حسابداری مدرسه, سامانه شهریه, اسکولیفای, schoolify, مدیریت دانش آموزان, گزارش مالی مدرسه, پرداخت شهریه آنلاین",
    url: "https://schoolify.ir/",
  },
  terms: {
    title: "قوانین و مقررات | اسکولیفای",
    description:
      "قوانین و مقررات استفاده از سامانه اسکولیفای - شرایط استفاده، حریم خصوصی، مالکیت معنوی و تعهدات کاربران.",
    keywords:
      "قوانین اسکولیفای, مقررات استفاده, حریم خصوصی, شرایط خدمات, قوانین سامانه مدرسه",
    url: "https://schoolify.ir/terms",
  },
  developers: {
    title: "توسعه‌دهندگان اسکولیفای | متین خالقی نژاد و معصومه ثقفی",
    description:
      "آشنایی با تیم توسعه‌دهندگان اسکولیفای - متین خالقی نژاد (توسعه‌دهنده بک‌اند با 6 سال تجربه) و معصومه ثقفی (توسعه‌دهنده فرانت‌اند).",
    keywords:
      "متین خالقی نژاد, معصومه ثقفی, توسعه‌دهنده بک‌اند, توسعه‌دهنده فرانت‌اند, طراح UI/UX, اسکولیفای, Matin Khaleghi Nezhad, Masoumeh Saghafi",
    url: "https://schoolify.ir/developers",
  },
  matinKhaleghi: {
    title: "متین خالقی نژاد | توسعه‌دهنده بک‌اند و معمار نرم‌افزار",
    description:
      "متین خالقی نژاد، توسعه‌دهنده بک‌اند با ۶ سال تجربه در معماری نرم‌افزار، طراحی دیتابیس و توسعه API. متخصص Python، Node.js و PostgreSQL.",
    keywords:
      "متین خالقی نژاد, متین خالقی, Matin Khaleghi Nezhad, Matin Khaleghi, توسعه‌دهنده بک‌اند, Backend Developer, معمار نرم‌افزار, Python Developer",
    url: "https://schoolify.ir/developers/matin-khaleghi",
  },
  masoumehSaghafi: {
    title: "معصومه ثقفی | توسعه‌دهنده فرانت‌اند",
    description:
      "معصومه ثقفی، توسعه‌دهنده فرانت‌اند با تجربه در React و TypeScript و پیاده‌سازی رابط‌های کاربری وب به‌صورت کامپوننت‌محور و واکنش‌گرا.",
    keywords:
      "معصومه ثقفی, Masoumeh Saghafi, توسعه‌دهنده فرانت‌اند, Frontend Developer, React Developer, TypeScript Developer",
    url: "https://schoolify.ir/developers/masoumeh-saghafi",
  },
  login: {
    title: "ورود به سامانه | اسکولیفای",
    description:
      "ورود به سامانه اسکولیفای - دسترسی به پنل مدیریت مالی مدرسه، گزارش‌ها و امکانات سامانه.",
    keywords: "ورود اسکولیفای, لاگین, ورود به سامانه مدرسه",
    url: "https://schoolify.ir/authentication/login",
    noIndex: true,
  },
  aboutUs: {
    title: "درباره ما | اسکولیفای - سامانه مدیریت مالی مدارس",
    description:
      "آشنایی با اسکولیفای - سامانه جامع مدیریت مالی مدارس و مراکز آموزشی. داستان ما، ارزش‌های ما و راه‌های ارتباطی با تیم اسکولیفای.",
    keywords:
      "درباره اسکولیفای, تیم اسکولیفای, سامانه مدیریت مالی مدرسه, نرم افزار حسابداری مدرسه",
    url: "https://schoolify.ir/about-us",
  },
  profile: {
    title: "پروفایل کاربری | اسکولیفای",
    description: "مدیریت حساب کاربری، اشتراک‌ها و اطلاعات شخصی در اسکولیفای.",
    keywords: "پروفایل کاربری, حساب کاربری اسکولیفای",
    url: "https://schoolify.ir/profile",
    noIndex: true,
  },
  admin: {
    title: "پنل مدیریت | اسکولیفای",
    description: "پنل مدیریت سامانه اسکولیفای - مدیریت کاربران و تنظیمات.",
    keywords: "پنل مدیریت اسکولیفای",
    url: "https://schoolify.ir/admin",
    noIndex: true,
  },
  school: {
    title: "پنل مدرسه | اسکولیفای",
    description:
      "پنل مدیریت مدرسه در اسکولیفای - ثبت شهریه، گزارش‌گیری و مدیریت دانش‌آموزان.",
    keywords: "پنل مدرسه, مدیریت مالی مدرسه",
    url: "https://schoolify.ir/school",
    noIndex: true,
  },
};
