/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ButtonProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["button"]> {
  /**
   * @default "button"
   */
  type?: string;

  /**
   * @default "button"
   */
  variant?: "button" | "link-button" | "link" | "octicon" | "hidden-text";

  /**
   * @default "#"
   */
  href?: string;

  size?: "small" | "large";

  kind?: "primary" | "danger" | "outline";

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default false
   */
  block?: boolean;

  /**
   * @default false
   */
  invisible?: boolean;

  /**
   * @default false
   */
  close?: boolean;

  /**
   * @default false
   */
  expanded?: boolean;

  /**
   * @default false
   */
  inline?: boolean;
}

export default class Button extends SvelteComponentTyped<
  ButtonProps,
  { click: WindowEventMap["click"] },
  { default: {} }
> {}
