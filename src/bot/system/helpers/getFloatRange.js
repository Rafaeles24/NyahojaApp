//Funcion para obtener un float aleatorio dentro de un rango.
export function getFloatRange(min, max) {
    return Math.random() * (max - min) + min;
}