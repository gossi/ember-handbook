---
title: Invocation
---

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
