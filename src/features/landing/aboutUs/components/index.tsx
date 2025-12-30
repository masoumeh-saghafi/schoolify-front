import { useEffect } from 'react'

// Feature Components
import HeroSection from '@schoolify/features/landing/aboutUs/components/HeroSection'
import StorySection from '@schoolify/features/landing/aboutUs/components/StorySection'
import CoreValuesSection from '@schoolify/features/landing/aboutUs/components/CoreValuesSection'
import ContactSection from '@schoolify/features/landing/aboutUs/components/ContactSection'

// SEO Utilities
import {
  updateSEO,
  addStructuredData,
  createBreadcrumbData,
} from '@schoolify/core/utilities/seo'

const AboutUs = () => {
  // SEO Setup
  useEffect(() => {
    updateSEO({
      title: 'درباره ما | اسکولیفای - سامانه مدیریت مالی مدارس',
      description:
        'آشنایی با اسکولیفای - سامانه جامع مدیریت مالی مدارس و مراکز آموزشی. داستان ما، ارزش‌های ما و راه‌های ارتباطی با تیم اسکولیفای.',
      keywords:
        'درباره اسکولیفای, تیم اسکولیفای, سامانه مدیریت مالی مدرسه, نرم افزار حسابداری مدرسه',
      url: 'https://schoolify.ir/about-us',
    })

    // Add AboutPage structured data
    addStructuredData(
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'درباره اسکولیفای',
        description:
          'آشنایی با اسکولیفای - سامانه جامع مدیریت مالی مدارس و مراکز آموزشی',
        url: 'https://schoolify.ir/about-us',
        mainEntity: {
          '@type': 'Organization',
          name: 'اسکولیفای',
          url: 'https://schoolify.ir',
          description:
            'سامانه هوشمند مدیریت مالی مدارس - ثبت شهریه، گزارش‌گیری و پرداخت آنلاین',
        },
      },
      'about-page'
    )

    // Add breadcrumb
    addStructuredData(
      createBreadcrumbData([
        { name: 'صفحه اصلی', url: 'https://schoolify.ir' },
        { name: 'درباره ما', url: 'https://schoolify.ir/about-us' },
      ]),
      'about-breadcrumb'
    )
  }, [])

  //Render
  return (
    <main>
      <HeroSection />
      <StorySection />
      <CoreValuesSection />
      <ContactSection />
    </main>
  )
}

export default AboutUs
