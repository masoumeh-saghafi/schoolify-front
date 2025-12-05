// MUI Components
import ListItem from "@schoolify/core/components/base/inputs/ListItem";
import ListItemText from "@schoolify/core/components/base/inputs/ListItemText";
import List from "@schoolify/core/components/base/inputs/List";

// Feature Components
import SidebarButton from "@schoolify/features/shared/dashboard/components/Sidebar/SidebarButton";

//Type Definitions
import type { JSX } from "@emotion/react/jsx-runtime";
import { useState } from "react";
import { ArrowDownIcon } from "@schoolify/core/components/icon/ArrowDownIcon";
import { ArrowUpIcon } from "@schoolify/core/components/icon/ArrowUpIcon";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

export type SidebarItemType = "text" | "listItem" | "contentBox";

// Base shared interface
interface SidebarBaseItem {
  title: string;
  link?: string;
  icon?: JSX.Element | null;
  type?: SidebarItemType;
  onClick?: () => void;
  isActive?: boolean;
  enableBorder?: boolean;
  disabled?: boolean;
  nested?: boolean;
}

export interface SidebarListItemProps extends SidebarBaseItem {
  children?: SidebarListItemChildrenProps[]; // recursive type
}

export type SidebarListItemChildrenProps = SidebarBaseItem;

const SidebarListItem = (props: SidebarListItemProps) => {
  // Props
  const {
    title,
    link,
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
  const theme = useAppTheme();
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
          // variant="caption"
          sx={{
            // textAlign: "center",
            // direction: "rtl",
            mx: 3,
            my: 2,
            display: "block",
            textWrap: "nowrap",
            fontSize: "0.85rem",
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
                href={link}
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

      {type === "contentBox" && (
        <>
          <List sx={{ px: 1 }}>
            <ListItem
              sx={{
                mx: 1,
                px: nested ? 3 : 0,
                backgroundColor: theme.palette.background.card,
              }}
            >
              <SidebarButton
                onClick={onClick}
                href={link}
                isActive={isActive}
                enableBorder={enableBorder}
                disabled={disabled}
              >
                {icon}
                <ListItemText
                  sx={{
                    display: "block",
                    textWrap: "nowrap",
                    textAlign: "center",
                    ml: 1,
                  }}
                >
                  {title}
                </ListItemText>
              </SidebarButton>
            </ListItem>
          </List>
        </>
      )}
    </>
  );
};

export default SidebarListItem;
