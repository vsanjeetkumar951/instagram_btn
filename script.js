var con = document.querySelector("#container");
var icon = document.querySelector("i");

con.addEventListener("dblclick", function () {
  icon.style.color = "white";
  icon.style.transform = "translate(-50%, -50%) scale(1)";
  icon.style.opacity = "1";
  icon.style.transition = "transform ease 0.5s";
  setTimeout(() => {
    icon.style.opacity = "0";
  }, 1000);
  setTimeout(() => {
    icon.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1000);
});
