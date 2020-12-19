/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ButtonMarketingProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["button"]> {
  kind?: "primary" | "outline";

  /**
   * @default false
   */
  transparent?: boolean;

  /**
   * @default false
   */
  large?: boolean;
}

export default class ButtonMarketing extends SvelteComponentTyped<
  ButtonMarketingProps,
  { click: WindowEventMap["click"] },
  { default: {} }
> {}
