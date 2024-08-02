// Array para almacenar los productos en el carrito
let carrito = [];

// Función para añadir un producto al carrito
function añadirAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    alert(`Se añadió ${nombre} al carrito.`);
    actualizarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1); // Eliminar un elemento en el índice dado
    actualizarCarrito();
}

// Función para actualizar la vista del carrito
function actualizarCarrito() {
    const carritoElemento = document.getElementById('carrito');
    carritoElemento.innerHTML = '<h2>Carrito de Compras</h2>';
    
    if (carrito.length > 0) {
        let contenidoCarrito = '<ul>';
        let total = 0;
        
        carrito.forEach((producto, indice) => {
            contenidoCarrito += `
                <li>
                    ${producto.nombre} - $${producto.precio.toFixed(2)} 
                    <button class="eliminar" onclick="eliminarDelCarrito(${indice})">Eliminar</button>
                </li>`;
            total += producto.precio;
        });
        
        contenidoCarrito += `</ul><p>Total: $${total.toFixed(2)}</p>`;
        carritoElemento.innerHTML += contenidoCarrito;
    } else {
        carritoElemento.innerHTML += '<p>Tu carrito está vacío.</p>';
    }
}

// Asignar los eventos a los botones después de que cargue el contenido de la página
document.addEventListener('DOMContentLoaded', () => {
    const botones = [
        { id: 'añadirCamisa', producto: 'Camisa Blanca', precio: 25.00 },
        { id: 'añadirJeans', producto: 'Jeans Azules', precio: 40.00 },
        { id: 'añadirZapatos', producto: 'Zapatos Negros', precio: 60.00 },
        { id: 'añadirChaqueta', producto: 'Chaqueta Negra', precio: 80.00 }
    ];

    botones.forEach(boton => {
        const element = document.getElementById(boton.id);
        if (element) {
            element.addEventListener('click', () => {
                añadirAlCarrito(boton.producto, boton.precio);
            });
        } else {
            console.warn(`Elemento con id ${boton.id} no encontrado en el DOM.`);
        }
    });
});