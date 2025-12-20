// MUI Components
import Button from "@schoolify/core/components/base/inputs/Button";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// React Types
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

// Custom Types
interface SidebarButtonProps {
  href?: string;
  key?: string;
  onClick?: () => void;
  isActive?: boolean;
  enableBorder?: boolean;
  disabled?: boolean;
  children?: ReactNode;
}

const SidebarButton = (props: SidebarButtonProps) => {
  // Props
  const { href, key, onClick, isActive, enableBorder, disabled, children } =
    props;

  // Hooks
  const theme = useAppTheme();
  const navigate = useNavigate();

  // Handlers
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // اگر لینک داریم → SPA navigation
    if (href) {
      navigate(href);
      return;
    }

    // اگر لینک نیست → رفتار قبلی
    onClick?.();
  };

  // Render
  return (
    <Button
      key={key}
      onClick={handleClick}
      disabled={disabled}
      sx={{
        px: 1,
        color: isActive ? theme.palette.text.white : theme.palette.text.primary,
        backgroundColor: isActive ? theme.palette.primary.main : "transparent",
        borderRadius: 2,
        width: "100%",
        border: enableBorder ? 1 : undefined,
        borderColor: enableBorder ? theme.palette.grey[100] : undefined,
        display: "flex",
        justifyContent: "space-between",
        transition: "background-color 0.2s ease, color 0.2s ease",
        "&:hover": {
          backgroundColor: isActive
            ? theme.palette.primary.dark
            : theme.palette.action.hover,
          color: isActive
            ? theme.palette.text.white
            : theme.palette.text.primary,
          cursor: "pointer",
        },
      }}
      size="small"
    >
      {children}
    </Button>
  );
};
export default SidebarButton;
