//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;

import './SimpleStorage.sol';
contract ExtraStorage is SimpleStorage{
    // to override functions use virtual and override keywords

    function store(uint256 _favoriteNumber) public override{
        favoriteNumber = _favoriteNumber + 5;
        
    }
}