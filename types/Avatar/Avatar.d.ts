/// <reference types="svelte" />

export interface AvatarProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["img"]> {
  /**
   * @default false
   */
  small?: boolean;

  /**
   * @default false
   */
  parent?: boolean;

  /**
   * @default false
   */
  child?: boolean;

  /**
   * @default 72
   */
  width?: number;

  /**
   * @default 72
   */
  height?: number;
}

export default class Avatar {
  $$prop_def: AvatarProps;
  $$slot_def: {};

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
