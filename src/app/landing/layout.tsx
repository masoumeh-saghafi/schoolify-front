// Custom Hooks

// Core Components
import LandingHeader from "@schoolify/features/user/landing/header";
import { Outlet } from "react-router-dom";

// Common Components

// Feature Components

// Icon Components

// Context

// Custom Utilities

// Custom Types
interface LandingLayoutProps {}

const LandingLayout = (props: LandingLayoutProps) => {
  // Context

  // States

  // Hooks

  // Render
  return (
    <>
      <LandingHeader />
      <Outlet />
    </>
  );
};

export default LandingLayout;
