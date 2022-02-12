interface CardBuilder {
  buildHeader();
  buildBody();
  buildFooter();
  buildImage();
  buildList();
  getCard();
}

class MaterialCardBuilder implements CardBuilder {}
class BootstrapCardBuilder implements CardBuilder {}

// simple material card
const materialBuilder = new MaterialCardBuilder();
materialBuilder.buildBody();
const simpleCard = materialBuilder.getCard();

// dialog bootstrap card
const bootstrapBuilder = new BootstrapCardBuilder();
bootstrapBuilder.buildHeader();
bootstrapBuilder.buildBody();
bootstrapBuilder.buildFooter();
const dialogCard = bootstrapBuilder.getCard();
