/// <reference types="svelte" />

export interface ButtonGroupProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {}

export default class ButtonGroup {
  $$prop_def: ButtonGroupProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
