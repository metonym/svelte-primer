/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PopoverProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default false
   */
  open?: boolean;
}

export default class Popover extends SvelteComponentTyped<
  PopoverProps,
  {},
  { default: {} }
> {}
