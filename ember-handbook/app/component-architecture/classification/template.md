---
title: Classification
---

**Classification** gives components a _home_ and can be accompanied by naming
conventions and/or guides.

## Usage

- Create a map of **your** system, it has to fit your architecture
- Draw zones to make boundaries and name the areas, to make those boundaries visible
- Set rules/guidelines for each area

Those areas with rules/guidelines will form the component classification of your
system. It will be individual to your system and it even can vary for multiple
products from one company.

What you'll find here is the methodology of atomic design and how this might be
an _orientation_ around which you can create your own classification and second
step is how that is put into practice at the example of <a href="https://hokulea.netlify.app/" target="_blank">Hokulea</a> design system.

## Orientation

Atomic design is the first orientation, where components are ordered from small
(atoms) to big (pages) and also stating that the next level is made up of
components from the lower (see Figure 1).

<figure>
  <img alt="Atomic design with atoms, molecules, organisms, templates and pages" src="/atomic-design.png" style="width: 75%;">

  <figcaption>Atomic design (Frost, 2013).</figcaption>
</figure>

The second orientation is the layers at which components can be put in (see
Figure 2). From many used components in the lower layer (design system
components) to recipes (domain components outside the design sytem) to
snowflakes (one-offs needed to build a product).

<figure>
  <img alt="Layered system in form of a pyramid: design system components as base,
  recipes in the middle and snowflakes (one-offs) on the top"
  src="/component-pyramid.png" style="width: 50%;">

  <figcaption>Design system components, recipes, and snowflakes (Frost, 2021).</figcaption>
</figure>

Now, I combined the two together to actually have two axis to form a grid to
and place components on it (see Figure 3).

<figure>
  <img alt="Layered system x atomic design to form a grid"
  src="/classification-grid.png" style="width: 75%;">

  <figcaption>Layered system x atomic design to form a grid.</figcaption>
</figure>

With that grid, it is now possible to mark those cells, in which the majority of
components are living (see Figure 4).

<figure>
  <img alt="Marked cells in from the grid above"
  src="/classification.png" style="width: 75%;">

  <figcaption>Marked cells in from the grid above.</figcaption>
</figure>

In the last step, it is now possible to **draw zones** around our markers,
**name these areas** and **provide rules or guidelines** that components of that
area shall comply with.

## Example: Hokulea

A concrete example where that happened and how that can look like, is the
<a href="https://hokulea.netlify.app/" target="_blank">Hokulea</a> design system
(a research project by the author of this).

First step to draw a grid on where components are aligned on a design system.
Based on atomic design, the design system components are only atoms and
molecules. Everything bigger than that goes into product level, which isn't that
much relevant for a design system. Next was to layer those components. Some
internal layer, building blocks and the user-facing layer. From the Figma file
below, the middle column is the most interesting one, as this is where component
classes are identified.

@[figma](https://www.figma.com/file/sWEslYwEe6y87vkVn5DtKm/Classification-Sheet?node-id=1%3A2)

It wasn't yet not enough to understand what these components are (not) allowed
to do. It wasn't enough to draw rules or guidelines from that. This is where the
second step for an in-depth investigation of the beforementioned middle column
started, as shown in the next Figma file below. Placing the components on the
canvas and after moving them around and drawing rectangles and removing the
components there was time to make the boundaries across them visible.

@[figma](https://www.figma.com/file/sWEslYwEe6y87vkVn5DtKm/Documentation%3A-Components?node-id=741%3A0)

With color-coding, proper areas and their names it was possible to understand
what rules and guidelines for each of those components do apply.

-&gt; Have a look at the <a
href="https://hokulea.netlify.app/?path=/story/documentation-development--classification"
target="_blank">component
classifications from Hokulea and their guidelines</a>.

## References

<References class="references" as |l|>
  <l.BlogPost
    @title="Atomic Design"
    @year="2013"
    @url="https://bradfrost.com/blog/post/atomic-web-design"
    as |r|
  >
    <r.Author @given="Brad" @family="Frost" />
  </l.BlogPost>

  <l.BlogPost
    @title="Design system components, recipes, and snowflakes"
    @year="2021"
    @url="https://bradfrost.com/blog/post/design-system-components-recipes-and-snowflakes"
    as |r|
  >
    <r.Author @given="Brad" @family="Frost" />
  </l.BlogPost>
</References>
