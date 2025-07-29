const fs = require("fs");
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const contractAddress = "デプロイされたアドレスに差し替えてください";
  const ZKPStorage = await ethers.getContractFactory("ZKPStorage");
  const storage = await ZKPStorage.attach(contractAddress);

  const proof = fs.readFileSync("proof.json");
  const hash = ethers.utils.keccak256(proof); // ファイル全体のKeccak256ハッシュ

  const tx = await storage.storeHash("proof", hash);
  await tx.wait();

  console.log("Stored hash:", hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});