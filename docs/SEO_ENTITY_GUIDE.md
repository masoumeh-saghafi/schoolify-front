# راهنمای Entity SEO برای رتبه‌بندی نام‌های شخصی

## هدف

رتبه‌بندی نام‌های **متین خالقی نژاد** و **معصومه ثقفی** در صفحه اول گوگل هنگام جستجوی نام‌های آن‌ها بدون افزودن برند.

---

## ۱. معماری URL و صفحات

### صفحات شخصی ایجاد شده:

- `/developers/matin-khaleghi` - صفحه شخصی متین خالقی نژاد
- `/developers/masoumeh-saghafi` - صفحه شخصی معصومه ثقفی

### چرا ۱ شخص = ۱ URL؟

- گوگل برای تشخیص Entity نیاز به یک URL مرجع مستقل دارد
- صفحات مشترک باعث رقیق شدن سیگنال‌های Entity می‌شوند
- Canonical URL مشخص برای هر فرد ضروری است

---

## ۲. سئوی On-Page

### متین خالقی نژاد

**SEO Title:**

```
متین خالقی نژاد | توسعه‌دهنده بک‌اند و معمار نرم‌افزار
```

**Meta Description:**

```
متین خالقی نژاد، توسعه‌دهنده بک‌اند با ۶ سال تجربه در معماری نرم‌افزار، طراحی دیتابیس و توسعه API. متخصص Python، Node.js و PostgreSQL.
```

**Keywords:**

```
متین خالقی نژاد, متین خالقی, Matin Khaleghi Nezhad, Matin Khaleghi, توسعه‌دهنده بک‌اند, Backend Developer
```

**ساختار H:**

- H1: متین خالقی نژاد
- H2: درباره متین خالقی
- H2: مهارت‌ها و تخصص‌های متین خالقی
- H2: تکنولوژی‌های مورد استفاده
- H3: بک‌اند
- H3: پایگاه داده
- H3: ابزارها

**تکرار طبیعی نام:**
محتوای صفحه شامل ۴-۵ بار تکرار نام کامل به صورت طبیعی در متن است.

---

### معصومه ثقفی

**SEO Title:**

```
معصومه ثقفی | توسعه‌دهنده فرانت‌اند
```

**Meta Description:**

```
معصومه ثقفی، توسعه‌دهنده فرانت‌اند با تجربه در React، TypeScript و طراحی تجربه کاربری. متخصص در ساخت رابط‌های کاربری زیبا و کاربردی.
```

**Keywords:**

```
معصومه ثقفی, Masoumeh Saghafi, توسعه‌دهنده فرانت‌اند, Frontend Developer, طراح UI/UX
```

---

## ۳. Structured Data (JSON-LD)

### متین خالقی نژاد

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://schoolify.ir/developers/matin-khaleghi#person",
  "name": "متین خالقی نژاد",
  "alternateName": ["متین خالقی", "Matin Khaleghi Nezhad", "Matin Khaleghi"],
  "url": "https://schoolify.ir/developers/matin-khaleghi",
  "jobTitle": "توسعه‌دهنده بک‌اند",
  "email": "matin.khaleghi.nezhad@gmail.com",
  "sameAs": ["https://www.linkedin.com/in/matin-khaleghi-nezhad/"],
  "worksFor": {
    "@type": "Organization",
    "name": "اسکولیفای",
    "url": "https://schoolify.ir"
  }
}
```

### معصومه ثقفی

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://schoolify.ir/developers/masoumeh-saghafi#person",
  "name": "معصومه ثقفی",
  "alternateName": ["Masoumeh Saghafi"],
  "url": "https://schoolify.ir/developers/masoumeh-saghafi",
  "jobTitle": "توسعه‌دهنده فرانت‌اند",
  "email": "masoumehsaghafi2002@gmail.com",
  "sameAs": ["https://www.linkedin.com/in/masoumeh-saghafi-839a75354/"],
  "worksFor": {
    "@type": "Organization",
    "name": "اسکولیفای",
    "url": "https://schoolify.ir"
  }
}
```

---

## ۴. استراتژی لینک‌سازی داخلی

### لینک‌های اضافه شده:

1. **صفحه توسعه‌دهندگان (/developers)**

   - Anchor Text: "درباره متین خالقی نژاد" → `/developers/matin-khaleghi`
   - Anchor Text: "درباره معصومه ثقفی" → `/developers/masoumeh-saghafi`

