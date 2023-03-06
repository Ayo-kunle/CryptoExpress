require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/PkeAxM5OL58lK8p7L5ksiXo4DkWkGDgU',
      accounts: ['17652f181006ed975304412aca02c12f6ab50cd026ef749a34c38e6cbfcf73e8'],
    },
  },
};