const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('f81102991c76dd80daa5cbc0daa1c591830171d96da6e097bac49d791f5086fa');
const myWalletAddress = myKey.getPublic('hex');


let satlerCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
satlerCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
satlerCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of satler is', satlerCoin.getBalanceOfAddress(myWalletAddress));
