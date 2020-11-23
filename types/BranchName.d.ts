/// <reference types="svelte" />

export interface BranchNameProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["a"]> {
  href?: string;
}

export default class BranchName {
  $$prop_def: BranchNameProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
