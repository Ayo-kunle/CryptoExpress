// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract TransactionRecord {
    uint256 public transactionCount;

    struct Transaction {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    Transaction[] private transactions;

    event Transfer(
        address indexed from,
        address indexed to,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    function addTransfer(
        address payable _receiver,
        uint256 _amount,
        string memory _message,
        string memory _keyword
    ) public {
        Transaction memory newTransaction = Transaction(
            msg.sender,
            _receiver,
            _amount,
            _message,
            block.timestamp,
            _keyword
        );
        transactions.push(newTransaction);
        transactionCount++;

        emit Transfer(
            msg.sender,
            _receiver,
            _amount,
            _message,
            block.timestamp,
            _keyword
        );
    }

    function getAllTransfers() public view returns (Transaction[] memory) {
        return transactions;
    }

    function getTransferCount() public view returns (uint256) {
        return transactionCount;
    }
}
