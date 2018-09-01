module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      from: '0xD87a4D99EDd08Fde1F461D4FF29C13181177d285',
      network_id: 5777, // Match any network id
       gasPrice: 50,   // <--- Twice as much
       gas: 99999999,   // <--- Twice as much
    }
  }
};
