pragma solidity >0.8.0;

contract Chama {
    mapping(address => mapping(address => uint)) public funding;

    mapping(address => ChamaDetails) public chamas;

//Save details of chama members
    struct MembersList{
        address memberAddress;
        uint amount;
        string position;
    }

//Chama details struct
    struct ChamaDetails{
        bool chamaExists;
        uint fundingRaised;
        address[] contributorsList;
        MembersList[] memberList;
        uint target;
        uint equity;
        bool targetReached;
    }

//Create a new chama on the app
function createChama(address _chama,uint _target,uint _equity) public{
    require(chamas[_chama].chamaExists = false, "Chama already exists");
    chamas[_chama].chamaExists = true;
    chamas[_chama].target = _target;
    chamas[_chama].equity = _equity;
    chamas[_chama].targetReached = false;
}

//Emit event when the chama target is reached

event targetReachedForChama(address _chama);

//Buying equity in chama investment project
function buyEquity(address _contributor,address _chama,uint _amount) public {
    require(chamas[_chama].chamaExists == true && chamas[_chama].targetReached == false, "Chama has achieved its purpose and no longer exists" );
    if(chamas[_chama].fundingRaised + _amount > = [_chama].target){
        chamas[_chama].targetReached = true;
    }
    funding[_chama][_contributor] = funding[_chama][_contributor
] + _amount;
    chamas[_chama].fundingRaised = chamas[_chama].fundingRaised + _amount;
    chamas[_chama].contributorsList.push(_contributor
);

    if (chamas[_chama].targetReached){
        emit targetReachedForChama(_chama);
    }

    }

//Get total number of angels who bought equity in a chama investment project
//Can also be used for fetching the total number of investments
 function getcontributorsListLength(address _chama) public view returns(uint){
     return chamas[_chama].contributorsList.length;
 }

 //get the list of angels who bought equity in a chama project
function getcontributorsList(address _chama) public view returns(address[] memory){
return chamas[_chama].contributorsList;
}

//Join a chama or collaborate in a chama

function collab(address _member,address _chama,string memory _position,uint _amount) public{
    require(chamas[_chama].chamaExists == true, 'Chama not found');
    chamas[_chama].memberList.push(MembersList){
        memberAddress : _member,
        amount :  _amount,
        position : _position
    };
}
 
//Get collab details for a chama

function getCollabDetails(address _chama) public view returns (MembersList[] memory){
    return chamas[_chama].memberList;
}
}

