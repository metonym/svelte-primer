/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AlertProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default false
   */
  full?: boolean;

  /**
   * @default false
   */
  banner?: boolean;

  kind?: "success" | "warn" | "error";

  /**
   * @default false
   */
  dismissable?: boolean;
}

export default class Alert extends SvelteComponentTyped<
  AlertProps,
  { dismiss: CustomEvent<any> },
  { default: {} }
> {}
