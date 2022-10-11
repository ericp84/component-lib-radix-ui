import React from "react";
import { styled } from "@stitches/react";
import {
  violet,
  blackA,
  mauve,
  redA,
  red,
  blueA,
  blue,
} from "@radix-ui/colors";
import {
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
} from "@radix-ui/react-icons";
import * as ToolbarPrimitive from "@radix-ui/react-toolbar";

const StyledToolbar = styled(ToolbarPrimitive.Root, {
  display: "flex",
  padding: 10,
  width: "100%",
  minWidth: "max-content",
  borderRadius: 6,
  backgroundColor: "white",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

const itemStyles = {
  all: "unset",
  flex: "0 0 auto",
  color: mauve.mauve11,
  height: 25,
  padding: "0 5px",
  borderRadius: 4,
  display: "inline-flex",
  fontSize: 13,
  lineHeight: 1,
  alignItems: "center",
  justifyContent: "center",
  "&:hover": { backgroundColor: blueA.blueA3, color: blueA.blueA11 },
  "&:focus": { position: "relative", boxShadow: `0 0 0 2px ${blueA.blueA7}` },
};

const StyledButton = styled(
  ToolbarPrimitive.Button,
  {
    ...itemStyles,
    paddingLeft: 10,
    paddingRight: 10,
    color: "white",
    backgroundColor: blueA.blueA9,
    fontFamily: "system-ui",
  },
  {
    "&:hover": {
      color: "white",
      backgroundColor: blueA.blueA11,
    },
  }
);

const StyledLink = styled(
  ToolbarPrimitive.Link,
  {
    ...itemStyles,
    backgroundColor: "transparent",
    color: blueA.blueA11,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "system-ui",
  },
  {
    "&:hover": {
      backgroundColor: "transparent",
      color: blueA.blueA9,
      cursor: "pointer",
    },
  }
);

const StyledSeparator = styled(ToolbarPrimitive.Separator, {
  width: 1,
  backgroundColor: blueA.blueA6,
  margin: "0 10px",
});

const StyledToggleGroup = styled(ToolbarPrimitive.ToggleGroup, {
  display: "inline-flex",
  borderRadius: 4,
});

const StyledToggleItem = styled(ToolbarPrimitive.ToggleItem, {
  ...itemStyles,
  boxShadow: 0,
  backgroundColor: "white",
  marginLeft: 2,
  "&:first-child": { marginLeft: 0 },
  "&[data-state=on]": {
    backgroundColor: blueA.blueA6,
    color: blueA.blueA11,
  },
});

// Exports
export const ToolBar = StyledToolbar;
export const ToolbarButton = StyledButton;
export const ToolbarSeparator = StyledSeparator;
export const ToolbarLink = StyledLink;
export const ToolbarToggleGroup = StyledToggleGroup;
export const ToolbarToggleItem = StyledToggleItem;

const Toolbar = () => (
  <ToolBar aria-label="Formatting options">
    <ToolbarToggleGroup type="multiple" aria-label="Text formatting">
      <ToolbarToggleItem value="bold" aria-label="Bold">
        <FontBoldIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="italic" aria-label="Italic">
        <FontItalicIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="strikethrough" aria-label="Strike through">
        <StrikethroughIcon />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
    <ToolbarSeparator />
    <ToolbarToggleGroup
      type="single"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToolbarToggleItem value="left" aria-label="Left aligned">
        <TextAlignLeftIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="center" aria-label="Center aligned">
        <TextAlignCenterIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="right" aria-label="Right aligned">
        <TextAlignRightIcon />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
    <ToolbarSeparator />
    <ToolbarLink href="#" target="_blank" css={{ marginRight: 10 }}>
      Edited 2 hours ago
    </ToolbarLink>
    <ToolbarButton css={{ marginLeft: "auto" }}>Share</ToolbarButton>
  </ToolBar>
);

export default Toolbar;
