/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeaderProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {}

export default class Header extends SvelteComponentTyped<
  HeaderProps,
  {},
  { default: {} }
> {}
