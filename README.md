# CryptoExpress
TransactionRecord Contract
This smart contract written in Solidity language version 0.8.0 enables the recording of transactions with additional metadata.

Contract details
TransactionRecord: The contract name.
uint256 public transactionCount: A public state variable that stores the total number of transactions in the transactions array.
struct Transaction: A struct that defines the transaction properties. It contains the sender and receiver addresses, the amount of cryptocurrency transferred, a message, a timestamp, and a keyword.
Transaction[] private transactions: A private dynamic array of transactions that stores all the transactions.
event Transfer: An event that emits every time a new transaction is added. It includes the sender and receiver addresses, the amount of cryptocurrency transferred, a message, a timestamp, and a keyword.
function addTransfer(...) public: A function that enables adding new transactions. It takes in the receiver address, the amount of cryptocurrency transferred, a message, and a keyword as inputs, and adds the new transaction to the transactions array. It also emits the Transfer event.
function getAllTransfers() public view returns (Transaction[] memory): A function that retrieves all the transactions stored in the contract.
function getTransferCount() public view returns (uint256): A function that returns the total number of transactions recorded.
License
This contract is released under the UNLICENSED SPDX-License-Identifier.

Smart contract address : 0xE5B53f0285521323540375Bbc1931C2Ad081114f
Network : Goerli
