// Custom Hooks

// Core Components
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

// Common Components

// Feature Components

// Icon Components

// Context

// Custom Utilities

// Custom Types
interface HeaderProps {
  title: string;
  buttons: any[];
}

const Header = (props: HeaderProps) => {
  // Context

  // States

  // Hooks

  // Render
  return (
    <>
      <Typography>{props.title ?? "HEADER"}</Typography>
      {props.buttons.map((button) => (
        <Button>{button.title}</Button>
      ))}
    </>
  );
};

export default Header;