2. **فوتر سایت**
   - Anchor Text: "متین خالقی نژاد" → `/developers/matin-khaleghi`
   - Anchor Text: "معصومه ثقفی" → `/developers/masoumeh-saghafi`

### قوانین Anchor Text:

- استفاده از نام کامل به عنوان Anchor Text
- پرهیز از "اینجا کلیک کنید" یا "بیشتر بخوانید"
- تنوع در Anchor Text (نام کامل، نام + عنوان شغلی)

---

## ۵. سئوی Off-Page و بک‌لینک

### LinkedIn Optimization Checklist:

**متین خالقی نژاد:**

- [ ] عنوان: "متین خالقی نژاد | توسعه‌دهنده بک‌اند | Schoolify"
- [ ] خلاصه: شامل نام کامل، تخصص‌ها و لینک به صفحه شخصی
- [ ] URL سفارشی: linkedin.com/in/matin-khaleghi-nezhad
- [ ] لینک به صفحه شخصی در بخش وب‌سایت

**معصومه ثقفی:**

- [ ] عنوان: "معصومه ثقفی | توسعه‌دهنده فرانت‌اند | Schoolify"
- [ ] خلاصه: شامل نام کامل و لینک به صفحه شخصی
- [ ] لینک به صفحه شخصی در بخش وب‌سایت

### پلتفرم‌های توصیه شده برای بک‌لینک:

1. **LinkedIn** - پروفایل بهینه با لینک به صفحه شخصی
2. **GitHub** - پروفایل با بیوگرافی و لینک
3. **Virgool** - مقالات فنی با نام نویسنده و لینک
4. **Medium** - مقالات انگلیسی برای پوشش بین‌المللی
5. **Stack Overflow** - پروفایل با لینک (برای متین)

### قوانین Anchor Text بک‌لینک:

- 60% نام کامل فارسی
- 20% نام کامل انگلیسی
- 10% نام + عنوان شغلی
- 10% URL خالی یا "وب‌سایت"

---

## ۶. ایندکس گوگل و اعتبارسنجی

### مراحل Google Search Console:

1. **URL Inspection:**

   - بررسی `/developers/matin-khaleghi`
   - بررسی `/developers/masoumeh-saghafi`
   - درخواست ایندکس برای هر دو URL

2. **Sitemap:**

   - تأیید وجود URLهای شخصی در sitemap.xml
   - Submit کردن sitemap به GSC

3. **جستجوی تست:**
   ```
   "متین خالقی نژاد" -اسکولیفای
   "معصومه ثقفی" -اسکولیفای
   site:schoolify.ir "متین خالقی"
   site:schoolify.ir "معصومه ثقفی"
   ```

---

## ۷. تایم‌لاین و انتظارات

### هفته ۱-۲:

- ایندکس شدن صفحات شخصی
- ظاهر شدن در نتایج با کلمه کلیدی برند

### هفته ۳-۴:

- بهبود رتبه برای نام + برند
- شروع ظاهر شدن برای نام خالی

### ماه ۲-۳:

- تثبیت رتبه صفحه اول برای نام خالی
- Entity Recognition کامل توسط گوگل

### نشانه‌های موفقیت:

- Knowledge Panel برای نام شخص
- ظاهر شدن در صفحه اول بدون brand modifier
- sitelinks در نتایج جستجو

### نشانه‌های هشدار:

- افت رتبه پس از ۲ هفته
- عدم ایندکس پس از ۱ هفته
- Crawl errors در GSC

---

## ۸. کنترل ریسک

### اجتناب از:

- ❌ بیش‌بهینه‌سازی (keyword stuffing)
- ❌ Schema spam یا تکرار Person entity در یک صفحه
- ❌ لینک‌سازی مصنوعی یا خرید بک‌لینک
- ❌ تغییر مکرر محتوا و ساختار صفحه
- ❌ استفاده از همان توضیحات در همه جا (duplicate content)

### توصیه‌ها:

- ✅ محتوای منحصر به فرد برای هر صفحه شخصی
- ✅ یک Person schema برای هر URL
- ✅ تنوع طبیعی در anchor text
- ✅ صبر و پایداری (حداقل ۲ ماه قبل از تغییرات اساسی)
- ✅ بروزرسانی منظم پروفایل‌های اجتماعی
