const cont = document.querySelector(".container");
const big = document.querySelector(".jumbo");
const bg = document.querySelector(".bg");
cont.addEventListener("click", function (e) {
  let element = e.target.getAttribute("src");
  big.setAttribute("src", element);
  bg.style.backgroundImage = "url('" + element + "')";
});
