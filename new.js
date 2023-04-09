// const a =
//   " HELLO MORNINGSTAR, Notez que le code JavaScript utilise setTimeout pour simuler l'effet de la fonction Sleep de Windows.h. De plus, il utilise process.stdout.write plutôt que console.log pour permettre l'impression des caractères sur la même ligne. ";
// const n = a.length;

// for (let i = 0; i < n; i++) {
//   setTimeout(() => {
//     process.stdout.write(a[i]);
//   }, i * 100);
// }

// //
// const video = document.querySelector("video");
// const constraints = {
//   audio: false,
//   video: {
//     facingMode: "user",
//   },
// };

// navigator.mediaDevices
//   .getUserMedia(constraints)
//   .then((stream) => {
//     video.srcObject = stream;
//   })
//   .catch((error) => {
//     console.error("Error accessing camera: ", error);
//   });

const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

if (burgerMenu && navbarMenu) {
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  });
}

document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("is-active");
    navbarMenu.classList.remove("is-active");
  });
});

window.addEventListener("scroll", () => {
  if (this.scrollY >= 85) {
    headerMenu.classList.add("on-scroll");
  } else {
    headerMenu.classList.remove("on-scroll");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 769) {
    if (navbarMenu.classList.contains("is-active")) {
      navbarMenu.classList.remove("is-active");
    }
  }
});
