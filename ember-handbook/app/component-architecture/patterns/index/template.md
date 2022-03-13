---
title: Patterns
type: tech
---

**Patterns** are part of the engine that powers a component.

## Creational

_Abstract the instantiation process_

- Make the system independent of how components are created
- Class pattern: Uses inheritance to vary the class' instantiation
- Creational Pattern: Delegate instantiation
- Composition over Inheritance

<ul class="cards">
  <li>
    <h2><LinkTo @route="component-architecture.patterns.factory">Factory</LinkTo></h2>
    <p>Creating families of components</p>
  </li>

  <li>
    <h2><LinkTo @route="component-architecture.patterns.prototype">Prototype</LinkTo></h2>
    <p>Cloning the concrete component</p>
  </li>

  <li>
    <h2>
      <LinkTo @route="component-architecture.patterns.builder">Builder</LinkTo>
    </h2>
    <p>Construction kit</p>
  </li>
</ul>

## Structural

_Concerned with how components are composed to form larger structures_

<ul class="cards">
  <li>
    <h2><LinkTo @route="component-architecture.patterns.decorator">Decorator</LinkTo></h2>
    <p>Adds a little something</p>
  </li>

  <li>
    <h2><LinkTo @route="component-architecture.patterns.adapter">Adapter</LinkTo></h2>
    <p>Connects incompatible components</p>
  </li>

  <li>
    <h2>
      <LinkTo @route="component-architecture.patterns.bridge">Bridge</LinkTo>
    </h2>
    <p>Make abstraction and implementation exchangeable</p>
  </li>

  <li>
    <h2>
      <LinkTo @route="component-architecture.patterns.facade">Facade</LinkTo>
    </h2>
    <p>The entry to a subsystem</p>
  </li>
</ul>

## Behavioral

_Concerned with algorithms and the assignment of responsibilities_

- Patterns of communication between behaviors
- Characterize complex control flow that's difficult to follow at run-time
- Shift focus from flow of control to how things are connected

<ul class="cards">
  <li>
    <h2><LinkTo @route="component-architecture.patterns.command">Command</LinkTo></h2>
    <p>Enacpsulates a request/(trans)action</p>
  </li>

  <li>
    <h2><LinkTo @route="component-architecture.patterns.adapter">Strategy</LinkTo></h2>
    <p>Interchangeable algorithms family</p>
  </li>
</ul>
