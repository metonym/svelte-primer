/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ToastProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  kind?: "success" | "warning" | "error";

  /**
   * @default false
   */
  loading?: boolean;

  /**
   * @default false
   */
  dismissable?: boolean;
}

export default class Toast extends SvelteComponentTyped<
  ToastProps,
  { dismiss: CustomEvent<any> },
  { default: {} }
> {}
