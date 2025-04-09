function calcularSalarioComInput() {
  let salario = parseFloat(prompt("Informe o salário inicial do funcionário:"));
  let percentual = 0.15;
  const anoContratacao = 1995;
  const anoAtual = new Date().getFullYear();

  for (let ano = 1996; ano <= anoAtual; ano++) {
    salario += salario * percentual;
    percentual *= 2;
  }

  console.log(`O salário atual do funcionário é: R$ ${salario.toFixed(2)}`);
}

calcularSalarioComInput();
