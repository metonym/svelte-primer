/// <reference types="svelte" />

export interface CircleBadgeProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["a"]> {
  /**
   * @default "small"
   */
  size?: "small" | "medium" | "large";

  href?: undefined;
}

export default class CircleBadge {
  $$prop_def: CircleBadgeProps;
  $$slot_def: {
    default: { props: { class: "CircleBadge-icon" } };
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
