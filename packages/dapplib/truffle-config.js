require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food elder renew stereo equip coral light army genuine'; 
let testAccounts = [
"0x15f3df7b2552cacfb8a1b02e27cc76ec5184b11a699decd163bdbdb3b5b56bc8",
"0x378f1c01ae25e2b24c9be68c03e15ee4591d7f9d85e7d6a9ec341439ca6cb3b8",
"0xea6526e75f47c584661072b12456a97853219e00e2d457cfdcdf5adf754cd785",
"0x9aa174310a71fb8be1a552a92743e785ac9653d55da7d5346557403923f68ba2",
"0x01f4e61c5016e2fedf350c6bdc6ed2a765f9d433b9d99b91e627af966036c9e1",
"0xca8d31f49893df05c67e725dbc306646634e50386aade8802eff4831f5b3f2ea",
"0x2e79fc841263f21fba6576151e71adc7b77b1f53320ea569102369e82b064e8f",
"0x668c151c5045ac9c9da70db7c08da5bdea7f7de762d159fc7a0c5d13d8c844d2",
"0x6a7fa08bfaf20109c172e6119577b7fd87fc62cb60032e2ab7aa71ad68e9448d",
"0xf711cbc941af5a421206807b2faa2f944a5645216ab8aeaafa16311bbdd4e78b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
