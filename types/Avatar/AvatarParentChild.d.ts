/// <reference types="svelte" />

export interface AvatarParentChildProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {}

export default class AvatarParentChild {
  $$prop_def: AvatarParentChildProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
