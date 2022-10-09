import React from "react";
import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";
import * as ProgressPrimitive from "@radix-ui/react-progress";

const StyledProgress = styled(ProgressPrimitive.Root, {
  position: "relative",
  overflow: "hidden",
  background: blackA.blackA4,
  boxShadow: "0px 0px 10px 2px blue",
  borderRadius: "100px",
  width: 300,
  height: 25,
  transform: "translateZ(0)",
});
const StyledIndicator = styled(ProgressPrimitive.Indicator, {
  backgroundColor: "purple",
  width: "100%",
  height: "100%",
  transition: "transform 2500ms cubic-bezier(0.1, 0, 0.35, 1)",
});

export const Progress = StyledProgress;
export const ProgressIndicator = StyledIndicator;

const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => setProgress(25), 500);
    setTimeout(() => setProgress(50), 550);
    setTimeout(() => setProgress(75), 600);
    setTimeout(() => setProgress(80), 650);
    setTimeout(() => setProgress(85), 700);
    setTimeout(() => setProgress(100), 750);
    return () => clearTimeout();
  }, []);

  return (
    <Progress value={66}>
      <ProgressIndicator
        style={{
          transform: `translateX(-${100 - progress}%)`,
        }}
      />
    </Progress>
  );
};

export default ProgressDemo;
