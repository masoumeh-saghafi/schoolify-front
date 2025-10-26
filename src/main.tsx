import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "@schoolify/app/router";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@schoolify/core/style/themes/muiTheme";
import CssBaseline from "@mui/material/CssBaseline";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </CacheProvider>
  </StrictMode>
);
