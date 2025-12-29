// Icons Components
import { PaletteIcon } from "@schoolify/core/components/icon/PaletteIcon";
import { LayoutIcon } from "@schoolify/core/components/icon/LayoutIcon";
import { CpuIcon } from "@schoolify/core/components/icon/CpuIcon";
import { ServerIcon } from "@schoolify/core/components/icon/ServerIcon";
import { DatabaseIcon } from "@schoolify/core/components/icon/DatabaseIcon";
import { GitBranchIcon } from "@schoolify/core/components/icon/GitBranchIcon";

import { CodeIcon } from "@schoolify/core/components/icon/CodeIcon";

export interface Developer {
  name: string;
  role: string;
  description: string;
  icon: typeof CodeIcon;
  email: string;
  linkedin: string;
  experience: string;
  skills: string[];
}

export const developersData: Developer[] = [
  {
    name: "متین خالقی نژاد",
    role: "توسعه‌دهنده بک‌اند",
    description:
      "با نزدیک به 6 سال سابقه در برنامه‌نویسی بک‌اند، مسئول اصلی تحلیل سیستم، طراحی معماری و پیاده‌سازی زیرساخت‌های بک‌اند و دیتابیس سامانه اسکولیفای است. تخصص او در ساخت سامانه‌های پایدار و مقیاس‌پذیر، ستون فقرات فنی این پروژه را تشکیل می‌دهد و عملکرد روان و قابل اتکای آن را تضمین می‌کند.",
    icon: CodeIcon,
    email: "matin.khaleghi.nezhad@gmail.com",
    linkedin: "https://www.linkedin.com/in/matin-khaleghi-nezhad/",
    experience: "۶ سال",
    skills: [
      "Software Architecture",
      "Database Design",
      "API Development",
      "ASP.NET Core",
    ],
  },
  {
    name: "معصومه ثقفی",
    role: "توسعه‌دهنده فرانت‌اند و طراح UI/UX",
    description:
      "با حدود 2 سال تجربه در حوزه فرانت‌اند و طراحی UI/UX، مسئول ایجاد رابط کاربری بصری جذاب و تجربه‌ی کاربری روان برای اسکولیفای است. مهارت او در تبدیل ایده‌ها به طراحی‌های کاربرپسند، تعامل آسان و لذت‌بخش کاربران با سامانه را فراهم می‌آورد و تضمین می‌کند که پیچیدگی‌های پشت صحنه، به سادگی و زیبایی به کاربران ارائه شود.",
    icon: PaletteIcon,
    email: "masoumehsaghafi2002@gmail.com",
    linkedin: "https://www.linkedin.com/in/masoumeh-saghafi-839a75354/",
    experience: "۲ سال",
    skills: ["React", "UI/UX Design", "TypeScript", "Responsive Design"],
  },
];

export const teamStats = [
  { label: "سال تجربه ترکیبی", value: "۸+" },
  { label: "خط کد", value: "۵۰,۰۰۰+" },
  { label: "پروژه موفق", value: "۱۰+" },
  { label: "رضایت مشتری", value: "۱۰۰٪" },
];

export const techStack = [
  { title: "React", icon: LayoutIcon },
  { title: "TypeScript", icon: CpuIcon },
  { title: "Material-UI", icon: PaletteIcon },
  { title: "ASP .NET Core", icon: CpuIcon },
  { title: "SQL Server", icon: DatabaseIcon },
];
