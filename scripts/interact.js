// scripts/interact.js
async function main() {
    const [deployer] = await ethers.getSigners();
  
    // デプロイされたコントラクトアドレスに接続
    const counterAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.attach(counterAddress);
  
    // 現在の値を表示
    let current = await counter.count();
    console.log("Initial count:", current.toString());
  
    // increment を実行
    const tx = await counter.increment();
    await tx.wait(); // トランザクション完了を待機
  
    // 新しい値を表示
    current = await counter.count();
    console.log("After increment:", current.toString());
  
    // reset を実行
    const tx2 = await counter.reset();
    await tx2.wait();
  
    // 再び表示
    current = await counter.count();
    console.log("After reset:", current.toString());
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });