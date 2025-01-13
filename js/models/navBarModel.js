class navBarModel {
  constructor() {
    this.links = [
      { name: "Services", url: "#services" },
      { name: "Vehicle Models", url: "#vehicle-models" },
      { name: "Reviews", url: "#reviews" },
      { name: "Locations", url: "#locations" },
      { name: "Partners", url: "#partners" },
      { name: "Contact", url: "#contact" },
    ];
    this.contact = {
      phone: "(562) 498-4600",
      email: "xyz@carrental.com",
    };
  }

  getNavLinks() {
    return this.links;
  }

  getContactInfo() {
    return this.contact;
  }
}

export default new navBarModel();
