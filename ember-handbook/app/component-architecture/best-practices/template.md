---
title: Best Practices
---

Best practices for developing components.

## Classification as a Starter

Having proper guidelines where to put your components will have the most impact
on your team. It will

- eliminate avoidable discussions amongst peers
- eliminate re-occuring decision findings, as already provided by guides

in order to ramp up, here is a three-step guide to reach for your <LinkTo @route="component-architecture.classification">classification</LinkTo>:

1. Make map(s) of your components, draw the landscape of your system
2. Draw areas to visualize boundaries
3. Derieve guides from those areas

## Construction Components

Start with construction components.

Base/Blueprint Components
: Base components provide initial structure and/or the rough shape of a
(mostly) presentational component. The finishing touch is left out
intentionally and those base components serve as blueprint.

Builder Components
: Make [builder components](./patterns/builder) which yield you with
pieces to compose the concrete components.

Use the [decorator](./patterns/decorator) pattern to put the outfit on your
implementation or extend the existing functionality.

## Separate Business Logic from UI Components

Often, business logic and UI components are tightly coupled. Moving your
business logic from components to [commands](./patterns/command), you can re-use
those functionality from multiple places and your component glues UI and
business logic together.

By separating them using the [strategy](./patterns/strategy) both can be
developed in a decoupled way and adhering to the [single responsibility
principle](https://en.wikipedia.org/wiki/Single_responsibility_principle).
