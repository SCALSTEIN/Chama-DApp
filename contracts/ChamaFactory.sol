pragma solidity ^0.4.17;

contract Chama {
    struct Request {
        string description;
        uint256 value;
        address recipient;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint256 public minimumContribution;
    string public ChamaName;
    string public ChamaDescription;
    string public imageUrl;
    uint256 public targetToAchieve;
    address[] public contributors;
    // I feel like we'll be writing a lot to storage translating higher gas fees
    mapping(address => bool) public approvers;
    uint256 public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Chama(
        uint256 minimum,
        address creator,
        string name,
        string description,
        string image,
        uint256 target
    ) public {
        manager = creator;
        minimunContribution = minimun;
        ChamaName = name;
        ChamaDescription = description;
        imageUrl = image;
        targetToAchieve = target;
    }

    function contibute() public payable {
        require(msg.value > minimunContribution);

        contributers.push(msg.sender);
        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(
        string description,
        uint256 value,
        address recipient
    ) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint256 index) public {
        require(approvers[msg.sender]);
        require(!requests[index].approvals[msg.sender]);

        requests[index].approvals[msg.sender] = true;
        requests[index].approvalCount++;
    }

    function finalizeRequest(uint256 index) public restricted {
        require(requests[index].approvalCount > (approversCount / 2));
        require(!requests[index].complete);

        requests[index].recipient.transfer(requests[index].value);
        requests[index].complete = true;
    }

    function getSummary()
        public
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256,
            address,
            string,
            string,
            string,
            uint256
        )
    {
        return (
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

    function getRequestsCount() public view returns (uint256) {
        return requests.length;
    }
}



// ChamaFactory will be responsible for generating various chamas
contract ChamaFactory is Chama {
    // An array of deployedChamas addresses
    address[] public deployedChamas;

    constructor() Chama(
        uint256 minimum,
        string name,
        string description,
        string image,
        uint256 target
    ){
        address newChama = new Chama(
            minimum,
            msg.sender,
            name,
            description,
            image,
            target
        );
        deployedChamas.push(newChama);
    }

    function getDeployedChamas() public view returns (address[]) {
        return deployedChamas;
    }
}