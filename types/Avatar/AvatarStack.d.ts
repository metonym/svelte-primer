/// <reference types="svelte" />

export interface AvatarStackProps {
  /**
   * @default "Avatar stack title"
   */
  title?: string;

  /**
   * @default "left"
   */
  align?: "left" | "right";
}

export default class AvatarStack {
  $$prop_def: AvatarStackProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
