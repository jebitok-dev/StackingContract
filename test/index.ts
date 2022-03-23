import {expect} from "chai";
import {ethers} from "hardhat";
import {BoredApe} from "../typechain";

describe("BRT Token", function () {
  let boredApeContract: BoredApe;
  beforeEach(async () => {
    const BoredApe = await ethers.getContractFactory("BoredApe");
    const boredApe = await BoredApe.deploy("Bored Ape", "BRT");
    boredApeContract = await boredApe.deployed();
  });

  it("Should staking successfully", async function () {
    const [signer1, signer2, signer3] = await ethers.getSigners();

    let ownerBal = await boredApeContract.balanceOf(signer1.address);
    let personalBal = ethers.utils.formatEthers(ownerBal);
    expect(personalBal).to.equal("1000000.0");
  });

  it("Should stake successfully", async function () {
    const [signer1, signer2, signer3] = await ethers.getSigners();
    expect(boredApeContract.stakeBRT(100)).to.reverted;
  });

  it("Should staking successfully", async function () {
    const [signer1, signer2, signer3] = await ethers.getSigners();
    const approveTx = boredApeContract.approve(
      boredApeContract.address,
      ethers.utils.parseEther("100")
    );
    await approveTx.wait();
    const stakeTx = await boredApeContract.stakeBRT(
      ethers.utils.parseEther("100")
    );
    await stakeTx.wait();
    let newBal = await boredApeContract.balanceOf(signer1.address);
    let parseBal = ethers.utils.formatEthers(newBal);
    console.log("first", parseBal);
    expect(parseBal).to.lessThank("100000.0");
  });
});
