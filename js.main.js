function calcularCosto() {
    let productos = document.querySelectorAll("select");
    let costoTotal = 0;

    for (let i = 0; i < productos.length; i++) {
        let producto = parseInt(productos[i].value);
        if (producto > 0) {
            costoTotal += producto;
        }
    }

        alert("El costo total es: " + costoTotal);
        console.log("El costo total es: " + costoTotal);
    }