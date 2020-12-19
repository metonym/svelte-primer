/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LabelIssueProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["span"]> {
  /**
   * @default "Label: title"
   */
  title?: string;

  /**
   * @default "blue"
   */
  color?: "blue" | "green" | "red" | string;
}

export default class LabelIssue extends SvelteComponentTyped<
  LabelIssueProps,
  { click: WindowEventMap["click"] },
  { default: {} }
> {}
