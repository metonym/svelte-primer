/// <reference types="svelte" />

export interface ButtonWithCountProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default "#"
   */
  href?: string;

  /**
   * @default 0
   */
  count?: number;

  /**
   * @default "#"
   */
  countHref?: string;
}

export default class ButtonWithCount {
  $$prop_def: ButtonWithCountProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: "click:count", cb: (event: CustomEvent<any>) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
