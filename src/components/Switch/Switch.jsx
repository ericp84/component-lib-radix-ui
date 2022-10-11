import React from "react";
import { styled } from "@stitches/react";
import { blackA, yellowA } from "@radix-ui/colors";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: "unset",
  width: 42,
  height: 25,
  backgroundColor: yellowA.yellowA10,
  borderRadius: "100px",
  position: "relative",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  "&:focus": { boxShadow: `0 0 0 2px white` },
  '&[data-state="checked"]': { backgroundColor: "grey" },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: "block",
  width: 21,
  height: 21,
  backgroundColor: "white",
  borderRadius: "100px",
  boxShadow: `0 2px 2px ${blackA.blackA7}`,
  transition: "transform 100ms",
  transform: "translateX(2px)",
  willChange: "transform",
  '&[data-state="checked"]': { transform: "translateX(19px)" },
});

export const SwitchButton = StyledSwitch;
export const SwitchThumb = StyledThumb;

const Flex = styled("div", { display: "flex" });
const Label = styled("label", {
  color: "black",
  fontFamily: "system-ui",
  fontSize: 15,
  lineHeight: 1,
  userSelect: "none",
});

const Switch = ({ colorDark, colorLight }) => (
  <form>
    <Flex css={{ alignItems: "center" }}>
      <Label htmlFor="s1" css={{ paddingRight: 15 }}>
        <SunIcon color={colorLight || yellowA.yellowA11} />
      </Label>
      <SwitchButton defaultChecked id="s1">
        <SwitchThumb />
      </SwitchButton>
      <Label htmlFor="s1" css={{ paddingLeft: 15 }}>
        <MoonIcon color={colorDark || "purple"} />
      </Label>
    </Flex>
  </form>
);

export default Switch;
