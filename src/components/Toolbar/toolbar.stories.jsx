import React from "react";

import Toolbar from "./Toolbar";

export default {
  title: "ToolBar",
  component: Toolbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Toolbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Switch",
};
