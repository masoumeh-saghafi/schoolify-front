// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";

// React Types
import { type ReactNode } from "react";
import useClientDeviceType from "@schoolify/core/hooks/common/useClientDeviceType";

// Custom Types
interface SmallBoxProps {
  children: ReactNode;
}

const SmallBox=(props: SmallBoxProps)=> {
  // Props
  const { children } = props;

 

  // Hooks
  const deviceType = useClientDeviceType();
  const isMobile = deviceType === "mobile";


  // Render
  return (
    <Box
      sx={{
        width: !isMobile ? "calc(100%-300px)" : undefined,
        ml: !isMobile ? "300px" : undefined,
        
      }}
    >
      {children}
    </Box>
  );
}
export default SmallBox;
