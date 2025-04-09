function processarNumeros() {
  const n = parseInt(prompt("Quantos números você quer processar?"));
  let numeros = [];
  let soma = 0;

  for (let i = 0; i < n; i++) {
    const numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(numero);
    soma += numero;
  }

  const menor = Math.min(...numeros);
  const maior = Math.max(...numeros);

  console.log(`Menor valor: ${menor}`);
  console.log(`Maior valor: ${maior}`);
  console.log(`Soma dos valores: ${soma}`);
}

processarNumeros();
