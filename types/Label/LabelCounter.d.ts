/// <reference types="svelte" />

export interface LabelCounterProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["span"]> {
  color?: "gray" | "gray-light";
}

export default class LabelCounter {
  $$prop_def: LabelCounterProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
