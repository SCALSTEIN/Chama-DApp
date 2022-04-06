pragma solidity ^0.4.17;

contract ChamaFactory {
    address[] public deployedChamas;

    function createChama
(uint minimum,string name,string description,string image,uint target) public {
        address newChama
     = new Chama
    (minimum, msg.sender,name,description,image,target);
        deployedChamas.push(newChama);
    }

    function getDeployedChamas() public view returns (address[]) {
        return deployedChamas;
    }
}


contract Chama {
  struct Request {
      string description;
      uint value;
      address recipient;
      bool complete;
      uint approvalCount;
      mapping(address => bool) approvals;
  }

  Request[] public requests;
  address public manager;
  uint public minimunContribution;
  string public ChamaName;
  string public ChamaDescription;
  string public imageUrl;
  uint public targetToAchieve;
  address[] public contributers;
  mapping(address => bool) public approvers;
  uint public approversCount;


  modifier restricted() {
      require(msg.sender == manager);
      _;
  }

  function Chama
(uint minimun, address creator,string name,string description,string image,uint target) public {
      manager = creator;
      minimunContribution = minimun;
      ChamaName=name;
      ChamaDescription=description;
      imageUrl=image;
      targetToAchieve=target;
  }

  function contibute() public payable {
      require(msg.value > minimunContribution );

      contributers.push(msg.sender);
      approvers[msg.sender] = true;
      approversCount++;
  }

  function createRequest(string description, uint value, address recipient) public restricted {
      Request memory newRequest = Request({
         description: description,
         value: value,
         recipient: recipient,
         complete: false,
         approvalCount: 0
      });

      requests.push(newRequest);
  }

  function approveRequest(uint index) public {
      require(approvers[msg.sender]);
      require(!requests[index].approvals[msg.sender]);

      requests[index].approvals[msg.sender] = true;
      requests[index].approvalCount++;
  }

  function finalizeRequest(uint index) public restricted{
      require(requests[index].approvalCount > (approversCount / 2));
      require(!requests[index].complete);

      requests[index].recipient.transfer(requests[index].value);
      requests[index].complete = true;

  }


    function getSummary() public view returns (uint,uint,uint,uint,address,string,string,string,uint) {
        return(
            minimunContribution,
            this.balance,
            requests.length,
            approversCount,
            manager,
            ChamaName,
            ChamaDescription,
            imageUrl,
            targetToAchieve
          );
    }

    function getRequestsCount() public view returns (uint){
        return requests.length;
    }
}
