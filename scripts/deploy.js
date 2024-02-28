const { ethers, network, run } = require("hardhat");

async function main() {
	const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
	console.log("deploying");
	const simpleStorage = await SimpleStorageFactory.deploy();
  const simpleStorageAddress = await simpleStorage.getAddress()
	console.log(`deployed contract to ${simpleStorageAddress}`);
	// console.log(network.config);

  if(network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY){
    await verify(simpleStorageAddress, [])
  }

  const currentFavoriteNumber = await simpleStorage.retrieve()
  console.log(`the current favorite number is ${currentFavoriteNumber.toString()}`)

  const transactionResponse = await simpleStorage.store(7)
  await transactionResponse.wait(1)
  const updatedValue = await simpleStorage.retrieve()
  console.log(`updated value is ${updatedValue}`)
}

async function verify(contractAddress, args) {
	console.log("verifying contract");
	try {
		await run("verify:verify", {
			address: contractAddress,
			constructorArguments: args,
		});
	} catch (e) {
		if (e.message.toLowerCase().includes("already verified")) {
			console.log("already verified");
		} else {
			console.log(e);
		}
	}
}
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});

