---
title: Container Components
type: tech
---

## Synopsis

<Haptics
  @invocation="?"
  @styled="?"
  @content="?"
  @structure="?"
  @logic="?"
/>

## Also Known As

Wrapper

## Principles

Literature is fragmented, here is the summary:

- _Some_ describe it as logic only
- _Some_ describe it as a thing to structure other things on a page
- ➡️ An arbitrary group(ing)
- Application/system specific

### Dichotomies

- Stateful vs. Stateless
- Classes vs. Functions (in React)
- Pure vs. Impure

## Concrete Containers

It is far better to look at specific container component types:

- <LinkTo @route="component-architecture.types.provider">Provider</LinkTo>
- <LinkTo @route="component-architecture.types.composable">Composable</LinkTo>
- <LinkTo @route="component-architecture.types.data-entry">Data Entry</LinkTo>

## References

<References class="references" as |l|>
  <l.BlogPost
    @title="Container Components"
    @year="2015"
    @url="https://medium.com/@learnreact/container-components-c0e67432e005"
    as |r|
  >
    <r.Author @given="Michael" @family="Chan" />
  </l.BlogPost>

  <l.Video
    @title="Making your app fast with high-performance components"
    @year="2015"
    @medium="Video File"
    @series="React.js Conf 2015"
    @url="https://www.youtube.com/watch?v=KYzlpRvWZ6c&t=1351s"
    as |r|
  >
    <r.Author @given="Jason" @family="Bonta" />
  </l.Video>

  <l.BlogPost
    @title="Presentational and Container Components"
    @year="2015"
    @url="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0"
    as |r|
  >
    <r.Author @given="Dan" @family="Abramov" />
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
