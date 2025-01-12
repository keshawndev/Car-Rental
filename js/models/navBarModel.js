class navBarModel {
  constructor() {
    this.links = [
      { name: "Home", url: "#home" },
      { name: "About", url: "#about" },
      { name: "Services", url: "#services" },
      { name: "Contact", url: "#contact" },
    ];
  }
}

export default new navBarModel();
