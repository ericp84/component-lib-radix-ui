import React from "react";

import Toast from "./Toast";

export default {
  title: "Toast",
  component: Toast,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Toast {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Switch",
  size: "small",
};
