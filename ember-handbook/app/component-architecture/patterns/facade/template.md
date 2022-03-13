---
title: Facade Pattern
type: tech
---

## Intent

> Provide a unified interface to a set of interfaces in a subsystem. Facade
> defines a higher-level interface that makes the subsystem easier to use.
>
> <cite>Gamma, E. et al. (1994, p. 185)</cite>

## Usage

- Provide a simple interface to a complex subsystem
- Facade often acts as a "default view" that is mostly "good enough"
- Decouple subsystem from clients/consumers and other subsystems
- Promote subsystem independence and portability
- Facade as entry point to your subsystem (so you can re-arrange behind that)

## Example

Make a screen/page component for product details

### Without Facade

Have all the sections invoked from the route itself.

```hbs
{{! route: product/details.hbs }}
<Product::Details::HeaderSection
  @product={{@model}}
  @overviewLink={{link "overview"}} 
/>

<Product::Details::SpecSection @product={{@model}}/>

<Product::Details::PriceSection
  @product={{@model}}
  @offerLink={{link "offer"}} 
/>
```

### With Facade

Extract the product details screen into its own component.

```hbs
{{! components/product/details-screen.hbs }}
<Product::DetailsScreen::HeaderSection 
  @product={{@product}}
  @overviewLink={{@overviewLinklink}} 
/>
 
<Product::DetailsScreen::SpecSection @product={{@product}} />
 
<Product::DetailsScreen::PriceSection 
  @product={{@product}}
  @offerLink={{@offerLink}} 
/>
```

Invoke it from the route and pass in the links, as the route is owner of routing information.

```hbs
{{! route: product/details.hbs }}
<Product::DetailsScreen
  @product={{@model}}
  @overviewLink={{link "overview"}}
  @offerLink={{link "offer"}}
/>
```
