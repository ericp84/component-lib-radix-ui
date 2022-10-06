import React from "react";

import Progress from "./progress";

export default {
  title: "Progress Bar",
  component: Progress,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Progress {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Progress Bar",
};
