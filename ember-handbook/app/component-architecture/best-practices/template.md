---
title: Best Practices
---

Best practices for developing components.

## Atomic Flyweights

Start with atomic flyweight components.

Base Components
: Base components provide initial structure and/or the rough shape of a
(mostly) presentational component. The finishing touch is left out
intentionally and those base components serve as blueprint.

Functional Components
: Contain the logic baked into the component but are completely style free.

Use the [decorator](./patterns/decorator) or
[proxy](./patterns/proxy)
pattern to put the outfit on your implementation or extend the existing functionality.

## Separate Business Logic from UI Components

Often, business logic and UI components are tightly coupled. There is nothing
wrong with that. However, when you are in a situation where you want to change
either of that frequently, things get complicated. Trying a new UI component,
you have to replicate the business logic and on the other hand exchanging the
business logic requires work inside the UI component. By separating them using
the [strategy](./patterns/strategy) both can be
developed in a decoupled way and adhering to the [single responsibility
principle](https://en.wikipedia.org/wiki/Single_responsibility_principle).
