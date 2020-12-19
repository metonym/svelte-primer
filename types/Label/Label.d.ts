/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LabelProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["span"]> {
  title?: string;

  /**
   * @default "blue"
   */
  color?:
    | "blue"
    | "green"
    | "gray"
    | "gray-darker"
    | "orange"
    | "yellow"
    | "red"
    | "purple"
    | "pink";

  /**
   * @default false
   */
  outline?: boolean;
}

export default class Label extends SvelteComponentTyped<
  LabelProps,
  { click: WindowEventMap["click"] },
  { default: {} }
> {}
