/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ButtonGroupProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {}

export default class ButtonGroup extends SvelteComponentTyped<
  ButtonGroupProps,
  {},
  { default: {} }
> {}
