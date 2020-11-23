/// <reference types="svelte" />

export interface HeaderProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {}

export default class Header {
  $$prop_def: HeaderProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
