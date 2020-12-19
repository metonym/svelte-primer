/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AvatarProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["img"]> {
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

export default class Avatar extends SvelteComponentTyped<AvatarProps, {}, {}> {}
