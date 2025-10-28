let normalSobrante = null;

function numeroNormalStandar() {
    if (normalSobrante != null) {
        const z1 = normalSobrantel;
        normalSobrante = null;
        return z1;
    }

    const u1 = 1 - Math.random();
    const u2 = Math.random();
    const radio = Math.sqrt(-2 * Math.log(u1));
    const angulo = 2 * Math.PI * u2;
    const z0 = radio * Math.cos(angulo);
    const z1 = radio * Math.sin(angulo);
    normalSobrante = z1;
    return z0;
}

export function ruidoGaussiano(sigma = 0.15) {
    return numeroNormalStandar() * sigma;
}