/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SubheadProps {
  /**
   * @default false
   */
  spacious?: boolean;

  /**
   * @default false
   */
  danger?: boolean;
}

export default class Subhead extends SvelteComponentTyped<
  SubheadProps,
  {},
  {
    actions: { props: { class: "Subhead-actions" } };
    description: { props: { class: "Subhead-description" } };
    heading: { props: { class: string } };
  }
> {}
