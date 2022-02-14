---
title: Component Types
type: tech
---

Component Types indicate to a consumer _how to interact_ with them from the
_outside_ and signal the _mechanics_ to plug and play
them together.

## Overview

Given that traits, there have been a few component types crystallized. The
following table lists them and maps their characteristics to the explained traits.

<Haptics::Matrix @title="Name" as |Item|>
<Item @logic="no" @styled="yes" @content="yes" @structure="no" @yields="no" @element="both">
<LinkTo @route="component-architecture.types.presentational">Presentational</LinkTo>
</Item>
<Item @logic="no" @styled="no" @content="no" @structure="yes" @yields="optional" @element="block">
<LinkTo @route="component-architecture.types.container">Container</LinkTo>
</Item>
<Item @logic="yes" @styled="no" @content="no" @structure="no" @yields="yes" @element="block">
<LinkTo @route="component-architecture.types.provider">Provider</LinkTo>
</Item>

<Item @logic="yes" @styled="optional" @content="optional" @structure="optional" @yields="optional" @element="both">
<LinkTo @route="component-architecture.types.composable">Composable</LinkTo>
</Item>

<Item @logic="yes" @styled="yes" @content="yes" @structure="yes" @yields="no" @element="inline">
Functional Unit
</Item>

<Item @logic="yes" @styled="no" @content="optional" @structure="yes" @yields="yes" @element="block">
<LinkTo @route="component-architecture.types.data-entry">Harvester</LinkTo>
</Item>
<Item @logic="no" @styled="no" @content="no" @structure="no" @yields="no" @element="inline">
&amp; <LinkTo @route="component-architecture.types.data-entry">Feeder</LinkTo>
</Item>
</Haptics::Matrix>

## References

<References class="references" as |l|>
<l.Video @title="Building Better Components" @year="2019" @series="EmberConf 2019"
@url="https://www.youtube.com/watch?v=Kyd2mQpR_9c" as |r|>
<r.Author @given="Dianne" @family="Eramo" />
</l.Video>

<l.BlogPost @title="Components patterns in Ember.js" @year="2018"
@url="https://medium.com/macsour/components-patterns-in-ember-js-5e6fc6eea28f" as |r|>
<r.Author @given="Maciej" @family="Kwaśniak" />
</l.BlogPost>
</References>
