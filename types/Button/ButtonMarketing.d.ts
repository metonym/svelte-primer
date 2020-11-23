/// <reference types="svelte" />

export interface ButtonMarketingProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["button"]> {
  /**
   * @default "button"
   */
  type?: string;

  kind?: "primary" | "outline";

  /**
   * @default false
   */
  transparent?: boolean;

  /**
   * @default false
   */
  large?: boolean;
}

export default class ButtonMarketing {
  $$prop_def: ButtonMarketingProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
