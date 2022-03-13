---
title: Data Entry Components
type: tech
---

Collector & entry are a nice tandem to enter and collect data in a declarative way.

## Synopsis

<Haptics::Matrix as |Item|>
  <Item
    @invocation="block"
    @styled="yes"
    @content="yes"
    @structure="yes"
    @logic="yes"
  >
    Collector
  </Item>
  <Item
    @invocation="inline"
    @styled="no"
    @content="no"
    @structure="no"
    @logic="no"
  >
    Entry
  </Item>
</Haptics::Matrix>

## Principles

- Collector acquires data
- Collector yields entry components
- Entry component for declarative data input
- Collector can yield and/or display data
- Data up instead of down

## Example

The `<LeafletMap>` by `ember-leaflet` addon is a very nice example of a data entry
component type.

### Usage

<Demo @demo="types/data-entry/map"/>
