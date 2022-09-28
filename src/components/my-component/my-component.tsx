import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

interface MyComponentI {
  first: string;
  middle: string;
  last: string;
  appearance: string;
}

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent implements MyComponentI {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * The class
   */
   @Prop() appearance: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div class={this.appearance}>Hello, World! I'm {this.getText()}</div>;
  }
}
