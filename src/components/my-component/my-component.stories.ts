// import {Meta, Story} from '@storybook/html'

export default {
  title: 'Components/MyComponent',
  argTypes: {
    appearance: {
      options: ['base', 'primary', 'secondary', 'warning', 'danger', 'bg-primary', 'bg-secondary', 'bg-tertiary'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    }
  }
}

const Template = args => `<my-component first="${args.first}" middle="${args.middle}" last="${args.last}" class="${args.appearance}">${args.text}</my-component>`;

export const Example = Template.bind({});

Example.args = {
  first: 'Winnie',
  middle: 'The',
  last: 'Pooh',
  text: 'A humble button',
  appearance: 'bg-green-500'
}
