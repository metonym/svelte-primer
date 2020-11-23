/// <reference types="svelte" />

export interface LabelProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["span"]> {
  title?: string;

  /**
   * @default "blue"
   */
  color?: "blue" | "green" | "gray" | "gray-darker" | "orange";

  /**
   * @default false
   */
  outline?: boolean;
}

export default class Label {
  $$prop_def: LabelProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
