/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DashedConnectionProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default "Title"
   */
  title?: string;
}

export default class DashedConnection extends SvelteComponentTyped<
  DashedConnectionProps,
  {},
  { default: {} }
> {}
