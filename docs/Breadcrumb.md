# Breadcrumb

> [Source code](../src/Breadcrumb)

## Import

```js
import { Breadcrumb } from "svelte-primer";
```

## Usage

```jsx
<Breadcrumb.Breadcrumb>
  <Breadcrumb.Item>One</Breadcrumb.Item>
  <Breadcrumb.Item>Two</Breadcrumb.Item>
  <Breadcrumb.Item current>Three</Breadcrumb.Item>
</Breadcrumb.Breadcrumb>
```

## API

### `Breadcrumb.Breadcrumb`

#### Props

None.

#### Slots

| Name    | Default     |
| :------ | :---------- |
| default | `undefined` |

#### Forwarded Events

None

#### Dispatched Events

None.

#### Component Signature

```jsx
<Breadcrumb.Breadcrumb>
  <slot />
</Breadcrumb.Breadcrumb>
```

### `Breadcrumb.Item`

#### Props

| Name    | Type      | Default |
| :------ | :-------- | :------ |
| current | `boolean` | `false` |
| href    | `string`  | `"#"`   |

If `current={true}`, `$$restProps` are passed to the top-level `li` element. If `false`, `$$restProps` is passed to the `a` element.

#### Slots

| Name    | Default     |
| :------ | :---------- |
| default | `undefined` |

#### Forwarded Events

- on:click

#### Dispatched Events

None.

#### Component Signature

```jsx
<Breadcrumb.Item current={Boolean} href={String}>
  <slot />
</Breadcrumb.Item>
```
