/// <reference types="svelte" />

export interface BlankslateProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  size?: "narrow" | "spacious";

  /**
   * @default false
   */
  large?: boolean;

  /**
   * @default false
   */
  capped?: boolean;

  /**
   * @default false
   */
  bordered?: boolean;
}

export default class Blankslate {
  $$prop_def: BlankslateProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
