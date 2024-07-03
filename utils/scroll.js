const scrollToTopButton = document.querySelector(".scroll-to-top");

scrollToTopButton.addEventListener("click", function () {
  //functia scrollTo este o functie predefinita
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//eventul de scroll se declanseaza de fiecare cand scrolam in pagina

document.addEventListener("scroll", function () {
  //proprietatea de scrollY reprezinta numarul de pixeli scrolatai pe axa Oy (cand nu am scrolat deloc valoarea e 0)
  const viewportHeight = window.innerHeight;
  if (window.scrollY > viewportHeight / 2) {
    scrollToTopButton.style.visibility = "visible";
  } else {
    scrollToTopButton.style.visibility = "hidden";
  }
});
