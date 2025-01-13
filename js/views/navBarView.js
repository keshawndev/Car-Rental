import navBarModel from "../models/navBarModel";
import logo from "../../img/Home/car_rental_logo.gif";

class NavBarView {
  constructor() {
    this.parentElement = document.querySelector(".header");
  }

  render() {
    const contactInfo = navBarModel.getContactInfo();
    const navLinks = navBarModel.getNavLinks();

    const markup = `
      <div class="header__contact-bar">
        <a href="tel:${
          contactInfo.phone
        }" class="header__contact-bar__phone__link">Contact: ${
      contactInfo.phone
    }</a>
        <a href="mailto:${
          contactInfo.email
        }" class="header__contact-bar__email__link">Email: ${
      contactInfo.email
    }</a>
      </div>
      <div class="header__nav">
        <img src=${logo} class="header__nav__logo" alt="Company Logo" />
        <nav class="header__nav__navbar">
          ${navLinks
            .map(
              (link) =>
                `<a href="${link.url}" class="header__nav__navbar__link--shown">${link.name}</a>`
            )
            .join("")}
        </nav>
      </div>
      <div class="header__visibility">
        <img src=${logo} class="header__visibility__logo" alt="Company Logo" />
        <ion-icon name="apps-sharp" class="header__visibility__exspand-icon"></ion-icon>
      </div>
      <div class="popup-menu" id="popup-menu">
        <div class="popup-menu__content">
          <ion-icon name="close-outline" class="popup-menu__close-icon"></ion-icon>
          <nav class="popup-menu__navbar">
            ${navLinks
              .map(
                (link) =>
                  `<a href="${link.url}" class="popup-menu__link">${link.name}</a>`
              )
              .join("")}
          </nav>
        </div>
      </div>
    `;
    this.parentElement.innerHTML = markup;

    this.addHandlerShowPopup();
    this.addHandlerClosePopup();
    this.addHandlerLinkClick();
    this.addStickyHeader();
  }

  addHandlerShowPopup() {
    const expandIcon = document.querySelector(
      ".header__visibility__exspand-icon"
    );
    const popupMenu = document.getElementById("popup-menu");

    expandIcon.addEventListener("click", () => {
      popupMenu.classList.add("popup-menu--active");
      document.body.classList.add("no-scroll");
    });
  }

  addHandlerClosePopup() {
    const closeIcon = document.querySelector(".popup-menu__close-icon");
    const popupMenu = document.getElementById("popup-menu");

    closeIcon.addEventListener("click", () => {
      popupMenu.classList.remove("popup-menu--active");
      document.body.classList.remove("no-scroll");
    });
  }

  addHandlerLinkClick() {
    const popupMenuLinks = document.querySelectorAll(".popup-menu__link");
    const popupMenu = document.getElementById("popup-menu");

    popupMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        popupMenu.classList.remove("popup-menu--active");
        document.body.classList.remove("no-scroll");
      });
    });
  }

  addStickyHeader() {
    document.addEventListener("DOMContentLoaded", () => {
      if (window.innerWidth < 601) return;

      const header = document.querySelector(".header");
      const stickyClass = "header--sticky";
      const stickyPoint = 100; // Adjust this value to the scroll position where you want the header to become sticky

      window.addEventListener("scroll", () => {
        if (window.scrollY >= stickyPoint) header.classList.add(stickyClass);
        else header.classList.remove(stickyClass);
      });
    });
  }
}

export default new NavBarView();
