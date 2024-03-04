// Función para calcular requerimientos calóricos
function calcularCalorias() {
    // Entradas
    let peso, estatura, opcion;

    do {
        peso = parseFloat(prompt('Ingrese su peso en kg:'));
    } while (isNaN(peso) || peso <= 0);

    do {
        estatura = parseFloat(prompt('Ingrese su estatura en cm:'));
    } while (isNaN(estatura) || estatura <= 0);

    opcion = parseInt(prompt('¿Qué desea hacer?\n1. Mantener el peso\n2. Perder peso\n3. Subir peso\nIngrese el número de la opción:'));

    // Declarar variables y objetos necesarios
    let caloriasNecesarias = 0;

    // Simulador calcular las calorías necesarias
    switch (opcion) {
        case 1:
            caloriasNecesarias = 66.5 + (13.75 * peso) + (5.003 * estatura);
            break;
        case 2:
            caloriasNecesarias = (66.5 + (13.75 * peso) + (5.003 * estatura)) - 500; // Reducir 500 calorías para perder peso
            break;
        case 3:
            caloriasNecesarias = (66.5 + (13.75 * peso) + (5.003 * estatura)) + 500; // Aumentar 500 calorías para subir peso
            break;
        default:
            alert('Opción no válida.');
            return; // Salir de la función si la opción no es válida
    }

    // Salida
    const mensajeResultado = `Para ${(opcion === 1) ? 'mantener' : (opcion === 2) ? 'perder' : 'subir'} tu peso, necesitas consumir aproximadamente ${caloriasNecesarias.toFixed(2)} calorías por día.`;
    alert(mensajeResultado);

    // Ejemplo de lista de alimentos con calorías
    const alimentos = [
        { nombre: 'Manzana', calorias: 52 },
        { nombre: 'Plátano', calorias: 89 },
        { nombre: 'Arroz', calorias: 130 },
        { nombre: 'Pollo', calorias: 165 },
        { nombre: 'Leche', calorias: 103 },
        { nombre: 'Huevo', calorias: 78 }
    ];

    // Calcular el total de calorías consumidas
    let totalCaloriasConsumidas = 0;

    alimentos.forEach(alimento => {
        const cantidad = parseInt(prompt(`Ingrese la cantidad de ${alimento.nombre} consumida:`));
        totalCaloriasConsumidas += alimento.calorias * cantidad;
    });

    alert(`Total de calorías consumidas: ${totalCaloriasConsumidas}`);
}

// Llamar a la función al cargar la página
calcularCalorias();