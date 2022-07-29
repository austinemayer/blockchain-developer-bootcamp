import { ethers } from "hardhat";

async function main() {
  // Fetch Contract Deploy
  const Token = await ethers.getContractFactory("Token");

  // Deploy Contract
  const token = await Token.deploy();
  await token.deployed();
  console.log("Token Deployed To:", token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
