#!/usr/bin/env node

const { getCryptoPrice, generateCryptoJoke } = require('cryptodegenbot');
const yargs = require('yargs');

const options = yargs
 .usage("Usage: -c <coin>")
 .option("c", { alias: "coin", describe: "Get price of specified cryptocurrency", type: "string", demandOption: true })
 .argv;

const getCoinPrice = async () => {
    const price = await getCryptoPrice(options.coin.toUpperCase());
    console.log(`Current ${options.coin.toUpperCase()} Price: $${price}`);
};

const getJoke = () => {
    console.log(generateCryptoJoke());
};

getCoinPrice();
getJoke();
