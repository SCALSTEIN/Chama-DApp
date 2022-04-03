// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Chama {
    // Chama Manager will be responsible for calling some functions like loan()
    address public chamaManager;
    // Since I'm storing members in a mapping I need membersCount to keep track of the number of members
    uint256 public membersCount;
    // Monthly subscription
    uint256 public premium;

    // called once the contract is deployed
    constructor() {
        chamaManager = msg.sender;
    }

    struct Member {
        uint256 memberID;
        // Registration equals monthly premium a member will be subscribing to
        uint256 premium;
        address payable member;
        uint256 registrationDate;
        bool isActive;
        bool hasLoaned;
        bool hasEmergency;
    }

    mapping(uint256 => Member) public members;

    function joinChama() public payable returns (uint256 membersCount, uint256 registrationTime) {
        require(msg.value > 2 ether);
        premium = msg.value;
        uint256 registrationTime = block.timestamp;
        membersCount++;
        // membersCount will serve as memberID
        members[membersCount] = Member(
            membersCount,
            premium,
            payable(msg.sender),
            registrationTime,
            true,
            false,
            false
        );
    }

    function checkSubscriptionStatus(uint _membersCount) view public returns(bool){
        // Epoch Unix time equivalence of 30 days
        // I converted 30 days to Epoch Unix time equivalence i.e 408000
        require(block.timestamp == members[_membersCount].registrationDate + 408000);
        return(members[_membersCount].isActive = false);
    }

    function renewSubscription(uint _membersCount) public payable {
        require(!checkSubscriptionStatus(_membersCount));
        require(msg.value > 2 ether);
        members[_membersCount].isActive = true;
    }
}
