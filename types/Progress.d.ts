/// <reference types="svelte" />

export interface ProgressProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["span"]> {
  /**
   * Basic example:
   *
   * <Progress progress={50} {small|large} {inline} />
   *
   * Example with multiple values:
   *
   * <Progress>
   * <span class="bg-green" style="width: 80%;" />
   * <span class="bg-purple" style="width: 14%;" />
   * <span class="bg-red" style="width: 6%;" />
   * </Progress>
   * @default 50
   */
  progress?: number;

  /**
   * @default false
   */
  large?: boolean;

  /**
   * @default false
   */
  small?: boolean;

  /**
   * @default false
   */
  inline?: boolean;
}

export default class Progress {
  $$prop_def: ProgressProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
