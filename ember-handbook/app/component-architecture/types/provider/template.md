---
title: Provider Components
type: tech
---

## Synopsis

<Haptics @element="block" @logic="yes" @styled="no" @content="no" @structure="no"
@yields="yes" />

## Principles

- **Only** concerned with _how things work_.
- Contains logic.
- Renderless.
- Yields data and functions for further interaction.

## Example

Provider components are and invisible logic layer that provide you data and/or
methods to operate with that.

### DataManager Component

As an example, a very, very simple version of the `<DataManager>` component
Desai (2017) describes in detail is been used. It takes an arbitrary list of
items and will provide them in a sorted fashion.

<Tabs as |t|>
<t.Tab @label="template.hbs">
<CodeSnippet @name="components/examples/data-manager/template.hbs" />
</t.Tab>

<t.Tab @label="component.ts">
<CodeSnippet @name="components/examples/data-manager/component.ts" />
</t.Tab>
</Tabs>

### Usage

The `<DataManager>` is invoked and `@items` are passed in. In this case it's
declarative but can also be a variable available to the template. The yielded
`data` variable provides access to the sorted items, that are displayed in a list.

<Demo @demo="types/provider/fruits"/>

## References

<References class="references" as |l|>
<l.Video @title="Building Better Components" @year="2019" @medium="Video
File" @series="EmberConf 2019" @url="https://www.youtube.com/watch?v=Kyd2mQpR_9c" as |r|>
<r.Author @given="Dianne" @family="Eramo" />
</l.Video>

<l.BlogPost @title="Container Components" @year="2015"
@url="https://medium.com/@learnreact/container-components-c0e67432e005" as |r|>
<r.Author @given="Michael" @family="Chan" />
</l.BlogPost>

<l.Video @title="Design Considerations for a Modern Data Table" @year="2017" @medium="Video
File" @series="Meetup: San Francisco" @url="https://www.youtube.com/watch?v=M6MHWgHjoJs" as |r|>
<r.Author @given="Devendra" @family="Desai" />
</l.Video>
</References>
