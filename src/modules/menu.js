class Menu {
  constructor() {
    const header = document.querySelector("header");
    this.menuActiveOpen = header.querySelector(".menu-active-open");
    this.menuActiveClose = header.querySelector(".menu-active-close");
    this.hamburgerMenu = header.querySelector(".hamburger-menu");
    this.coating = document.querySelector(".coating");
  }

  menuActive() {
    this.hamburgerMenu.addEventListener("click", () => {
      this.menuActiveOpen.classList.add("translate-x-[0]");

      console.log("_______", this.menuActiveOpen);

      this.coating.classList.remove("hidden");
    });

    this.menuActiveClose.addEventListener("click", () => {
      this.menuActiveOpen.classList.remove("translate-x-[0]");
      this.coating.classList.add("hidden");
    });

    this.coating.addEventListener("click", () => {
      this.menuActiveOpen.classList.remove("translate-x-[0]");
      this.coating.classList.add("hidden");
    });
  }
}

const menu = new Menu();
export default menu;
