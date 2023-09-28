document.addEventListener("DOMContentLoaded", () => {
  //OBTENER EL ID DE LA URL MEDIANTE WINDOWS LOCATE SEARCH
  const urlParams = new URLSearchParams(window.location.search);
  const idProducto = urlParams.get("id");

  //TRAIGO LOS PRODUCTOS DEL LOCAL STORAGE
  const productos = JSON.parse(localStorage.getItem("productos"));

  const productoContenedor = document.querySelector(".producto_contenedor");
  //BUSCO EL PORDUCTO POR ID MEDAINTE EL METODO FIND PARA RECORRER CADA ITEM DEL ARREGLO PORDUCTOS.
  const producto = productos.find((producto) => producto.id == idProducto);

  if (producto) {
    const imagenContenedor = document.createElement("div");
    imagenContenedor.classList.add("imagen_contenedor");
    const img = document.createElement("img");
    img.classList.add("producto_imagen");
    img.setAttribute("src", producto.imagen);
    const textoContenedor = document.createElement("div");
    textoContenedor.classList.add("texto_contenedor");
    textoContenedor.innerHTML = `<h2>${producto.nombre}</h2>
    <p class="texto_precio">Precio: $${producto.precio}</p>
    <p class="texto_envio">Envio Gratis</p>`;

    //CREO LA CANTIDAD DE ESTRELLAS SEGUN LAS INDICADAS EN EL JSON
    const divStar = document.createElement("div");
    divStar.classList.add("puntuacion");
    for (let i = 0; i < producto.puntuacion.length; i++) {
      let span = document.createElement("span");
      span.classList.add("star");
      span.innerHTML = "&#9733";
      divStar.appendChild(span);
    }

    imagenContenedor.appendChild(img);
    textoContenedor.appendChild(divStar);
    productoContenedor.appendChild(imagenContenedor);
    productoContenedor.appendChild(textoContenedor);

    const detalle = document.createElement("div");
    detalle.classList.add("detalle_producto");
    detalle.innerHTML = `<p>${producto.detalle}</p>`;

    //INSERTO EL DETALLE POR FUERA DEL CONTENEDOR DEL PRODUCTO
    productoContenedor.insertAdjacentElement("afterend", detalle);
  } else {
    console.log("El producto con ese ID no fue encontrador");
  }
});
