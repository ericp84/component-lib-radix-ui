import React from "react";

import Switch from "./Switch";

export default {
  title: "Switch",
  component: Switch,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Switch",
};

export const Secondary = Template.bind({});
Secondary.args = {
  Secondary: true,
  label: "Switch secondary",
  colorDark: "grey",
  colorLight: "orange",
};
