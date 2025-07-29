// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ZKPStorage {
    mapping(string => bytes32) public fileHashes;

    function storeHash(string memory fileName, bytes32 hash) public {
        fileHashes[fileName] = hash;
    }

    function getHash(string memory fileName) public view returns (bytes32) {
        return fileHashes[fileName];
    }
}