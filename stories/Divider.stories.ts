import Divider from '../src/elements/Divider.svelte';

export default {
  title: 'Elements/Divider',
  component: Divider,
  argTypes: {
    text: { control: 'text' },
    vertical: { control: 'boolean', description: 'Divider can segment content vertically.', table: { defaultValue: { summary: false }} },
    horizontal: { control: 'boolean', description: 'Divider can segment content horizontally.' },
  },
};

const Template = ({ onClick, ...args }) => ({
  Component: Divider,
  props: args,
  on: {
    click: onClick,
  },
});

export const basic = Template.bind({});
basic.args = {
  horizontal: false,
  vertical: false,
};

export const vertical = Template.bind({});
vertical.args = {
  horizontal: false,
  vertical: true,
  text: "And",
};

export const horizontal = Template.bind({});
horizontal.description = "Test";
horizontal.args = {
  horizontal: true,
  vertical: false,
  text: "Or",
};
