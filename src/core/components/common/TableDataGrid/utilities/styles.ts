import type { SxProps, Theme } from "@mui/material";
import type { GridSlotProps } from "@mui/x-data-grid";
import { theme } from "@schoolify/core/style/themes/muiTheme";

export const getDataGridStyles = (minWidth: number): SxProps<Theme> => ({
  minWidth: minWidth + 10,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.black,

  "& .MuiDataGrid-columnHeaderTitle": {
    color: theme.palette.text.header,
  },

  // Fix pagination buttons direction for RTL
  "& .MuiTablePagination-actions": {
    direction: "rtl",
  },

  // Sticky footer for pagination
  "& .MuiDataGrid-footerContainer": {
    position: "sticky",
    left: 0,
    backgroundColor: theme.palette.background.paper,
    zIndex: 2,
    minWidth: "fit-content",
  },

  // "& .MuiDataGrid-filterForm": {
  //   direction: "rtl",
  // },
});

export const containerStyles: SxProps<Theme> = {
  overflowX: "auto",
  position: "relative",
};

// Styles for sticky footer (pagination)
export const footerWrapperStyles: SxProps<Theme> = {
  position: "sticky",
  left: 0,
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
  zIndex: 1,
};

// Slot props for filter panel positioning
export const getSlotProps = () =>
  ({
    panel: {
      placement: "top" as const,
      sx: {
        "& .MuiDataGrid-paper": {
          // backgroundColor: "red",
          // direction: "rtl",
          width: {
            xs: "80%",
            sm: "80%",
            md: "88%",
            xl: "100%",
          },
          mx: "auto",
        },
      },
    },
    filterPanel: {
      sx: {
        "& .MuiDataGrid-filterForm": {},
        "& .MuiDataGrid-panelContent": {},
      },
    },
  } as unknown as GridSlotProps);
