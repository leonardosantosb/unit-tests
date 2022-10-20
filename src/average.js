/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (myArray1) => {
  let valor = 0;
  let resultado;
  let myArray1Tamanho = myArray1.length;
  if (myArray1.length === 0) {
    return undefined;
  }
  for (let index = 0; index < myArray1.length; index += 1) {
    if (typeof myArray1[index] !== 'number') {
      return undefined;
    }
    valor += myArray1[index];
  } resultado = valor / myArray1Tamanho;
  let arred = Math.round(resultado);
  return arred;
};
module.exports = average;
