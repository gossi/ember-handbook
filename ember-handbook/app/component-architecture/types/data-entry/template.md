---
title: Data Entry Components
type: tech
---

Harvester & feeder are a nice tandem to enter and collect data in a declarative way.

## Synopsis

<TypeMatrix as |Item|>
<Item @logic="yes" @styled="no" @content="optional" @structure="yes" @yields="yes" @element="block">
Harvester
</Item>
<Item @logic="no" @styled="no" @content="no" @structure="no" @yields="no" @element="inline">
Feeder
</Item>
</TypeMatrix>

## Principles

- Harvester is a collector of data.
- Harvester yields feeder components.
- Feeder are components for data input.
- Data input the declarative way.
- Harvester can yield the data or display them.
- Data up instead of down.

## Example

To demontrate this a component that wraps the network of
[visjs.org](https://visjs.org) will be used to draw a
sitemap of this section.

### VisNetwork Component

The `<VisNetwork>` component is the harvester component and yields `<Node>` and
`<Edge>` as feeder components for data input.

### Usage

<Demo @demo="types/data-entry/map"/>
