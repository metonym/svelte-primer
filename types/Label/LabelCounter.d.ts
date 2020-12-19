/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LabelCounterProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["span"]> {
  color?: "gray" | "gray-light";
}

export default class LabelCounter extends SvelteComponentTyped<
  LabelCounterProps,
  { click: WindowEventMap["click"] },
  { default: {} }
> {}
