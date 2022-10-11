import React from "react";

import Toast from "./Toast";

export default {
  title: "Toast",
  component: Toast,
  argTypes: {
    color: {
      options: ["violet", "green"],
      control: {
        type: "radio",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Toast {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Switch",
};
