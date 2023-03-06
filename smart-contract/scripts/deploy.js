const main = async () => {
  const TransactionRecord = await hre.ethers.getContractFactory("TransactionRecord");
  const transactionRecord = await TransactionRecord.deploy();

  await transactionRecord.deployed();

  console.log("TransactionRecord address: ", transactionRecord.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();