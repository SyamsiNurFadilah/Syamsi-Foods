let modal = document.querySelector(".menu-list-preview");
let box = modal.querySelectorAll(".preview");

document.querySelectorAll(".menu-container .menu-list").forEach((produk) => {
  produk.onclick = () => {
    modal.style.display = "flex";
    let name = produk.getAttribute("data-name");
    box.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

box.forEach((tutup) => {
  tutup.querySelector(".fa-x").onclick = () => {
    tutup.classList.remove("active");
    modal.style.display = "none";
  };
});

const navSlide = document.querySelector(".navbar");
document.querySelector("#menu").onclick = () => {
  navSlide.classList.toggle("active");
};

const hamburgerMenu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navSlide.contains(e.target)) {
    navSlide.classList.remove("active");
  }
});
