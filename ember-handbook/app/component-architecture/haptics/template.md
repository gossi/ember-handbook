---
title: Haptics
---

## Invocation

The element can either be written as _inline_ or _block_,
some components allow both. A block level element offers more freedom to
control the contents inside.

### Inline

The shortest form to invoke a component and pass in arguments.

```hbs
<Button @label="Inline" />
```

### Block

Block invocation to pass in arguments and a _block_ to have fine control over
our contents in regards to our semantic structure.

```hbs
<Button>Block</Button>
```

### Mixed

Best of both worlds, but watch out for this:

```hbs
<Button @label="What the heck">
  Is going on?
</Button>
```

## Content

Does the component _visibly_ show contents? Likely in the form of interactive
element(s) and/or displaying data.

## Styled

Whether visuals are applied or not to make the content look
beautiful.

When styling is applied, is it _safely_ styled intrinsically? Does it leak styling?
Will it cause side-effects to the layout I'm putting this component in?

## Structure

The component uses elements to structure and organize its children, but
its own content is _invisible_. Do I have to be careful when placing children
inside? Will the component have plan for the layout of children?

## Blocks and Yields

The component is replying with buildings blocks, acting as a construction
kit, to further build up the contents inside the block-level component.
Oftentimes the yielded elements are already linked with parent component and
provide a communication bridge.

## Logic

The intelligence level of a component: smart or dumb?
