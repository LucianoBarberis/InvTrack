const inventario = []; // Inicializar el inventario
function newArticulo() {
    alert("A continuacion se le pediran algunos datos para crear su articulo")
    let nombre = prompt("Ingrese una descripcion para su articulo");
    let cantidad = prompt("Ingrese el stock de su articulo");
    let precio = prompt("Indique el precio de su articulo");
    let total = cantidad * precio;
    let articulo = {
        Descripcion: nombre,
        Stock: cantidad,
        Valor: precio,
    }
    alert(`Su articulo a sido creado correctamente\nDescripcion: ${nombre}\nStock: ${cantidad}\nValor: ${precio}\nTotal: ${total}`)
    inventario.push(articulo)
}

let entrada = prompt("Bienvenido a su inventario\n 1-Crear un nuevo articulo\n 2-Ver los articulos creados\n escribir 'salir' para terminar");
while (entrada !== "salir") {
    const numeroEntrada = parseInt(entrada);
    if (numeroEntrada === 1) {
        newArticulo();
    } else if (numeroEntrada === 2) {
        if (inventario.length === 0) {
            alert("No existen articulos");
        } else {
            alert("Sus articulos se muestran en la consola");
            console.table(inventario);
        }
    } else if (numeroEntrada === 3) {
        
    }else {
        alert("Valor invalido, porfavor, intente de nuevo.");
    }
    entrada = prompt("Bienvenido a su inventario\n 1-Crear un nuevo articulo\n 2-Ver los articulos creados\n escribir 'salir' para terminar");
}
