<script>
  import {
    Box,
    LabelCounter,
    LabelDiffstat,
    LabelState,
    LabelIssue,
    Breadcrumb,
    Dropdown,
    Button,
    ButtonWithCount,
    Avatar,
    Alert,
    Navigation,
    Loader,
    Label,
    Tooltip,
    Truncate,
    SelectMenu,
    Toast,
    Timeline,
    Subhead,
    BoxOverlay,
    DashedConnection,
    CircleBadge,
    AvatarParentChild,
    AvatarStack
  } from "svelte-primer";
  import { Pencil, Tools, Eye, Flame, GitCommit } from "svelte-octicons";
</script>

<svelte:head>
  <title>svelte-primer</title>
</svelte:head>

<Box.Box theme="blue">
  <Box.Header>
    <Box.Title>Box title</Box.Title>
  </Box.Header>
  <Alert full kind="success" dismissable>Success message</Alert>
  <Box.Body>
    <strong class="pr-2">Box body</strong>
    <Box.IconButton
      on:click={() => {
        console.log('click');
      }}>
      <Pencil />
    </Box.IconButton>
  </Box.Body>
  <Box.Rows>
    <Box.Row unread>Box row one</Box.Row>
    <Box.Row theme="hover-blue">Box row two (hover-blue)</Box.Row>
    <Box.Row>
      Box row three
      <Box.RowLink href="/">Box row link</Box.RowLink>
    </Box.Row>
  </Box.Rows>
  <Box.Footer>Box footer</Box.Footer>
</Box.Box>

<Timeline.Item>
  <div slot="badge">
    <Timeline.Badge href="#heading-1">
      <Flame />
    </Timeline.Badge>
  </div>
  <a href="/" class="text-bold link-gray-dark mr-1">Monalisa</a>
  created one
  <a href="/" class="text-bold link-gray-dark">hot potato</a>
  <a href="/" class="link-gray">Just now</a>
</Timeline.Item>
<Timeline.Item>
  <div slot="avatar">
    <Timeline.Avatar>
      <Avatar
        height={40}
        width={40}
        alt="jonrohan"
        src="https://github.com/jonrohan.png?v=3&s=96" />
    </Timeline.Avatar>
  </div>
  <div slot="badge">
    <Timeline.Badge>
      <Flame />
    </Timeline.Badge>
  </div>
  <a href="/" class="text-bold link-gray-dark mr-1">Monalisa</a>
  created one
  <a href="/" class="text-bold link-gray-dark">hot potato</a>
  <a href="/" class="link-gray">Just now</a>
</Timeline.Item>
<Timeline.Item>
  <div slot="badge">
    <Timeline.Badge>
      <Flame />
    </Timeline.Badge>
  </div>
  <a href="/" class="text-bold link-gray-dark mr-1">Monalisa</a>
  created one
  <a href="/" class="text-bold link-gray-dark">hot potato</a>
  <a href="/" class="link-gray">Just now</a>
</Timeline.Item>
<Timeline.Item condensed>
  <div slot="badge">
    <Timeline.Badge>
      <GitCommit />
    </Timeline.Badge>
  </div>
  This is the message of a condensed TimelineItem
</Timeline.Item>

<AvatarParentChild>
  <Avatar
    parent
    alt="jonrohan"
    src="https://github.com/jonrohan.png?v=3&s=96" />
  <Avatar child alt="josh" src="https://github.com/josh.png?v=3&s=40" />
</AvatarParentChild>

<AvatarStack>
  <Avatar alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=96" />
  <Avatar alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=96" />
</AvatarStack>

<Breadcrumb.Breadcrumb>
  <Breadcrumb.Item>One</Breadcrumb.Item>
  <Breadcrumb.Item>Two</Breadcrumb.Item>
  <Breadcrumb.Item current>Three</Breadcrumb.Item>
</Breadcrumb.Breadcrumb>

<Dropdown.Dropdown title="Dropdown menu" dark>
  <Dropdown.Header>Header</Dropdown.Header>
  <Dropdown.Item>one</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item>two</Dropdown.Item>
</Dropdown.Dropdown>

<DashedConnection>
  <li>
    <CircleBadge>1</CircleBadge>
  </li>
  <li>
    <CircleBadge>2</CircleBadge>
  </li>
</DashedConnection>
<BoxOverlay size="wide">1</BoxOverlay>
<div>
  <Label color="green">green outlined label</Label>
  <LabelIssue title="Label: good first issue" color="green">
    good first issue
  </LabelIssue>
  <LabelState />
  <LabelState status="open" />
  <LabelState status="closed" />
  <LabelState status="merged" />
  <LabelDiffstat added={2} deleted={2}>
    <span slot="size">6</span>
  </LabelDiffstat>
  <LabelDiffstat>
    17
    <span slot="added">+6</span>
    <span slot="deleted">-1</span>
  </LabelDiffstat>
</div>
<p>
  Some text.
  <Button type="hidden-text" inline />
</p>

<ButtonWithCount href="#url" countHref="#url" count={5}>
  <Eye />
  <span>Watch</span>
</ButtonWithCount>

<Button type="octicon" close />

<button class="btn-link" type="button">Link button</button>

<button class="btn btn-large btn-primary mr-2" type="button">
  Large button
</button>

<Avatar
  alt="jonrohan"
  src="https://github.com/jonrohan.png?v=3&s=144"
  width="72"
  height="72" />

<Avatar
  small
  alt="jonrohan"
  src="https://github.com/jonrohan.png?v=3&s=64"
  width="32"
  height="32" />

<Alert kind="success" dismissable>Content</Alert>

<Subhead danger>
  <div slot="heading" let:props {...props}>Subhead with button</div>
  <div slot="actions" let:props {...props}>
    <a href="#url">Learn more</a>
  </div>
</Subhead>

<Subhead>
  <div slot="heading" let:props {...props}>Subhead with button</div>
  <div slot="actions" let:props {...props}>
    <a href="#url" class="btn btn-sm btn-primary" role="button">Action</a>
  </div>
</Subhead>

<Toast kind="success" dismissable>Content</Toast>

<Loader />

<Label>Label 1</Label>

<Navigation.Menu>
  <Navigation.MenuItem current>Link 1</Navigation.MenuItem>
  <Navigation.MenuItem>
    <Tools />
    Link 2
  </Navigation.MenuItem>
</Navigation.Menu>

<LabelCounter>16</LabelCounter>

<Tooltip
  direction="nw"
  text="This is the tooltip with multiple lines. This is the tooltip with
  multiple lines."
  align="right"
  noDelay>
  Item
</Tooltip>

<SelectMenu.SelectMenu>
  <SelectMenu.Item>Item 1</SelectMenu.Item>
  <SelectMenu.Item>Item 2</SelectMenu.Item>
  <SelectMenu.Item>Item 3</SelectMenu.Item>
</SelectMenu.SelectMenu>

<div class="col-3">
  <Truncate title="branch-name-that-is-really-long" class="border p-3">
    branch-name-that-is-really-long
  </Truncate>
</div>

<div class="Subhead">
  <div class="Subhead-heading">Plain subhead</div>
</div>
