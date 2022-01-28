---
title: Presentational Components
type: tech
---

## Synopsis

<Haptics @element="both" @logic="no" @styled="yes" @content="yes" @structure="no" @yields="no" />

## Principles

- Are concerned with _how things look_.
- Are isolated, have no dependencies to the rest of the app.
- Aren't responsible for data loading or mutating.
- Receive data and callbacks exclusively via arguments.
- Rarely have their own state - can only be UI state.
- Render as minimal elements as possible.

## Example

Presentational components take _explicit_ and _direct_ arguments and display them, as
such they don't take object (domain objects) and display properties.

### Avatar Component

The example is an avatar component that takes an url to an image as argument and
presents it in a circle with a border.

<Tabs as |t|>
<t.Tab @label="template.hbs">
<CodeSnippet @name="components/examples/avatar/template.hbs" />
</t.Tab>

<t.Tab @label="styles.css">
<CodeSnippet @name="components/examples/avatar/styles.css" />
</t.Tab>
</Tabs>

### Usage

Invoke the component with and pass down explicitely the arguments it needs to render.

<Demo @demo="types/presentational/avatar"/>

## References

<References class="references" as |l|>
<l.BlogPost @title="Presentational and Container Components" @year="2015"
@url="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0" as |r|>
<r.Author @given="Dan" @family="Abramov" />
</l.BlogPost>

<l.Video @title="Building Better Components" @year="2019" @medium="Video
File" @series="EmberConf 2019" @url="https://www.youtube.com/watch?v=Kyd2mQpR_9c" as |r|>
<r.Author @given="Dianne" @family="Eramo" />
</l.Video>

<l.BlogPost @title="Introducing the Single Element Pattern" @year="2018"
@url="https://www.freecodecamp.org/news/introducing-the-single-element-pattern-dfbd2c295c5d/" as |r|>
<r.Author @given="Diego" @family="Haz" />
</l.BlogPost>
</References>
