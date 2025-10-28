const { clamp } = require("./clamp");
const { ruidoGaussiano } = require("./ruidoGaussiano");

const presicionBase = 0.50; //El 50% de los golpes sera efectivo

export function hit() { //Valor en caso se quiere que el hit sea certero, no falle
    const ruido = ruidoGaussiano();
    const hitBruto = presicionBase + ruido;
    const hitRegulado = clamp(hitBruto); //Regula la probabilidad del hit en caso exceda los limites permitidos.
    const azarPuro = Math.random();
    return azarPuro < hitRegulado;
}