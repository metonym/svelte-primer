/// <reference types="svelte" />

export interface BoxProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  border?: undefined | "dashed";

  /**
   * @default false
   */
  condensed?: boolean;

  /**
   * @default false
   */
  spacious?: boolean;

  theme?: "blue" | "danger";
}

export default class Box {
  $$prop_def: BoxProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
