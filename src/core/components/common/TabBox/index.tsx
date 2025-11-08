// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import TabContext from "@schoolify/core/components/base/inputs/TabContext";
import TabList from "@schoolify/core/components/base/inputs/TabList";
import TabPanel from "@schoolify/core/components/base/inputs/TabPanel";
import Tab from "@schoolify/core/components/base/inputs/Tab";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// React Types
import { useLocation, useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

// Custom Types
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

  // Helpers
  const generateFullUrlPath = (key: string) => `${baseUrlPath}#${key}`;

  const foundCurrentTab = data.filter(
    (item) =>
      location.pathname + location.hash === generateFullUrlPath(item.key)
  );
  const currentTab =
    foundCurrentTab.length === 1 ? foundCurrentTab[0].key : data[0].key;

  // Handlers
  const handleChange = (_event: React.SyntheticEvent, newKey: string) => {
    navigate(generateFullUrlPath(newKey));
  };
  // Render
  return (
    <Box sx={{ width: "99%", typography: "body1", direction: "ltr", mt: 3 }}>
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
          <TabPanel key={item.key} value={item.key}>
            {item.children}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default TabBox;
