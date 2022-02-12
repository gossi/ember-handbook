function DefaultVariant() {}

function ProductCard(variant?) {
  const card = variant ?? DefaultVariant();

  // do sth with `card`
}

function TreatmentVariant() {}

ProductCard(TreatmentVariant());
