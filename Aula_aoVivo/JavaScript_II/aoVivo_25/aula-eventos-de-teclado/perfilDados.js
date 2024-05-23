// alert("Oi")
const linkHome = document.querySelector("a");

document.addEventListener("keyup", (evento) => {
  console.log(evento.key);

  if (evento.key === "Backspace") {
    linkHome.click();
  }
});
