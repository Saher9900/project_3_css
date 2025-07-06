let ul = document.getElementsByTagName("ul")[0]
let bars = document.getElementsByClassName("bars")[0]

bars.onclick = function () {
  ul.classList.toggle("drop")
}