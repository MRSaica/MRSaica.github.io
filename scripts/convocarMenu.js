fetch("menu_superior.html")
  .then((response) => response.text())
  .then((data) => {
    const contenedor = document.querySelector("#contenedor-menu-superior");
    contenedor.innerHTML = data;
  });
