/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DropdownProps {
  /**
   * @default "Dropdown"
   */
  title?: string;

  /**
   * @default "se"
   */
  direction?: "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "nw";

  /**
   * @default false
   */
  dark?: boolean;

  /**
   * @default false
   */
  open?: boolean;
}

export default class Dropdown extends SvelteComponentTyped<
  DropdownProps,
  {},
  { default: {} }
> {}
