let valorColor = document.querySelectorAll(".valorColor");
let utilidadColor = document.querySelectorAll(".utilidadColor");
let significadoColor = document.querySelector("#significadoColor");

const sueldoBasico = 50000;
const arriendo = 1857000 / 30;
const puntoEquilibrio = sueldoBasico + arriendo;

significadoColor.innerHTML = `
  <div>${puntoEquilibrio}</div>
`;

for (let i = 0; i < utilidadColor.length; i++) {
  if (utilidadColor[i].textContent <= 1) {
    valorColor[i].style.backgroundColor = "whitesmoke";
    valorColor[i].style.color = "whitesmoke";
    valorColor[i].style.border = "1px solid whitesmoke";
  }

  else if (utilidadColor[i].textContent <= arriendo) {
    valorColor[i].style.backgroundColor = "white";
    valorColor[i].style.color = "hotpink";
    valorColor[i].style.border = "1px solid hotpink";
  }

  else if (utilidadColor[i].textContent <= puntoEquilibrio) {
    valorColor[i].style.backgroundColor = "white";
    valorColor[i].style.color = "dodgerblue";
    valorColor[i].style.border = "1px solid dodgerblue";
  }

  else if (utilidadColor[i].textContent >= puntoEquilibrio && utilidadColor[i].textContent <= puntoEquilibrio * 2.06) {
    valorColor[i].style.backgroundColor = "dodgerblue";
    valorColor[i].style.color = "white";
  }

  else if (utilidadColor[i].textContent >= puntoEquilibrio * 2.06 && utilidadColor[i].textContent <= puntoEquilibrio * 3.755) {
    valorColor[i].style.backgroundColor = "#1e6bff";
    valorColor[i].style.color = "white";
  }

  else if (utilidadColor[i].textContent >= (puntoEquilibrio * 3.755) && utilidadColor[i].textContent <= puntoEquilibrio * 6.71) {
    valorColor[i].style.backgroundColor = "lime";
    valorColor[i].style.color = "black";
    valorColor[i].style.fontWeight = "bold";
  }

  else if (utilidadColor[i].textContent >= puntoEquilibrio * 6.71 && utilidadColor[i].textContent <= puntoEquilibrio * 8.937) {
    valorColor[i].style.backgroundColor = "deeppink";
    valorColor[i].style.color = "white";
    valorColor[i].style.fontWeight = "bold";
  }

  else if (utilidadColor[i].textContent >= puntoEquilibrio * 8.937) {
    valorColor[i].style.backgroundColor = "gold";
    valorColor[i].style.color = "rgb(50,50,50)";
  }
}
