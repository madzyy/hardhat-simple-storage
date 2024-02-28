// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.19;

contract SimpleStorage{

    uint256 favoriteNumber;
    Person person = Person({name: "Jessica", age: 30});

    Person[] peopleArray;

    mapping(string => uint256) nameToAge;

    struct Person{
        string name;
        uint256 age;
    }

    function store(uint256 _favoriteNumber) public virtual{
        favoriteNumber = _favoriteNumber;
    }
    
    function retrieve() public view returns(uint256){
        return favoriteNumber;
    }

    function addPerson(string memory _name, uint256 _age) public{
        peopleArray.push(Person(_name, _age));
    }
}







































// pragma solidity ^0.8.7;

// contract SimpleStorage {
//     uint256 public favoriteNumber;
//     People[] public people;
//     // People public person = People({favoriteNumber:2,
//     // name:"Cal"})

//     struct People {
//         uint256 favoriteNumber;
//         string name;
//     }

//     constructor() {}

//     function store(uint256 _favoriteNumber) public virtual {
//         favoriteNumber = _favoriteNumber;
//     }

//     function retrieve() public view returns (uint256) {
//         return favoriteNumber;
//     }

//     function addPerson(string memory _name, uint256 _favoriteNumber) public {
//         people.push(People(_favoriteNumber, _name));
//     }
// }
