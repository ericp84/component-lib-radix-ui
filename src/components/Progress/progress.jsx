import React from "react";
import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";
import * as ProgressPrimitive from "@radix-ui/react-progress";

const StyledProgress = styled(ProgressPrimitive.Root, {
  position: "relative",
  overflow: "hidden",
  background: blackA.blackA4,
  boxShadow: "1px 1px 50px 10px #81FBB8",
  borderRadius: "99999px",
  width: 300,
  height: 25,
  transform: "translateZ(0)",
});

const StyledIndicator = styled(ProgressPrimitive.Indicator, {
  backgroundColor: "#28C76F",
  width: "100%",
  height: "100%",
  transition: "transform 660ms cubic-bezier(0.65, 0, 0.35, 1)",
});

export const Progress = StyledProgress;
export const ProgressIndicator = StyledIndicator;

const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(25), 500);
    const timer2 = setTimeout(() => setProgress(50), 1200);
    const timer3 = setTimeout(() => setProgress(25), 1900);
    const timer4 = setTimeout(() => setProgress(75), 2600);
    return () => clearTimeout(timer4);
  }, []);

  return (
    <Progress value={66}>
      <ProgressIndicator
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress>
  );
};

export default ProgressDemo;
