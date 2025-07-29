require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter"); 

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  gasReporter: {
    enabled: true,        
    currency: "USD",       
   
  },
};