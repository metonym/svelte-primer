/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BoxProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
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

export default class Box extends SvelteComponentTyped<
  BoxProps,
  {},
  { default: {} }
> {}
