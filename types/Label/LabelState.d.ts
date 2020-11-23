/// <reference types="svelte" />

export interface LabelStateProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["span"]> {
  status?: "open" | "closed" | "merged";
}

export default class LabelState {
  $$prop_def: LabelStateProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
