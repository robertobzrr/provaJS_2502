function calcularInvestimento() {
  const capitalInicial = parseFloat(prompt("Digite o capital inicial investido (C):"));
  const taxaJurosMensal = parseFloat(prompt("Digite a taxa de juros mensal (%):")) / 100;
  const tempoMeses = parseInt(prompt("Digite o tempo de investimento (em meses):"));

  if (isNaN(capitalInicial) || isNaN(taxaJurosMensal) || isNaN(tempoMeses) || capitalInicial <= 0 || taxaJurosMensal <= 0 || tempoMeses <= 0) {
    console.log("Por favor, insira valores válidos para todos os campos!");
    return;
  }

  const montante = capitalInicial * Math.pow((1 + taxaJurosMensal), tempoMeses);

  console.log(`O retorno do investimento (montante) é: R$ ${montante.toFixed(2)}`);
}

calcularInvestimento();
