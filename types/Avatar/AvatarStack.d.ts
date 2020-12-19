/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

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

export default class AvatarStack extends SvelteComponentTyped<
  AvatarStackProps,
  {},
  { default: {} }
> {}
