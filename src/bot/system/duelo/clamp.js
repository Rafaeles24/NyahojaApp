//Funcion para regular la precision del golpe bruto (base + ruido)
export function clamp(x, piso = 0.20, techo = 0.95) {
    return Math.min(techo, Math.max(piso, x));
}