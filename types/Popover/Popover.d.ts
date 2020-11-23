/// <reference types="svelte" />

export interface PopoverProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default false
   */
  open?: boolean;
}

export default class Popover {
  $$prop_def: PopoverProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
