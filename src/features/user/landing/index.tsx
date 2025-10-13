// Custom Hooks

// Core Components
import { createSvgIcon, SvgIcon } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

// Common Components

// Feature Components

// Icon Components
import { MenuIcon } from "@schoolify/core/components/icon/MenuIcon";
import { CloseIcon } from "@schoolify/core/components/icon/CloseIcon";

// Context

// Custom Utilities

// Custom Types
// interface LandingProps {}

const Landing = () => {
  // Context

  // States

  // Hooks

  // Render
  return (
    <>
      <Typography variant="body1" color="text.secondary">
        اسکولیفای، راهکاری نوین برای مدیریت مالی مدارس. با اسکولیفای، امور مالی
        را با دقت، سرعت و سادگی مدیریت کنید؛ از ثبت پرداخت‌ها تا گزارش‌گیری
        حرفه‌ای، همه چیز در یک محیط امن و کاربرپسند فراهم شده است.
      </Typography>

      <MenuIcon color="red" width={90} height={90} />
      <CloseIcon color="red" width={90} height={90} />
    </>
  );
};

export default Landing;
