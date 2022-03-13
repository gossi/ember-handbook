---
title: Composable Components
type: tech
---

## Synopsis

<Haptics
  @invocation="both"
  @styled="optional"
  @content="optional"
  @structure="optional"
  @logic="yes"
/>

## Also Known As

High(er)-Order Components (hoc), Contextual Components

> A higher-order component is just a function that takes an existing component
> and returns another component that wraps it.
>
> <cite>Abramov, D. (2015a)</cite>

## Patterns

Combine with:

- <LinkTo @route="component-architecture.patterns.strategy">Strategy Pattern</LinkTo>
- <LinkTo @route="component-architecture.patterns.builder">Builder Pattern</LinkTo>
- <LinkTo @route="component-architecture.patterns.facade">Facade Pattern</LinkTo>

## Principles

- Are concerned with _how things are connected_.
- May contain both presentational and container components inside but usually
  don’t have any DOM markup of their own except for some wrapping divs, and
  never have any styles.
- Provide the data and behavior to presentational or other container components or yields it.
- Yields components to compose them your own way.

## Usages

- **Composite** (inline/block): Connects internal components together
- **Kit** (block only): Yields a construction kit
- **Chameleon**:
  - Inline (Composite) - sensible default
  - Block (Kit) - customizer kit

## Example

To demonstrate, the `<Toggle>`
example from Camba (2017) is been used. His talk is highly recommend to watch!

### Toggle Component

The toggle component consists of a label and switch component. See the folder
structure for more information:

```txt
toggle/
  label/
    template.hbs
  switch/
    template.hbs
  component.ts
  template.hbs
```

And the code for each file:

<Tabs as |t|>
  <t.Tab @label="template.hbs">
    <CodeSnippet @name="components/examples/toggle/template.hbs" />
  </t.Tab>

  <t.Tab @label="component.ts">
    <CodeSnippet @name="components/examples/toggle/component.ts" />
  </t.Tab>

  <t.Tab @label="label/template.hbs">
    <CodeSnippet @name="components/examples/toggle/label/index.hbs" />
  </t.Tab>

  <t.Tab @label="switch/template.hbs">
    <CodeSnippet @name="components/examples/toggle/switch/index.hbs" />
  </t.Tab>
</Tabs>

### Usage

Contextual components allow a variety of usages. They are showcased and
explained in this section.

#### With Sensible Defaults

Using a component inline is its bare usage and applies the most default
assumptions of the component author.

<Demo @demo="types/composable/toggle/default"/>

#### With Block Customization

Block usage let you modify the _main_ part of the component.

<Demo @demo="types/composable/toggle/block-customization"/>

#### As Kit

At this point, the component turns into a
<LinkTo @route="component-architecture.types.provider">provider
component</LinkTo>. By yielding blocks you can
<LinkTo @route="component-architecture.patterns.builder">build
</LinkTo> the UI yourself but the contextual component keeps the logic.

<Demo @demo="types/composable/toggle/builder"/>

#### Parametrized with Custom Replacements

For more customizations use the <LinkTo
@route="component-architecture.patterns.decorator">decorator pattern</LinkTo> to
wrap the original component (or create a new one) and
pass that component as an argument into the contextual component as its <LinkTo
@route="component-architecture.patterns.strategy">strategy</LinkTo>. It will now
yield your own component but connected to the logic of the contextual component.

<Tabs as |t|>
  <t.Tab @label="fancy-label/template.hbs">
    <CodeSnippet @name="components/examples/fancy-label/template.hbs" />
  </t.Tab>
</Tabs>

Put into the example:

<Demo @demo="types/composable/toggle/parametrized"/>

## References

<References class="references" as |l|>
  <l.BlogPost
    @title="Presentational and Container Components"
    @year="2015"
    @url="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0"
    as |r|
  >
    <r.Author @given="Dan" @family="Abramov" />
  </l.BlogPost>

  <l.BlogPost
    @title="Mixins Are Dead. Long Live Composition"
    @year="2015"
    @url="https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750"
    as |r|
  >
    <r.Author @given="Dan" @family="Abramov" />
  </l.BlogPost>

  <l.Video
    @title="Composable Components"
    @year="2015"
    @medium="Video File"
    @series="EmberCamp London 2015"
    @url="https://www.youtube.com/watch?v=6N4qsO22fmw"
    as |r|
  >
    <r.Author @given="Miguel" @family="Camba" />
  </l.Video>

  <l.Video
    @title="Higher Order Components"
    @year="2017"
    @medium="Video File"
    @series="EmberConf 2017"
    @url="https://www.youtube.com/watch?v=MpFudGJn2J0"
    as |r|
  >
    <r.Author @given="Miguel" @family="Camba" />
  </l.Video>

  <l.Video
    @title="Building Better Components"
    @year="2019"
    @medium="Video File"
    @series="EmberConf 2019"
    @url="https://www.youtube.com/watch?v=Kyd2mQpR_9c"
    as |r|
  >
    <r.Author @given="Dianne" @family="Eramo" />
  </l.Video>

  <l.BlogPost
    @title="Higher-Order Components in Ember.js"
    @year="2018"
    @url="https://v4.chriskrycho.com/2018/higher-order-components-in-emberjs.html"
    as |r|
  >
    <r.Author @given="Chris" @family="Krycho" />
  </l.BlogPost>

  <l.BlogPost
    @title="Components patterns in Ember.js"
    @year="2018"
    @url="https://medium.com/macsour/components-patterns-in-ember-js-5e6fc6eea28f"
    as |r|
  >
    <r.Author @given="Maciej" @family="Kwaśniak" />
  </l.BlogPost>
</References>
