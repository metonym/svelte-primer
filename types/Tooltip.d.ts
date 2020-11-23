/// <reference types="svelte" />

export interface TooltipProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["span"]> {
  /**
   * @default "Tooltip text"
   */
  text?: string;

  /**
   * @default "n"
   */
  direction?: "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "nw";

  align?: "left" | "right";

  /**
   * @default 1
   */
  alignIndent?: 1 | 2;

  /**
   * @default false
   */
  noDelay?: boolean;

  /**
   * @default false
   */
  multiline?: boolean;
}

export default class Tooltip {
  $$prop_def: TooltipProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
