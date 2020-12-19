/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BranchNameProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["a"]> {
  href?: string;
}

export default class BranchName extends SvelteComponentTyped<
  BranchNameProps,
  { click: WindowEventMap["click"] },
  { default: {} }
> {}
