// SPDX-License-Identifier: MIT
pragma solidity ^0.4.17;

contract Chama {
    // Chama Managers will be required to create chamas and will be responsible for disbursing funds for emergency and loans
    // To be a chama Manager you'll have to a minimum of 3eth
    address public chamaManager1;
    address public chamaManager2;
    address public chamaManager3;
    address public chamaManager4;
    // Since I'm storing members in a mapping I need membersCount to keep track of the number of members
    uint256 public membersCount;
    uint256 chamaCount;
    
    struct Member {
        uint256 memberID;
        address member;
        uint chamaID;
        uint256 registrationDate;
        bool isActive;
        bool hasLoaned;
        bool hasEmergency;
        bool hasPaid;
    }

    // keeps track of the members of a specific chama
    mapping(uint256 => address) public membersToChama;
    // keeps track of the numbers of members of a specific chama
    mapping(address => uint256) chamaMembersCount;

    Member[] public members;

    struct ChamaDetails {
        uint256 chamaID;
        string _name;
        address chamaManager;
        uint256 registrationFee;
        uint256 premium;
        uint256 target;
        uint256 creationDate;
        // disbusrement period will be the amount of time it take before funds are disbursed i.e 1 month or a week
        uint256 disbursementPeriod;
    }

    mapping(uint256 => ChamaDetails) chamas;

    // The address that deploys this contract will be chamaManager1
   

    function Chama(
        string _nam,
        uint _registrationFee,
        uint _premium,
        uint _target,
        uint _reemittancePeriod
    ) public  {
        chamaCount++;
        chamaManager1 = msg.sender;
        uint time = block.timestamp;
        chamas[chamaCount] = ChamaDetails(
            chamaCount,
            _nam,
            chamaManager1,
            _registrationFee,
            _premium,
            _target,
            time,
            _reemittancePeriod
        );
        //return(chamaCount);
    }

    function createRandomChama(string _name, uint registrationFee, uint premium, uint target, uint _reemittancePeriod) public payable returns(uint, address) {
        // For one to be a chama Manager he or she must be willing to pay 3 ether
        require(msg.value >= 3 ether);
        require(chamaManager2 == address(0) || chamaManager3 == address(0) || chamaManager4 == address(0));
        // chamaAdd will be the Chama Address which will be equal to ChamaManager's address
        address chamaAdd;
        uint date;
        // chamaManager address will be the 
        if(chamaManager2 == address(0) || chamaManager3 == address(0) || chamaManager4 == address(0)){
            // assign to chamaManager2
            chamaManager2 = msg.sender;
            chamaAdd = chamaManager2;
        } else if(chamaManager3 == address(0) || chamaManager4 == address(0)){
            // assign to chamaManager3
            chamaManager3 = msg.sender;
            chamaAdd = chamaManager3;
        } else if(chamaManager4 == address(0)){
            // assign to chamaManager4
            chamaManager4 = msg.sender;
            chamaAdd = chamaManager4;
        } else {
            // stop creating a random chama
            return;
        }
        chamaCount++;
        date = block.timestamp;
        chamas[chamaCount] = ChamaDetails(
            chamaCount,
            _name,
            chamaAdd,
            registrationFee,
            premium,
            target,
            date,
            _reemittancePeriod
        );
        return(chamaCount, chamaAdd);
    }


    // chamaAddress will be the address of the chama's manager
    // in the front end application we'll have a list of available chamas with the addresses of their respective managers
    function joinChama(address chamaAddre, uint chamaCt ) public payable returns (uint256) {
        require(
            chamaAddre == chamaManager1 ||
            chamaAddre == chamaManager2 ||
            chamaAddre == chamaManager3 ||
            chamaAddre == chamaManager4
        );
        require(chamaMembersCount[chamaAddre] <= 12);
        require(msg.value >= chamas[chamaCt].registrationFee);
        uint256 registrationTime = block.timestamp;
        membersCount++;
        // membersCount will serve as memberID
        uint256 id = members.push(
            Member(
                membersCount,
                msg.sender,
                chamaCt,
                registrationTime,
                true,
                false,
                false,
                true
            )
        ) - 1;
        membersToChama[id] = chamaAddre;
        //chamaMembersCount[chamaAddre] = chamaMembersCount[chamaAddre].add(1);
        chamaMembersCount[chamaAddre] = membersCount;
        return (membersCount);
    }

    function checkSubscriptionStatus(uint256 _membersCount)
        public
        returns (bool)
    {
        // Epoch Unix time equivalence of 30 days
        // I converted 30 days to Epoch Unix time equivalence i.e 408000
        //require(members[_membersCount].hasPaid == false )
        //require(block.timestamp == members[_membersCount].registrationDate + 408000);
        // Need to add logic to check if he or she has paid
        //require(renewSubscription(_membersCount) == false);
        bool expired;
        if(block.timestamp == members[_membersCount].registrationDate + 408000){
            expired = true;
            return(expired);
        } else{
            expired = false;
            return(expired);
        }
    }

    function renewSubscription(uint256 _membersCount) public payable {
        require(checkSubscriptionStatus(_membersCount) == false);
        uint chama = members[_membersCount].chamaID;
        require(msg.value >= chamas[chama].premium);
        members[_membersCount].registrationDate = block.timestamp;
        members[_membersCount].isActive = true;
    }
}
