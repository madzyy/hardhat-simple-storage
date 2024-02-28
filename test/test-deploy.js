const { ethers } = require("hardhat");
const { assert, expect } = require("chai");

describe("Hardhat simple storage tests", () => {
	let SimpleStorageFactory, storageFactory;

	beforeEach(async () => {
		SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
		storageFactory = await SimpleStorageFactory.deploy();
	});

	it("should be equal to 0", async () => {
		const currentValue = await storageFactory.retrieve();
		const expectedValue = "0";
		assert.equal(currentValue.toString(), expectedValue);
	});

  it("should modify current value to stored value", async () => {
    const transactionResponse = await storageFactory.store("8")
    await transactionResponse.wait(1)

    const expectedValue = "8"
    const storedValue = await storageFactory.retrieve()

    assert.equal(expectedValue, storedValue.toString())
  })

});




// expect().to.equal()

// assert.equal()