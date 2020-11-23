/// <reference types="svelte" />

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

export default class Subhead {
  $$prop_def: SubheadProps;
  $$slot_def: {
    actions: { props: { class: "Subhead-actions" } };
    description: { props: { class: "Subhead-description" } };
    heading: { props: { class: string } };
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
