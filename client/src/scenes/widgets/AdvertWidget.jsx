import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Quote of the day
        </Typography>
        <Typography color={medium}>Morning Vibe</Typography>
      </FlexBetween>
      
      <FlexBetween>
        <Typography color={main}>Accume</Typography>
        <Typography color={medium}>Accume.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Social media is not just about sharing content, it’s about sharing experiences and building relationships.
      </Typography>
      <FlexBetween>
        <Typography color={medium}>
          
        </Typography><Typography color={medium}>
          -Brian Solis
        </Typography>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
