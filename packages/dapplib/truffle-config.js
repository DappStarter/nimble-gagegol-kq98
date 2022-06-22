require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan recipe machine uncover guess kiwi army gesture'; 
let testAccounts = [
"0x7881d6ffe450413e584a12de1f7ce3876f82025a85362e811c12dff0e88dc5c0",
"0xc5ab5b29280ca51a8761b72dd707256561cd5d5867c6e3da6982aa793a9cb6ab",
"0x65fa93921153e0edc25ea5c6c6ea1ac42b9ef2cd1416fa0997621f62f214dcd1",
"0x4b922fa518b55c85ae2b2ed6aebb7b54892636ba9223a6610eb9641e63cf3aed",
"0xb1a8f2f32552431d21305299e20c4f005154413b6f9cfb9aaf4e09fa0496d280",
"0xc32d72c227e7b4f043b397d598fdd3cb535e883d6c191d05cef17f0905ab2571",
"0xcbe5fde92aab34b127842974d21e12075f52f8ca5acca0fefd12582055b90abd",
"0x698a45293360b808cd78f96c8364c5fa9bd49ccb662b259a7f1a663b39a7d486",
"0x5903de556c51c30c4806e09765e9c25a14e0585b55f86b104ec049b147c8da45",
"0xa729b113612124bd8b52d3cffa2b0431cb008f2f9c1665ff210b0716484c21cc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


