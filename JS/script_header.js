document.addEventListener("DOMContentLoaded", () => {
  //FUNCIONES

  function mostrarMenu() {
    //PORPIEDAD DEL OBJERO WINDOW QUE SABE EL TAMAÑO DE LA PANTALLA
    if (window.innerWidth >= 720) {
      menu.classList.add("menu_desplegado");
    } else {
      menu.classList.remove("menu_desplegado");
    }
  }

  //VAR MENU DESPLEGABLE
  const menuIconos = document.querySelector(".menu_iconos");
  const menu = document.querySelector(".menu");

  menuIconos.addEventListener("click", () => {
    menu.classList.toggle("menu_desplegado");
  });

  //CON ESTO ANTE UN REFRESCO DE LA WEB MANIENTE EL MENU VISIBLE
  if (window.innerWidth >= 720) {
    menu.classList.add("menu_desplegado");
  }

  /* MEDIANTE ESTA FUNCION ANTE UN CAMBIO DE TAMAÑO DE LA PANTALLA MANTIENE EL MENU VISIBLE*/
  window.addEventListener("resize", mostrarMenu);
});
