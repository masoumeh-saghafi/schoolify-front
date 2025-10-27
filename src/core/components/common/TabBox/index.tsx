import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";

import Box from "@schoolify/core/components/base/inputs/Box";
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import type { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export interface TabBoxDataProps {
  label: string;
  key: string;
  children: ReactNode;
  minWidth?: number;
}

interface TabBoxProps {
  data: TabBoxDataProps[];
  baseUrlPath: string;
}

const TabBox = (props: TabBoxProps) => {
  // Props
  const { data, baseUrlPath } = props;

  // Hooks
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useAppTheme();

  const generateFullUrlPath = (key: string) => `${baseUrlPath}/${key}`;

  // مقدار فعلی تب بر اساس مسیر
  const foundCurrentTab = data.filter(
    (item) => location.pathname === generateFullUrlPath(item.key)
  );
  const currentTab =
    foundCurrentTab.length === 1 ? foundCurrentTab[0].key : data[0].key;

  const handleChange = (_event: React.SyntheticEvent, newKey: string) => {
    navigate(generateFullUrlPath(newKey));
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", direction: "ltr" }}>
      <TabContext value={currentTab}>
        <Box
          sx={{
            backgroundColor: theme.palette.background.paper,
            borderRadius: 2,
            overflowX: "auto",
            whiteSpace: "nowrap",
            scrollbarWidth: "thin", // for Firefox
            "&::-webkit-scrollbar": { height: 4 }, // for Chrome
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#ccc",
              borderRadius: 2,
            },
          }}
        >
          <TabList
            onChange={handleChange}
            slotProps={{ indicator: { style: { display: "none" } } }}
            sx={{
              display: "inline-flex", // important to stay in scrollable inline mode
              color: theme.palette.text.title,
              minWidth: "max-content",
            }}
            textColor="inherit"
          >
            {data.map((item) => (
              <Tab
                label={item.label}
                value={item.key}
                sx={{ minWidth: item.minWidth || 120 }}
              />
            ))}
          </TabList>
        </Box>

        {data.map((item) => (
          <TabPanel value={item.key}>{item.children}</TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default TabBox;
