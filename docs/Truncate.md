# Truncate

> [Source code](../src/Truncate.svelte)

## Import

```js
import { Truncate } from "svelte-primer";
```

## Usage

```jsx
<Truncate title="branch-name-that-is-really-long">
  branch-name-that-is-really-long
</Truncate>
```

## API

### Props

| Name  | Type      | Default |
| :---- | :-------- | :------ |
| fixed | `boolean` | `false` |

`$$restProps` are passed to the top-level `div` element.

### Slots

| Name    | Default     |
| :------ | :---------- |
| default | `undefined` |

### Forwarded Events

None.

### Dispatched Events

None.

### Component Signature

```jsx
<Truncate fixed={Boolean}>
  <slot />
</Truncate>
```
