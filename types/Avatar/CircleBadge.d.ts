/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CircleBadgeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["a"]> {
  /**
   * @default "small"
   */
  size?: "small" | "medium" | "large";

  href?: undefined;
}

export default class CircleBadge extends SvelteComponentTyped<
  CircleBadgeProps,
  { click: WindowEventMap["click"] },
  { default: { props: { class: "CircleBadge-icon" } } }
> {}
