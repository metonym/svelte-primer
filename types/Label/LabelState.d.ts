/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LabelStateProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["span"]> {
  status?: "open" | "closed" | "merged";
}

export default class LabelState extends SvelteComponentTyped<
  LabelStateProps,
  { click: WindowEventMap["click"] },
  { default: {} }
> {}
