require("@nomicfoundation/hardhat-toolbox");
require("./tasks/block-number")
// require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "hardhat",
  gasReporter:{
    enabled: true
  },
  networks:{
    // rinkeby:{
    //   url:process.env.RINKEBY_RPC_URL,
    //   accounts: [process.env.RINKEBY_PRIVATE_KEY],
    //   chainId: 4
    // },
    localhost:{
      url: "http://127.0.0.1:8545/",
      // accounts: given by hardhat,
      chainId:31337
    }
  },
  // sourcify:{
  //   enabled: true
  // },
  // etherscan:{
  //   apiKey: process.env.ETHERSCAN_API_KEY
  // }
};
