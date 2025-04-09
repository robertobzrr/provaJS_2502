function calcularCirculo() {
  const raio = parseFloat(prompt("Digite o raio do círculo:"));

  if (isNaN(raio) || raio <= 0) {
    console.log("Por favor, insira um valor válido para o raio!");
    return;
  }

  const area = Math.PI * Math.pow(raio, 2);
  const perimetro = 2 * Math.PI * raio;

  console.log(`A área do círculo é: ${area.toFixed(2)} unidades de área.`);
  console.log(`O perímetro do círculo é: ${perimetro.toFixed(2)} unidades de comprimento.`);
}

calcularCirculo();
