# Branch Name

> [Source code](../src/BranchName.svelte)

## Import

```js
import { BranchName } from "svelte-primer";
```

## Usage

### Read-only

```jsx
<BranchName>a_new_feature_branch</BranchName>
```

### Link

```jsx
<BranchName href="/#a_new-feature_branch">a_new_feature_branch</BranchName>
```

## API

### Props

| Name | Type     | Default     |
| :--- | :------- | :---------- |
| href | `string` | `undefined` |

### `$$restProps`

Forwarded to the top-level element.

### Slots

| Name    | Default     |
| :------ | :---------- |
| default | `undefined` |

### Forwarded Events

| Event    | `e.detail`  |
| :------- | :---------- |
| on:click | `undefined` |

### Lifecycle Events

None.

## Kitchen Sink Shorthand Notation

```jsx
<BranchName href="#">
  <slot />
</BranchName>
```
