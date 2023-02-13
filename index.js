// Se declara constante con mayuscula como clase
const Web3 = require('web3');

// La instacia en minuscula y el endpoint ethereum de Infura
const web3 = new Web3(`https://mainnet.infura.io/v3/54e90d1639ec4c4ba3fd8b064046c2da`);

console.log(web3);

// Retorna el número de bloque actual
web3.eth.getBlockNumber().then(number => {
  console.log(number);
})