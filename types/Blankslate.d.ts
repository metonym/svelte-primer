/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BlankslateProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
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

export default class Blankslate extends SvelteComponentTyped<
  BlankslateProps,
  {},
  { default: {} }
> {}
