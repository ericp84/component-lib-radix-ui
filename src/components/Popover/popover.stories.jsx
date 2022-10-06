import React from "react";

import PopoverDemo from "./PopoverDemo";

export default {
  title: "Popover",
  component: PopoverDemo,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <PopoverDemo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Popover",
};
