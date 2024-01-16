// model.js

class Producto {
    constructor(id, nombre, precio) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  class Carrito {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    calcularTotal() {
      return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }
  }
  
  // Instanciamos el carrito
  const carrito = new Carrito();

  // view.js

  function actualizarCarritoUI() {
    const carritoCantidad = document.getElementById('carrito-cantidad');
    const carritoLista = document.getElementById('carrito-lista');
    const carritoTotal = document.getElementById('carrito-total');

    // Limpiamos el contenido actual del carrito
    carritoCantidad.textContent = carrito.productos.length;

    // Actualizamos la lista de productos en el carrito
    carritoLista.innerHTML = '';
    carrito.productos.forEach(producto => {
        const productoLi = document.createElement('li');
        productoLi.textContent = `${producto.nombre} - $${producto.precio}`;
        productoLi.classList.add('list-group-item');
        carritoLista.appendChild(productoLi);
    });

    // Mostramos el total del carrito
    carritoTotal.textContent = `Total: $${carrito.calcularTotal()}`;
}
// controller.js

document.addEventListener('DOMContentLoaded', () => {
    const listaProductos = document.getElementById('lista-productos');
  
    // Manejar clic en un botón "Agregar al Carrito"
    listaProductos.addEventListener('click', (event) => {
      if (event.target.classList.contains('agregar-al-carrito-btn')) {
        const productoElement = event.target.parentNode;
        const id = parseInt(productoElement.dataset.id);
        const nombre = productoElement.dataset.nombre;
        const precio = parseFloat(productoElement.dataset.precio);
  
        // Simulamos la obtención de datos del producto
        const nuevoProducto = new Producto(id, nombre, precio);
  
        // Agregamos el producto al carrito
        carrito.agregarProducto(nuevoProducto);
  
        // Actualizamos la interfaz de usuario
        actualizarCarritoUI();
      }
    });
  });
  