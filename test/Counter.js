const { expect } = require("chai");

describe("Counter", function () {
  it("should increment and reset correctly", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.waitForDeployment();

    expect(await counter.count()).to.equal(0);


    await counter.increment();
    expect(await counter.count()).to.equal(1);

    await counter.reset();
    expect(await counter.count()).to.equal(0);
  });
});