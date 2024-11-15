const { network } = require("hardhat");
const { developmentChains, DECIMALS, INITIAL_ANSWER } = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  if (developmentChains.includes(network.name)) {
    log("Local network detected! Deploying mocks...");
    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator", // This must match the contract's name
      from: deployer,
      args: [DECIMALS, INITIAL_ANSWER], // Arguments for the constructor
      log: true,
    });
    log("Mocks deployed!");
    log("------------------------------------------");
  }
};

module.exports.tags = ["all", "mocks"];
