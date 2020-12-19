# svelte-primer

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Svelte implementation of the GitHub Primer design system.

This component library implements [Primer CSS components](https://primer.style/css/components).

## Table of Contents

- [Alert](#alert)
- [Autocomplete](#autocomplete)
- [Avatar](#avatar)
- [AvatarStack](#avatarstack)
- [AvatarParentChild](#avatarparentchild)
- [Button](#button)
- [ButtonMarketing](#buttonmarketing)
- [BranchName](#branchname)
- [Breadcrumb](#breadcrumb)
- [Dropdown](#dropdown)
- [Label](#label)
- [Loader](#loader)
- [Pagination](#pagination)
- [Truncate](#truncate)
- [SelectMenu](#selectmenu)

---

## Alert

```svelte
<script>
  import { Alert } from "svelte-primer";
</script>

<Alert>Alert (default)</Alert>
<Alert full>Alert (full)</Alert>
<Alert dismissable>Alert (dismissable)</Alert>
<Alert full dismissable>Alert (full and dismissable)</Alert>

<Alert kind="success">Alert (success)</Alert>
<Alert kind="warn">Alert (warn)</Alert>
<Alert kind="error">Alert (error)</Alert>
```

## Autocomplete

```svelte
<script>
  import { Autocomplete } from "svelte-primer";
</script>

<Autocomplete.Autocomplete
  aria-label="Search by user"
  placeholder="Search by user"
>
  <Autocomplete.Item selected>GitHub Inc</Autocomplete.Item>
  <Autocomplete.Item>Hubot</Autocomplete.Item>
  <Autocomplete.Item>Monalisa Octocat</Autocomplete.Item>
</Autocomplete.Autocomplete>
```

## Avatar

```svelte
<script>
  import { Avatar } from "svelte-primer";
</script>

<Avatar
  src="https://github.com/nat.png?s=144"
  width="72"
  height="72"
  alt="nat"
/>

<Avatar
  small
  src="https://github.com/nat.png?s=64"
  width="32"
  height="32"
  alt="nat"
/>
```

## AvatarStack

```svelte
<script>
  import { AvatarStack } from "svelte-primer";
</script>

<AvatarStack>
  <Avatar alt="nat" src="https://github.com/nat.png?v=3&s=96" />
  <Avatar alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=96" />
</AvatarStack>
```

## AvatarParentChild

```svelte
<script>
  import { AvatarParentChild } from "svelte-primer";
</script>

<AvatarParentChild>
  <Avatar
    parent
    alt="jonrohan"
    src="https://github.com/jonrohan.png?s=96"
  />
  <Avatar child alt="nat" src="https://github.com/nat.png?s=40" />
</AvatarParentChild>
```

## Button

```svelte
<script>
  import { Button } from "svelte-primer";
</script>

<Button>Button</Button>
<Button disabled>Button (disabled)</Button>
<Button invisible>Button (invisible)</Button>
<Button block>Button (block)</Button>
<!-- <Button close>Button (close)</Button>
<Button expanded>Button (expanded)</Button> -->

<br />

<Button kind="primary">Button (primary)</Button>
<Button kind="danger">Button (danger)</Button>
<Button kind="outline">Button (outline)</Button>

<br />

<Button size="small">Button (small)</Button>
<Button size="large">Button (large)</Button>

<br />

<Button variant="octicon" />
<Button variant="octicon" close />
<Button variant="octicon" close kind="danger" />

<br />

<Button variant="hidden-text" />
<Button variant="hidden-text" inline />

<br />

<Button variant="link" href="#">Link</Button>
<Button variant="link-button" href="#">Link button</Button>
```

## ButtonMarketing

```svelte
<script>
  import { ButtonMarketing } from "svelte-primer";
</script>

<ButtonMarketing>Default</ButtonMarketing>
<ButtonMarketing kind="primary">Primary</ButtonMarketing>
<ButtonMarketing kind="outline">Outline</ButtonMarketing>

<ButtonMarketing large>Default large</ButtonMarketing>
<ButtonMarketing large kind="primary">Primary large</ButtonMarketing>
<ButtonMarketing large kind="outline">Outline large</ButtonMarketing>
<div class="bg-gray-dark">
  <ButtonMarketing large transparent>Transparent</ButtonMarketing>
</div>
```

## BranchName

```svelte
<script>
  import { BranchName } from "svelte-primer";
</script>

<BranchName>patch-1</BranchName>
<BranchName href="#">my-feature</BranchName>
```

## Breadcrumb

```svelte
<script>
  import { Breadcrumb } from "svelte-primer";
</script>

<Breadcrumb.Breadcrumb>
<Breadcrumb.Item>Home</Breadcrumb.Item>
<Breadcrumb.Item>Repositories</Breadcrumb.Item>
<Breadcrumb.Item current>svelte-primer</Breadcrumb.Item>
</Breadcrumb.Breadcrumb>
```

## Dropdown

```svelte
<script>
  import { Dropdown } from "svelte-primer";

  let open;
</script>

<Dropdown.Dropdown title="Dropdown menu" bind:open>
  <Dropdown.Header>Header</Dropdown.Header>
  <Dropdown.Item>Item 1</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item>Item 2</Dropdown.Item>
</Dropdown.Dropdown>

Open: {open}
```

### Dropdown (dark variant)

```svelte
<Dropdown.Dropdown dark title="Dropdown menu">
  <Dropdown.Header>Header</Dropdown.Header>
  <Dropdown.Item>Item 1</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item>Item 2</Dropdown.Item>
</Dropdown.Dropdown>
```

## Label

```svelte
<script>
  import { Label } from "svelte-primer";
</script>

<Label>Default (blue)</Label>
<Label outline>Outline</Label>
<Label color="green">Outline (green)</Label>
<Label outline color="green">green</Label>
<Label color="gray">gray</Label>
<Label color="gray-darker">gray-darker</Label>
<Label color="orange">orange</Label>
<Label color="yellow">yellow</Label>
<Label color="red">red</Label>
<Label color="purple">purple</Label>
<Label color="pink">pink</Label>
```

## Loader

```svelte
<script>
  import { Loader } from "svelte-primer";
</script>

<Loader />
```

## Pagination

```svelte
<script>
  import { Pagination } from "svelte-primer";
</script>

<Pagination.Pagination>
  <Pagination.Button href="#" kind="previous" />
  <Pagination.Button href="#" kind="next" />
</Pagination.Pagination>

<Pagination.Pagination>
  <Pagination.Button kind="previous" disabled />
  <em aria-current="page">1</em>
  <a href="#url" aria-label="Page 2">2</a>
  <span class="gap">…</span>
  <a href="#url" aria-label="Page 9">9</a>
  <a href="#url" aria-label="Page 10">10</a>
  <Pagination.Button kind="next" />
</Pagination.Pagination>
```

## Truncate

```svelte
<script>
  import { Truncate } from "svelte-primer";
</script>

<div class="col-3">
  <Truncate title="branch-name-that-is-really-long" class="border p-3">
    branch-name-that-is-really-long
  </Truncate>
</div>
```

## SelectMenu

```svelte
<script>
  import { SelectMenu } from "svelte-primer";
</script>

<SelectMenu.SelectMenu title="Menu title">
  <SelectMenu.Item>Item 1</SelectMenu.Item>
  <SelectMenu.Item>Item 2</SelectMenu.Item>
  <SelectMenu.Item>Item 3</SelectMenu.Item>
</SelectMenu.SelectMenu>
```

---

## Unsupported components

- [Popover directions](https://primer.style/css/components/popover)

- [Navigation Search filter context](https://primer.style/css/components/navigation#filter-list)

- [Autocomplete Suggester](https://primer.style/css/components/autocomplete#suggester): use the [text-expander-element](https://github.com/github/text-expander-element)

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-primer.svg?color=orange
[npm-url]: https://npmjs.com/package/svelte-primer
[build]: https://travis-ci.com/metonym/svelte-primer.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-primer
