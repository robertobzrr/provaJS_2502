let popA = 80000;
let popB = 200000;
const taxaCrescimentoA = 0.03;
const taxaCrescimentoB = 0.015;
let anos = 0;

while (popA < popB) {
  popA += popA * taxaCrescimentoA;
  popB += popB * taxaCrescimentoB;
  anos++;
}

console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
