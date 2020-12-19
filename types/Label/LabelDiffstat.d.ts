/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LabelDiffstatProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["span"]> {
  /**
   * @default 3
   */
  added?: number;

  /**
   * @default 1
   */
  deleted?: number;

  /**
   * @default 1
   */
  neutral?: number;

  /**
   * @default "Diffstat title"
   */
  title?: string;
}

export default class LabelDiffstat extends SvelteComponentTyped<
  LabelDiffstatProps,
  { click: WindowEventMap["click"] },
  { added: {}; deleted: {}; size: {} }
> {}
