/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ButtonWithCountProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
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

export default class ButtonWithCount extends SvelteComponentTyped<
  ButtonWithCountProps,
  { click: WindowEventMap["click"]; ["click:count"]: CustomEvent<any> },
  { default: {} }
> {}
