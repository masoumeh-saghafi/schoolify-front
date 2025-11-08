import type { ElementType, FormEventHandler, ReactNode } from "react";
import Typography from "../../base/inputs/Typography";
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import Paper from "@schoolify/core/components/base/inputs/Paper";

interface ContentBoxProps {
  label: string;
  children: ReactNode;
  component?: ElementType;
  onSubmit?: FormEventHandler<HTMLDivElement | HTMLFormElement>;
}

const ContentBox = (props: ContentBoxProps) => {
  // Props
  const { label, children, component = "div", onSubmit } = props;

  // Hooks
  const theme = useAppTheme();

  // Render
  return (
    <Paper
      sx={{
        width: "100%",
        border: 1,
        borderRadius: 2,
        borderColor: "grey.300",
        mb: 2,
        p: 2,
        alignItems: "center",
      }}
      component={component}
      {...(component === "form" && onSubmit ? { onSubmit } : {})}
    >
      <Typography
        variant="body1"
        sx={{
          margin: 1,
          mb: 3,
          color: theme.palette.text.cardTitle,
          fontSize: " 0.95rem ",
        }}
      >
        {label}
      </Typography>

      {children}
    </Paper>
  );
};

export default ContentBox;
