# Progress

> [Source code](../src/Progress.svelte)

## Import

```js
import { Progress } from "svelte-primer";
```

## Usage

```jsx
<Progress />
```

## API

### Props

| Name     | Type      | Default |
| :------- | :-------- | :------ |
| progress | `number`  | `50`    |
| large    | `boolean` | `false` |
| small    | `boolean` | `false` |
| inline   | `boolean` | `false` |

`$$restProps` are passed to the top-level `span` element.

### Slots

| Name    | Default                                                 |
| :------ | :------------------------------------------------------ |
| default | `<span class="bg-green" style="width: {progress}%;" />` |

### Forwarded Events

None.

### Dispatched Events

None.

### Component Signature

```jsx
<Progress progress={Number} small={Boolean} large={Boolean} inline={Boolean}>
  <slot />
</Progress>
```
