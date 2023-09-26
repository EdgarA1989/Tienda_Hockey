document.addEventListener("DOMContentLoaded", () => {
  //CAPTURAR JSON  Y PASAR AL LOCAL STORAGE
  fetch("JSON/productos.json")
    .then((respuesta) => respuesta.json())
    .then((datos) => localStorage.setItem("productos", JSON.stringify(datos)));

  //FUNCIONES

  //  ANTERIOR IMAGEN HERO
  function imagenHeroAnterior(imagenesHero) {
    const imgHero = document.getElementById("img_hero");
    let indiceActual = imagenesHero.indexOf(imgHero.getAttribute("src"));
    indiceActual--;

    //IF TERNARIO EN CASO DE QUE LLEGUE AL MINIMO VUELVE AL VALOR MAXIMO
    indiceActual = indiceActual < 0 ? imagenesHero.length - 1 : indiceActual;

    imgHero.setAttribute("src", imagenesHero[indiceActual]);
  }

  //SIGUIENTE IMAGEN HERO
  function imagenHeroSiguiente(imagenesHero) {
    const imgHero = document.getElementById("img_hero");
    let indiceActual = imagenesHero.indexOf(imgHero.getAttribute("src"));
    indiceActual++;

    //IF TERNARIO EN CASO DE QUE LLEGUE AL MAXIMO VUELVE AL VALOR MAXIMO
    indiceActual = indiceActual >= imagenesHero.length ? 0 : indiceActual;

    imgHero.setAttribute("src", imagenesHero[indiceActual]);
  }

  //FUNCION CREADORA DE CARDS
  function crearCard(productos, cardsContenedor) {
    // DEBO LIMPIAR EL CONTENEDOR PARA QUE NO SE ME ACUMULEN, CON LOS CREATEELEMENT.
    cardsContenedor.innerHTML = "";
    console.log(productos);
    // Itera sobre los productos y crea tarjetas para cada uno
    productos.forEach((producto) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const nombre = document.createElement("h3");
      nombre.innerText = producto.nombre;

      const precio = document.createElement("p");
      precio.innerText = `Precio: $${producto.precio}`;

      const img = document.createElement("img");
      img.setAttribute("src", producto.imagen);

      card.appendChild(img);
      card.appendChild(nombre);
      card.appendChild(precio);

      cardsContenedor.appendChild(card);

      card.addEventListener("click", () => {
        window.location.href = `producto.html?id=${producto.id}`;
      });
    });
  }

  const imagenesHero = [
    "IMG/leonas.jpg",
    "IMG/jugada.jpg",
    "IMG/chicos_entrenando.jpg",
    "IMG/nene_piso.jpg",
  ];

  //VAR ANTERIOR SIGUIENTE
  const anterior = document.querySelector(".anterior");
  const siguiente = document.querySelector(".siguiente");

  anterior.addEventListener("click", () => imagenHeroAnterior(imagenesHero));
  siguiente.addEventListener("click", () => imagenHeroSiguiente(imagenesHero));

  //VAR SIGNO +
  // LLENADO DE PRODUCTOS AL DESPLAZAR EL +
  const signos = document.querySelectorAll(".mas");

  signos.forEach((signo, index) => {
    signo.addEventListener("click", () => {
      const productos = JSON.parse(localStorage.getItem("productos"));
      //parenElement nos dice sobre que elemento estamos posiscionados y con nextElementSibling se utiliza para acceder al siguiente.

      const cardsContenedor = signo.parentElement.nextElementSibling;
      cardsContenedor.classList.toggle("cards_contenedor");

      switch (index) {
        case 0:
          //CON EL METODO FILTER OBTENGO SOLO LOS QUE SON CATEGORIA PALOS
          let productosPalos = productos.filter(
            (producto) => producto.categoria === "palos"
          );
          crearCard(productosPalos, cardsContenedor);
          break;
        case 1:
          //CON EL METODO FILTER OBTENGO SOLO LOS QUE SON CATEGORIA INDUMENTARIA SUP
          let productosIndSup = productos.filter(
            (producto) => producto.categoria === "indumentariasuperior"
          );
          crearCard(productosIndSup, cardsContenedor);
          break;

        case 2:
          //CON EL METODO FILTER OBTENGO SOLO LOS QUE SON CATEGORIA INDUMENTARIA INF
          let productosIndInf = productos.filter(
            (producto) => producto.categoria === "indumentariainferior"
          );
          crearCard(productosIndInf, cardsContenedor);
          break;
        case 3:
          //CON EL METODO FILTER OBTENGO SOLO LOS QUE SON CATEGORIA ACCESORIOS
          let acceosrios = productos.filter(
            (producto) => producto.categoria === "accesorios"
          );
          crearCard(acceosrios, cardsContenedor);
          break;
        case 4:
          //CON EL METODO FILTER OBTENGO SOLO LOS QUE SON CATEGORIA CALZADO
          let calzado = productos.filter(
            (producto) => producto.categoria === "calzado"
          );
          crearCard(calzado, cardsContenedor);
          break;
      }
    });
  });
});
