// MUI Components
import ListItem from "@schoolify/core/components/base/inputs/ListItem";
import ListItemText from "@schoolify/core/components/base/inputs/ListItemText";
import List from "@schoolify/core/components/base/inputs/List";

// Feature Components
import SidebarButton from "@schoolify/features/shared/dashboard/components/Sidebar/SidebarButton";

//Type Definitions
import type { JSX } from "@emotion/react/jsx-runtime";
import Box from "@schoolify/core/components/base/inputs/Box";
import { useState } from "react";
import { fa } from "zod/v4/locales";
import { ArrowDownIcon } from "@schoolify/core/components/icon/ArrowDownIcon";
import { ArrowUpIcon } from "@schoolify/core/components/icon/ArrowUpIcon";
import Typography from "@schoolify/core/components/base/inputs/Typography";

// Custom Types
interface SidebarListItemProps {
  title: string;
  href?: string;
  icon?: JSX.Element | null;
  type?: "text" | "listItem";
  onClick?: () => void;
  isActive?: boolean;
  enableBorder?: boolean;
  disabled?: boolean;
  nested?: boolean;
  children?: SidebarListItemChildrenProps[];
}
interface SidebarListItemChildrenProps {
  title: string;
  href?: string;
  icorn?: JSX.Element | null;
  type?: "text" | "listItem";
  onClick?: () => void;
  isActive?: boolean;
  enableBorde?: boolean;
  disabled?: boolean;
  nested?: boolean;
}

const SidebarListItem = (props: SidebarListItemProps) => {
  // Props
  const {
    title,
    href,
    icon,
    onClick,
    isActive,
    enableBorder = true,
    disabled = false,
    nested = false,
    children,
    type,
  } = props;

  // States
  const [open, setOpen] = useState<boolean>(false);

  // Hooks
  // const navigate = useNavigate();

  // Handlers
  const onClickToggleOpenHandler = () => {
    setOpen(!open);
  };

  // Render
  return (
    <>
      {type === "text" && (
        <Typography
          variant="caption"
          sx={{
            // textAlign: "center",
            // direction: "rtl",
            mx: 1,
            mt: 2,
            display: "block",
            textWrap: "nowrap",
          }}
        >
          {title}
        </Typography>
      )}

      {type === "listItem" && (
        <>
          <List sx={{ px: 1 }}>
            <ListItem
              sx={{ mx: 1, px: nested ? 3 : 0 }}
              onClick={onClickToggleOpenHandler}
            >
              <SidebarButton
                onClick={onClick}
                href={href}
                isActive={isActive}
                enableBorder={enableBorder}
                disabled={disabled}
              >
                {icon}
                <ListItemText
                  sx={{
                    display: "block",
                    textWrap: "nowrap",
                    textAlign: "left",
                    ml: 1,
                  }}
                >
                  {title}
                </ListItemText>

                {children && (open ? <ArrowDownIcon /> : <ArrowUpIcon />)}
              </SidebarButton>
            </ListItem>
          </List>

          {open &&
            children &&
            children.map((item) => <SidebarListItem {...item} nested={true} />)}
        </>
      )}
    </>
  );
};

export default SidebarListItem;
