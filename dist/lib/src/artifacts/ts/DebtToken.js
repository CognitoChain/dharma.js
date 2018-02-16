"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebtToken = {
    contractName: "DebtToken",
    abi: [
        {
            constant: true,
            inputs: [],
            name: "getAuthorizedMintAgents",
            outputs: [
                {
                    name: "_agents",
                    type: "address[]",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "name",
            outputs: [
                {
                    name: "",
                    type: "string",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    name: "_tokenId",
                    type: "uint256",
                },
            ],
            name: "getApproved",
            outputs: [
                {
                    name: "_approved",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_to",
                    type: "address",
                },
                {
                    name: "_tokenId",
                    type: "uint256",
                },
            ],
            name: "approve",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "implementsERC721",
            outputs: [
                {
                    name: "_implementsERC721",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "totalSupply",
            outputs: [
                {
                    name: "_totalSupply",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_from",
                    type: "address",
                },
                {
                    name: "_to",
                    type: "address",
                },
                {
                    name: "_tokenId",
                    type: "uint256",
                },
            ],
            name: "transferFrom",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    name: "_owner",
                    type: "address",
                },
                {
                    name: "_index",
                    type: "uint256",
                },
            ],
            name: "tokenOfOwnerByIndex",
            outputs: [
                {
                    name: "_tokenId",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [],
            name: "unpause",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "paused",
            outputs: [
                {
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    name: "_tokenId",
                    type: "uint256",
                },
            ],
            name: "ownerOf",
            outputs: [
                {
                    name: "_owner",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    name: "_tokenId",
                    type: "uint256",
                },
            ],
            name: "tokenMetadata",
            outputs: [
                {
                    name: "_infoUrl",
                    type: "string",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    name: "_owner",
                    type: "address",
                },
            ],
            name: "balanceOf",
            outputs: [
                {
                    name: "_balance",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "registry",
            outputs: [
                {
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_agent",
                    type: "address",
                },
            ],
            name: "revokeMintAgentAuthorization",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [],
            name: "pause",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "owner",
            outputs: [
                {
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "symbol",
            outputs: [
                {
                    name: "",
                    type: "string",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_version",
                    type: "address",
                },
                {
                    name: "_beneficiary",
                    type: "address",
                },
                {
                    name: "_debtor",
                    type: "address",
                },
                {
                    name: "_underwriter",
                    type: "address",
                },
                {
                    name: "_underwriterRiskRating",
                    type: "uint256",
                },
                {
                    name: "_termsContract",
                    type: "address",
                },
                {
                    name: "_termsContractParameters",
                    type: "bytes32",
                },
                {
                    name: "_salt",
                    type: "uint256",
                },
            ],
            name: "create",
            outputs: [
                {
                    name: "_tokenId",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_agent",
                    type: "address",
                },
            ],
            name: "addAuthorizedMintAgent",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_to",
                    type: "address",
                },
                {
                    name: "_tokenId",
                    type: "uint256",
                },
            ],
            name: "transfer",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "numTokensTotal",
            outputs: [
                {
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    name: "_owner",
                    type: "address",
                },
            ],
            name: "getOwnerTokens",
            outputs: [
                {
                    name: "_tokenIds",
                    type: "uint256[]",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "transferOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    name: "_registry",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            anonymous: false,
            inputs: [],
            name: "Pause",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [],
            name: "Unpause",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    name: "previousOwner",
                    type: "address",
                },
                {
                    indexed: true,
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "OwnershipTransferred",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    name: "_to",
                    type: "address",
                },
                {
                    indexed: true,
                    name: "_tokenId",
                    type: "uint256",
                },
            ],
            name: "Mint",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    name: "_from",
                    type: "address",
                },
                {
                    indexed: true,
                    name: "_to",
                    type: "address",
                },
                {
                    indexed: false,
                    name: "_tokenId",
                    type: "uint256",
                },
            ],
            name: "Transfer",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    name: "_owner",
                    type: "address",
                },
                {
                    indexed: true,
                    name: "_approved",
                    type: "address",
                },
                {
                    indexed: false,
                    name: "_tokenId",
                    type: "uint256",
                },
            ],
            name: "Approval",
            type: "event",
        },
    ],
    bytecode: "0x60606040526000600860146101000a81548160ff0219169083151502179055506040805190810160405280600981526020017f44656274546f6b656e0000000000000000000000000000000000000000000000815250600990805190602001906200006c9291906200016d565b506040805190810160405280600381526020017f4444540000000000000000000000000000000000000000000000000000000000815250600a9080519060200190620000ba9291906200016d565b503415620000c757600080fd5b604051602080620027d88339810160405280805190602001909190505033600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200021c565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001b057805160ff1916838001178555620001e1565b82800160010185558215620001e1579182015b82811115620001e0578251825591602001919060010190620001c3565b5b509050620001f09190620001f4565b5090565b6200021991905b8082111562000215576000816000905550600101620001fb565b5090565b90565b6125ac806200022c6000396000f30060606040526004361061013e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630343e1221461014357806306fdde03146101ad578063081812fc1461023b578063095ea7b31461029e5780631051db34146102e057806318160ddd1461030d57806323b872dd146103365780632f745c59146103975780633f4ba83a146103ed5780635c975abb146104025780636352211e1461042f5780636914db601461049257806370a082311461052e5780637b1039991461057b57806381ac3fbc146105d05780638456cb59146106095780638da5cb5b1461061e57806395d89b411461067357806399f10501146107015780639c0d9c43146107e9578063a9059cbb14610822578063af129dc214610864578063d63d4af01461088d578063f2fde38b1461091b575b600080fd5b341561014e57600080fd5b610156610954565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561019957808201518184015260208101905061017e565b505050509050019250505060405180910390f35b34156101b857600080fd5b6101c061096b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102005780820151818401526020810190506101e5565b50505050905090810190601f16801561022d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561024657600080fd5b61025c6004808035906020019091905050610a09565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102a957600080fd5b6102de600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610a1b565b005b34156102eb57600080fd5b6102f3610bc8565b604051808215151515815260200191505060405180910390f35b341561031857600080fd5b610320610bd1565b6040518082815260200191505060405180910390f35b341561034157600080fd5b610395600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610bdb565b005b34156103a257600080fd5b6103d7600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610da6565b6040518082815260200191505060405180910390f35b34156103f857600080fd5b610400610dba565b005b341561040d57600080fd5b610415610e7a565b604051808215151515815260200191505060405180910390f35b341561043a57600080fd5b6104506004808035906020019091905050610e8d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561049d57600080fd5b6104b36004808035906020019091905050610e9f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104f35780820151818401526020810190506104d8565b50505050905090810190601f1680156105205780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561053957600080fd5b610565600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610f5a565b6040518082815260200191505060405180910390f35b341561058657600080fd5b61058e610fa6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156105db57600080fd5b610607600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610fcc565b005b341561061457600080fd5b61061c61103f565b005b341561062957600080fd5b610631611100565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561067e57600080fd5b610686611126565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106c65780820151818401526020810190506106ab565b50505050905090810190601f1680156106f35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561070c57600080fd5b6107d3600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035600019169060200190919080359060200190919050506111c4565b6040518082815260200191505060405180910390f35b34156107f457600080fd5b610820600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506113f6565b005b341561082d57600080fd5b610862600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611469565b005b341561086f57600080fd5b6108776115f1565b6040518082815260200191505060405180910390f35b341561089857600080fd5b6108c4600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506115f7565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156109075780820151818401526020810190506108ec565b505050509050019250505060405180910390f35b341561092657600080fd5b610952600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061160f565b005b61095c61246f565b610966600d611767565b905090565b60098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a015780601f106109d657610100808354040283529160200191610a01565b820191906000526020600020905b8154815290600101906020018083116109e457829003601f168201915b505050505081565b6000610a14826117ff565b9050919050565b80600073ffffffffffffffffffffffffffffffffffffffff16610a3d82610e8d565b73ffffffffffffffffffffffffffffffffffffffff1614151515610a6057600080fd5b610a6982610e8d565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610aa257600080fd5b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151515610add57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16610afe836117ff565b73ffffffffffffffffffffffffffffffffffffffff16141580610b4e5750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b15610bc357610b5d838361183c565b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b60006001905090565b6000600254905090565b80600073ffffffffffffffffffffffffffffffffffffffff16610bfd82610e8d565b73ffffffffffffffffffffffffffffffffffffffff1614151515610c2057600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16610c4083610a09565b73ffffffffffffffffffffffffffffffffffffffff16141515610c6257600080fd5b8373ffffffffffffffffffffffffffffffffffffffff16610c8283610e8d565b73ffffffffffffffffffffffffffffffffffffffff16141515610ca457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610ce057600080fd5b610ceb848484611866565b60008473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a38273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b6000610db28383611892565b905092915050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e1657600080fd5b600860149054906101000a900460ff161515610e3157600080fd5b6000600860146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600860149054906101000a900460ff1681565b6000610e98826118f4565b9050919050565b610ea7612483565b600560008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f4e5780601f10610f2357610100808354040283529160200191610f4e565b820191906000526020600020905b815481529060010190602001808311610f3157829003601f168201915b50505050509050919050565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050919050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561102857600080fd5b61103c81600d61193190919063ffffffff16565b50565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561109b57600080fd5b600860149054906101000a900460ff161515156110b757600080fd5b6001600860146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111bc5780601f10611191576101008083540402835291602001916111bc565b820191906000526020600020905b81548152906001019060200180831161119f57829003601f168201915b505050505081565b600080600860149054906101000a900460ff161515156111e357600080fd5b6111f733600d611b7390919063ffffffff16565b151561120257600080fd5b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cf9df5eb8b8b8b8b8b8b8b8b6000604051602001526040518963ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200198505050505050505050602060405180830381600087803b15156113b757600080fd5b6102c65a03f115156113c857600080fd5b5050506040518051905090506113e2898260019004611bcc565b806001900491505098975050505050505050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561145257600080fd5b61146681600d611cb490919063ffffffff16565b50565b80600073ffffffffffffffffffffffffffffffffffffffff1661148b82610e8d565b73ffffffffffffffffffffffffffffffffffffffff16141515156114ae57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166114ce83610e8d565b73ffffffffffffffffffffffffffffffffffffffff161415156114f057600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561152c57600080fd5b611537338484611866565b60003373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a38273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3505050565b60025481565b6115ff612497565b61160882611ddc565b9050919050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561166b57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156116a757600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61176f61246f565b816002018054806020026020016040519081016040528092919081815260200182805480156117f357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116117a9575b50505050509050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600860149054906101000a900460ff1615151561185857600080fd5b6118628282611e79565b5050565b600860149054906101000a900460ff1615151561188257600080fd5b61188d838383611ecf565b505050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811015156118e057fe5b906000526020600020900154905092915050565b60006003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008060006119408585611b73565b151561194b57600080fd5b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205492506001856002018054905003915084600201828154811015156119ad57fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508460000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808560020184815481101515611a3e57fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828560010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558460020182815481101515611b2357fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018560020181818054905003915081611b6b91906124ab565b505050505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b80600073ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611c3b57600080fd5b611c458284611efb565b611c4f83836120e0565b611c6560016002546121a790919063ffffffff16565b600281905550818373ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d412139688560405160405180910390a3505050565b611cbe82826121c5565b1515611cc957600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550816002018054806001018281611d3991906124d7565b9160005260206000209001600083909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018260020180549050038260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b611de4612497565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015611e6d57602002820191906000526020600020905b815481526020019060010190808311611e59575b50505050509050919050565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b611ed8816121da565b611ee28382612230565b611eec8183611efb565b611ef682826120e0565b505050565b8073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4846001026000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515611fb657600080fd5b6102c65a03f11515611fc757600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff161415156120d257600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635969549e83600102836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b15156120bd57600080fd5b6102c65a03f115156120ce57600080fd5b5050505b6120dc8282612419565b5050565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060010182816121319190612503565b9160005260206000209001600083909190915055506001600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490500360076000838152602001908152602001600020819055505050565b60008082840190508381101515156121bb57fe5b8091505092915050565b60006121d18383611b73565b15905092915050565b60006004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050925060076000858152602001908152602001600020549150600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600184038154811015156122df57fe5b906000526020600020900154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110151561233a57fe5b906000526020600020900181905550816007600083815260200190815260200160002081905550600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600184038154811015156123b057fe5b906000526020600020900160009055600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003612411919061252f565b505050505050565b806003600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b8154818355818115116124d2578183600052602060002091820191016124d1919061255b565b5b505050565b8154818355818115116124fe578183600052602060002091820191016124fd919061255b565b5b505050565b81548183558181151161252a57818360005260206000209182019101612529919061255b565b5b505050565b81548183558181151161255657818360005260206000209182019101612555919061255b565b5b505050565b61257d91905b80821115612579576000816000905550600101612561565b5090565b905600a165627a7a72305820ae548fc9be9b03fbf9dfe04f22eb0a8fc06aa46ba85b366c5d2599598f0926f10029",
    deployedBytecode: "0x60606040526004361061013e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630343e1221461014357806306fdde03146101ad578063081812fc1461023b578063095ea7b31461029e5780631051db34146102e057806318160ddd1461030d57806323b872dd146103365780632f745c59146103975780633f4ba83a146103ed5780635c975abb146104025780636352211e1461042f5780636914db601461049257806370a082311461052e5780637b1039991461057b57806381ac3fbc146105d05780638456cb59146106095780638da5cb5b1461061e57806395d89b411461067357806399f10501146107015780639c0d9c43146107e9578063a9059cbb14610822578063af129dc214610864578063d63d4af01461088d578063f2fde38b1461091b575b600080fd5b341561014e57600080fd5b610156610954565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561019957808201518184015260208101905061017e565b505050509050019250505060405180910390f35b34156101b857600080fd5b6101c061096b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102005780820151818401526020810190506101e5565b50505050905090810190601f16801561022d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561024657600080fd5b61025c6004808035906020019091905050610a09565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102a957600080fd5b6102de600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610a1b565b005b34156102eb57600080fd5b6102f3610bc8565b604051808215151515815260200191505060405180910390f35b341561031857600080fd5b610320610bd1565b6040518082815260200191505060405180910390f35b341561034157600080fd5b610395600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610bdb565b005b34156103a257600080fd5b6103d7600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610da6565b6040518082815260200191505060405180910390f35b34156103f857600080fd5b610400610dba565b005b341561040d57600080fd5b610415610e7a565b604051808215151515815260200191505060405180910390f35b341561043a57600080fd5b6104506004808035906020019091905050610e8d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561049d57600080fd5b6104b36004808035906020019091905050610e9f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104f35780820151818401526020810190506104d8565b50505050905090810190601f1680156105205780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561053957600080fd5b610565600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610f5a565b6040518082815260200191505060405180910390f35b341561058657600080fd5b61058e610fa6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156105db57600080fd5b610607600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610fcc565b005b341561061457600080fd5b61061c61103f565b005b341561062957600080fd5b610631611100565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561067e57600080fd5b610686611126565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106c65780820151818401526020810190506106ab565b50505050905090810190601f1680156106f35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561070c57600080fd5b6107d3600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035600019169060200190919080359060200190919050506111c4565b6040518082815260200191505060405180910390f35b34156107f457600080fd5b610820600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506113f6565b005b341561082d57600080fd5b610862600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611469565b005b341561086f57600080fd5b6108776115f1565b6040518082815260200191505060405180910390f35b341561089857600080fd5b6108c4600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506115f7565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156109075780820151818401526020810190506108ec565b505050509050019250505060405180910390f35b341561092657600080fd5b610952600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061160f565b005b61095c61246f565b610966600d611767565b905090565b60098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a015780601f106109d657610100808354040283529160200191610a01565b820191906000526020600020905b8154815290600101906020018083116109e457829003601f168201915b505050505081565b6000610a14826117ff565b9050919050565b80600073ffffffffffffffffffffffffffffffffffffffff16610a3d82610e8d565b73ffffffffffffffffffffffffffffffffffffffff1614151515610a6057600080fd5b610a6982610e8d565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610aa257600080fd5b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151515610add57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16610afe836117ff565b73ffffffffffffffffffffffffffffffffffffffff16141580610b4e5750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b15610bc357610b5d838361183c565b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b60006001905090565b6000600254905090565b80600073ffffffffffffffffffffffffffffffffffffffff16610bfd82610e8d565b73ffffffffffffffffffffffffffffffffffffffff1614151515610c2057600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16610c4083610a09565b73ffffffffffffffffffffffffffffffffffffffff16141515610c6257600080fd5b8373ffffffffffffffffffffffffffffffffffffffff16610c8283610e8d565b73ffffffffffffffffffffffffffffffffffffffff16141515610ca457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610ce057600080fd5b610ceb848484611866565b60008473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a38273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b6000610db28383611892565b905092915050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e1657600080fd5b600860149054906101000a900460ff161515610e3157600080fd5b6000600860146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600860149054906101000a900460ff1681565b6000610e98826118f4565b9050919050565b610ea7612483565b600560008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f4e5780601f10610f2357610100808354040283529160200191610f4e565b820191906000526020600020905b815481529060010190602001808311610f3157829003601f168201915b50505050509050919050565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050919050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561102857600080fd5b61103c81600d61193190919063ffffffff16565b50565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561109b57600080fd5b600860149054906101000a900460ff161515156110b757600080fd5b6001600860146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111bc5780601f10611191576101008083540402835291602001916111bc565b820191906000526020600020905b81548152906001019060200180831161119f57829003601f168201915b505050505081565b600080600860149054906101000a900460ff161515156111e357600080fd5b6111f733600d611b7390919063ffffffff16565b151561120257600080fd5b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cf9df5eb8b8b8b8b8b8b8b8b6000604051602001526040518963ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200198505050505050505050602060405180830381600087803b15156113b757600080fd5b6102c65a03f115156113c857600080fd5b5050506040518051905090506113e2898260019004611bcc565b806001900491505098975050505050505050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561145257600080fd5b61146681600d611cb490919063ffffffff16565b50565b80600073ffffffffffffffffffffffffffffffffffffffff1661148b82610e8d565b73ffffffffffffffffffffffffffffffffffffffff16141515156114ae57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166114ce83610e8d565b73ffffffffffffffffffffffffffffffffffffffff161415156114f057600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561152c57600080fd5b611537338484611866565b60003373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a38273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3505050565b60025481565b6115ff612497565b61160882611ddc565b9050919050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561166b57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156116a757600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61176f61246f565b816002018054806020026020016040519081016040528092919081815260200182805480156117f357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116117a9575b50505050509050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600860149054906101000a900460ff1615151561185857600080fd5b6118628282611e79565b5050565b600860149054906101000a900460ff1615151561188257600080fd5b61188d838383611ecf565b505050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811015156118e057fe5b906000526020600020900154905092915050565b60006003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008060006119408585611b73565b151561194b57600080fd5b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205492506001856002018054905003915084600201828154811015156119ad57fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508460000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808560020184815481101515611a3e57fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828560010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558460020182815481101515611b2357fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018560020181818054905003915081611b6b91906124ab565b505050505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b80600073ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611c3b57600080fd5b611c458284611efb565b611c4f83836120e0565b611c6560016002546121a790919063ffffffff16565b600281905550818373ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d412139688560405160405180910390a3505050565b611cbe82826121c5565b1515611cc957600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550816002018054806001018281611d3991906124d7565b9160005260206000209001600083909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018260020180549050038260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b611de4612497565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015611e6d57602002820191906000526020600020905b815481526020019060010190808311611e59575b50505050509050919050565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b611ed8816121da565b611ee28382612230565b611eec8183611efb565b611ef682826120e0565b505050565b8073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4846001026000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515611fb657600080fd5b6102c65a03f11515611fc757600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff161415156120d257600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635969549e83600102836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b15156120bd57600080fd5b6102c65a03f115156120ce57600080fd5b5050505b6120dc8282612419565b5050565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060010182816121319190612503565b9160005260206000209001600083909190915055506001600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490500360076000838152602001908152602001600020819055505050565b60008082840190508381101515156121bb57fe5b8091505092915050565b60006121d18383611b73565b15905092915050565b60006004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050925060076000858152602001908152602001600020549150600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600184038154811015156122df57fe5b906000526020600020900154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110151561233a57fe5b906000526020600020900181905550816007600083815260200190815260200160002081905550600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600184038154811015156123b057fe5b906000526020600020900160009055600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003612411919061252f565b505050505050565b806003600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b8154818355818115116124d2578183600052602060002091820191016124d1919061255b565b5b505050565b8154818355818115116124fe578183600052602060002091820191016124fd919061255b565b5b505050565b81548183558181151161252a57818360005260206000209182019101612529919061255b565b5b505050565b81548183558181151161255657818360005260206000209182019101612555919061255b565b5b505050565b61257d91905b80821115612579576000816000905550600101612561565b5090565b905600a165627a7a72305820ae548fc9be9b03fbf9dfe04f22eb0a8fc06aa46ba85b366c5d2599598f0926f10029",
    sourceMap: "1202:3538:2:-;;;268:5:24;247:26;;;;;;;;;;;;;;;;;;;;1323:33:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1362:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1746:108;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;509:10:26;501:5;;:18;;;;;;;;;;;;;;;;;;1837:9:2;1813:8;;:34;;;;;;;;;;;;;;;;;;1746:108;1202:3538;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    deployedSourceMap: "1202:3538:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3379:173;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;1323:33:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3684:150:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2064:377;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3549:129;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1458:132;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2447:397;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3200:183;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:24;;;;;;;;;;;;;;247:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1758:139:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1903:155;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1596:156:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1397:28:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3132:160;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85:24;;;;;;;;;;;;;;238:20:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1362:28:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2023:763:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2885:144;;;;;;;;;;;;;;;;;;;;;;;;;;;;2850:344:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;550:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3389:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;832:169:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;3379:173:2;3459:17;;:::i;:::-;3499:46;:24;:44;:46::i;:::-;3492:53;;3379:173;:::o;1323:33::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3684:150:23:-;3765:17;3805:22;3818:8;3805:12;:22::i;:::-;3798:29;;3684:150;;;:::o;2064:377::-;2148:8;1199:1;1170:31;;:17;1178:8;1170:7;:17::i;:::-;:31;;;;1162:40;;;;;;;;2194:17;2202:8;2194:7;:17::i;:::-;2180:31;;:10;:31;;;2172:40;;;;;;;;2244:3;2230:17;;:10;:17;;;;2222:26;;;;;;;;2297:1;2263:36;;:22;2276:8;2263:12;:22::i;:::-;:36;;;;:73;;;;2334:1;2319:17;;:3;:17;;;;2263:73;2259:176;;;2352:23;2361:3;2366:8;2352;:23::i;:::-;2410:3;2389:35;;2398:10;2389:35;;;2415:8;2389:35;;;;;;;;;;;;;;;;;;2259:176;2064:377;;;:::o;3549:129::-;3622:22;3667:4;3660:11;;3549:129;:::o;1458:132::-;1526:20;1569:14;;1562:21;;1458:132;:::o;2447:397::-;2551:8;1199:1;1170:31;;:17;1178:8;1170:7;:17::i;:::-;:31;;;;1162:40;;;;;;;;2608:10;2583:35;;:21;2595:8;2583:11;:21::i;:::-;:35;;;2575:44;;;;;;;;2658:5;2637:26;;:17;2645:8;2637:7;:17::i;:::-;:26;;;2629:35;;;;;;;;2697:1;2682:17;;:3;:17;;;;2674:26;;;;;;;;2711:47;2737:5;2744:3;2749:8;2711:25;:47::i;:::-;2785:1;2778:5;2769:28;;;2788:8;2769:28;;;;;;;;;;;;;;;;;;2823:3;2807:30;;2816:5;2807:30;;;2828:8;2807:30;;;;;;;;;;;;;;;;;;2447:397;;;;:::o;3200:183::-;3303:13;3339:37;3361:6;3369;3339:21;:37::i;:::-;3332:44;;3200:183;;;;:::o;833:87:24:-;653:5:26;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:24;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;247:26::-;;;;;;;;;;;;;:::o;1758:139:23:-;1835:14;1872:18;1881:8;1872;:18::i;:::-;1865:25;;1758:139;;;:::o;1903:155::-;1986:15;;:::i;:::-;2024:17;:27;2042:8;2024:27;;;;;;;;;;;2017:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1903:155;;;:::o;1596:156::-;1676:13;1712:18;:26;1731:6;1712:26;;;;;;;;;;;;;;;:33;;;;1705:40;;1596:156;;;:::o;1397:28:2:-;;;;;;;;;;;;;:::o;3132:160::-;653:5:26;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;3233:52:2;3278:6;3233:24;:44;;:52;;;;:::i;:::-;3132:160;:::o;666:85:24:-;653:5:26;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:24;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;238:20:26:-;;;;;;;;;;;;;:::o;1362:28:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2023:763::-;2341:13;2439:17;416:6:24;;;;;;;;;;;415:7;407:16;;;;;;;;2378:49:2;2416:10;2378:24;:37;;:49;;;;:::i;:::-;2370:58;;;;;;;;2459:8;;;;;;;;;;;:15;;;2488:8;2510:12;2536:7;2557:12;2583:22;2619:14;2647:24;2685:5;2459:241;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2439:261;;2711:35;2716:12;2735:9;2730:15;;;2711:4;:35::i;:::-;2769:9;2764:15;;;2757:22;;2023:763;;;;;;;;;;;:::o;2885:144::-;653:5:26;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;2980:42:2;3015:6;2980:24;:34;;:42;;;;:::i;:::-;2885:144;:::o;2850:344:23:-;2935:8;1199:1;1170:31;;:17;1178:8;1170:7;:17::i;:::-;:31;;;;1162:40;;;;;;;;2988:10;2967:31;;:17;2975:8;2967:7;:17::i;:::-;:31;;;2959:40;;;;;;;;3032:1;3017:17;;:3;:17;;;;3009:26;;;;;;;;3046:52;3072:10;3084:3;3089:8;3046:25;:52::i;:::-;3130:1;3118:10;3109:33;;;3133:8;3109:33;;;;;;;;;;;;;;;;;;3173:3;3152:35;;3161:10;3152:35;;;3178:8;3152:35;;;;;;;;;;;;;;;;;;2850:344;;;:::o;550:26::-;;;;:::o;3389:154::-;3474:16;;:::i;:::-;3513:23;3529:6;3513:15;:23::i;:::-;3506:30;;3389:154;;;:::o;832:169:26:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;2536:162:10:-;2638:9;;:::i;:::-;2670:4;:21;;2663:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2536:162;;;:::o;4413:165:23:-;4497:17;4537:24;:34;4562:8;4537:34;;;;;;;;;;;;;;;;;;;;;4530:41;;4413:165;;;:::o;4140:135:2:-;416:6:24;;;;;;;;;;;415:7;407:16;;;;;;;;4239:29:2;4254:3;4259:8;4239:14;:29::i;:::-;4140:135;;:::o;3735:221::-;416:6:24;;;;;;;;;;;415:7;407:16;;;;;;;;3896:53:2;3928:5;3935:3;3940:8;3896:31;:53::i;:::-;3735:221;;;:::o;4748:183:23:-;4855:12;4890:18;:26;4909:6;4890:26;;;;;;;;;;;;;;;4917:6;4890:34;;;;;;;;;;;;;;;;;;;4883:41;;4748:183;;;;:::o;4129:148::-;4209:14;4246;:24;4261:8;4246:24;;;;;;;;;;;;;;;;;;;;;4239:31;;4129:148;;;:::o;1118:1061:10:-;1433:25;1495:23;1563:19;1396:25;1409:4;1415:5;1396:12;:25::i;:::-;1388:34;;;;;;;;1461:4;:17;;:24;1479:5;1461:24;;;;;;;;;;;;;;;;1433:52;;1552:1;1521:4;:21;;:28;;;;:32;1495:58;;1585:4;:21;;1607:18;1585:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;1563:63;;1689:4;:15;;:22;1705:5;1689:22;;;;;;;;;;;;;;;;1682:29;;;;;;;;;;;1838:11;1792:4;:21;;1814:20;1792:43;;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;1953:20;1920:4;:17;;:30;1938:11;1920:30;;;;;;;;;;;;;;;:53;;;;1990:4;:17;;:24;2008:5;1990:24;;;;;;;;;;;;;;;1983:31;;;2088:4;:21;;2110:18;2088:41;;;;;;;;;;;;;;;;;;;2081:48;;;;;;;;;;;2171:1;2139:4;:21;;:33;;;;;;;;;;;;;;:::i;:::-;;1118:1061;;;;;:::o;2185:166::-;2295:4;2322;:15;;:22;2338:5;2322:22;;;;;;;;;;;;;;;;;;;;;;;;;2315:29;;2185:166;;;;:::o;532:288:22:-;626:8;505:1;469:38;;:14;:24;484:8;469:24;;;;;;;;;;;;;;;;;;;;;:38;;;461:47;;;;;;;;650:32;665:8;675:6;650:14;:32::i;:::-;692:39;714:6;722:8;692:21;:39::i;:::-;759:21;778:1;759:14;;:18;;:21;;;;:::i;:::-;742:14;:38;;;;804:8;796:6;791:22;;;;;;;;;;;;532:288;;;:::o;825:287:10:-;924:28;940:4;946:5;924:15;:28::i;:::-;916:37;;;;;;;;989:4;964;:15;;:22;980:5;964:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1003:4;:21;;:33;;;;;;;;;;;:::i;:::-;;;;;;;;;;1030:5;1003:33;;;;;;;;;;;;;;;;;;;;;;;1104:1;1073:4;:21;;:28;;;;:32;1046:4;:17;;:24;1064:5;1046:24;;;;;;;;;;;;;;;:59;;;;825:287;;:::o;4584:158:23:-;4672:14;;:::i;:::-;4709:18;:26;4728:6;4709:26;;;;;;;;;;;;;;;4702:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4584:158;;;:::o;4283:124::-;4397:3;4360:24;:34;4385:8;4360:34;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;4283:124;;:::o;3840:283::-;3949:29;3969:8;3949:19;:29::i;:::-;3988:43;4015:5;4022:8;3988:26;:43::i;:::-;4041:29;4056:8;4066:3;4041:14;:29::i;:::-;4080:36;4102:3;4107:8;4080:21;:36::i;:::-;3840:283;;;:::o;4473:265:2:-;4606:3;4560:49;;:8;;;;;;;;;;;:23;;;4592:8;4584:17;;4560:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:49;;;;4556:130;;;4625:8;;;;;;;;;;;:26;;;4660:8;4652:17;;4671:3;4625:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4556:130;4696:35;4717:8;4727:3;4696:20;:35::i;:::-;4473:265;;:::o;5204:237:23:-;5297:18;:26;5316:6;5297:26;;;;;;;;;;;;;;;:41;;;;;;;;;;;:::i;:::-;;;;;;;;;;5329:8;5297:41;;;;;;;5433:1;5397:18;:26;5416:6;5397:26;;;;;;;;;;;;;;;:33;;;;:37;5348:24;:34;5373:8;5348:34;;;;;;;;;;;:86;;;;5204:237;;:::o;1008:129:25:-;1066:7;1081:9;1097:1;1093;:5;1081:17;;1116:1;1111;:6;;1104:14;;;;;;1131:1;1124:8;;1008:129;;;;;:::o;2357:173:10:-;2470:4;2498:25;2511:4;2517:5;2498:12;:25::i;:::-;2497:26;2490:33;;2357:173;;;;:::o;4937:129:23:-;5057:1;5012:24;:34;5037:8;5012:34;;;;;;;;;;;;:47;;;;;;;;;;;;;;;;;;4937:129;:::o;5447:484::-;5545:11;5602:10;5659:14;5559:18;:26;5578:6;5559:26;;;;;;;;;;;;;;;:33;;;;5545:47;;5615:24;:34;5640:8;5615:34;;;;;;;;;;;;5602:47;;5676:18;:26;5695:6;5676:26;;;;;;;;;;;;;;;5712:1;5703:6;:10;5676:38;;;;;;;;;;;;;;;;;;;5659:55;;5761:9;5725:18;:26;5744:6;5725:26;;;;;;;;;;;;;;;5752:5;5725:33;;;;;;;;;;;;;;;;;;:45;;;;5818:5;5780:24;:35;5805:9;5780:35;;;;;;;;;;;:43;;;;5841:18;:26;5860:6;5841:26;;;;;;;;;;;;;;;5877:1;5868:6;:10;5841:38;;;;;;;;;;;;;;;;;;5834:45;;;5889:18;:26;5908:6;5889:26;;;;;;;;;;;;;;;:35;;;;;;;;;;;;:::i;:::-;;5447:484;;;;;:::o;5072:126::-;5185:6;5158:14;:24;5173:8;5158:24;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;5072:126;;:::o;1202:3538:2:-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
    source: '/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the "License");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an "AS IS" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport "./DebtRegistry.sol";\nimport "NonFungibleToken/contracts/MintableNonFungibleToken.sol";\nimport "zeppelin-solidity/contracts/lifecycle/Pausable.sol";\nimport "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";\n\n\n/**\n * The DebtToken contract governs all business logic for making a debt agreement\n * transferable as an ERC721 non-fungible token.  Additionally, the contract\n * allows authorized contracts to trigger the minting of a debt agreement token\n * and, in turn, the insertion of a debt issuance into the DebtRegsitry.\n *\n * Author: Nadav Hollander -- Github: nadavhollander\n */\ncontract DebtToken is MintableNonFungibleToken, Pausable {\n    using PermissionsLib for PermissionsLib.Permissions;\n\n    string public name  = "DebtToken";\n    string public symbol = "DDT";\n\n    DebtRegistry public registry;\n    uint internal brokeredTokenId;\n\n    PermissionsLib.Permissions internal tokenCreationPermissions;\n    PermissionsLib.Permissions internal tokenBrokeragePermissions;\n    PermissionsLib.Permissions internal tokenExchangePermissions;\n\n    /**\n     * Constructor that sets the address of the debt registry.\n     */\n    function DebtToken(address _registry)\n        public\n    {\n        registry = DebtRegistry(_registry);\n    }\n\n    /**\n     * Mints a unique debt token and inserts the associated issuance into\n     * the debt registry, if the calling address is authorized to do so.\n     */\n    function create(\n        address _version,\n        address _beneficiary,\n        address _debtor,\n        address _underwriter,\n        uint _underwriterRiskRating,\n        address _termsContract,\n        bytes32 _termsContractParameters,\n        uint _salt\n    )\n        public\n        whenNotPaused\n        returns (uint _tokenId)\n    {\n        require(tokenCreationPermissions.isAuthorized(msg.sender));\n\n        bytes32 entryHash = registry.insert(\n            _version,\n            _beneficiary,\n            _debtor,\n            _underwriter,\n            _underwriterRiskRating,\n            _termsContract,\n            _termsContractParameters,\n            _salt\n        );\n\n        mint(_beneficiary, uint(entryHash));\n\n        return uint(entryHash);\n    }\n\n    /**\n     * Adds an address to the list of agents authorized to mint debt tokens.\n     */\n    function addAuthorizedMintAgent(address _agent)\n        public\n        onlyOwner\n    {\n        tokenCreationPermissions.authorize(_agent);\n    }\n\n    /**\n     * Removes an address from the list of agents authorized to mint debt tokens\n     */\n    function revokeMintAgentAuthorization(address _agent)\n        public\n        onlyOwner\n    {\n        tokenCreationPermissions.revokeAuthorization(_agent);\n    }\n\n    /**\n     * Returns the list of agents authorized to mint debt tokens\n     */\n    function getAuthorizedMintAgents()\n        public\n        view\n        returns (address[] _agents)\n    {\n        return tokenCreationPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * We override the core transfer method of the parent non-fungible token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function _clearApprovalAndTransfer(\n        address _from,\n        address _to,\n        uint _tokenId\n    )\n        internal\n        whenNotPaused\n    {\n        super._clearApprovalAndTransfer(_from, _to, _tokenId);\n    }\n\n    /**\n     * We override the core approvals method of the parent non-fungible token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function _approve(address _to, uint _tokenId)\n        internal\n        whenNotPaused\n    {\n        super._approve(_to, _tokenId);\n    }\n\n\n    /**\n     * We oveerride the core ownership transfer method of the parent non-fungible token\n     * contract so that it mutates the debt registry every time a token is transferred\n     */\n    function _setTokenOwner(uint _tokenId, address _to)\n        internal\n    {\n        if (registry.getBeneficiary(bytes32(_tokenId)) != _to) {\n            registry.modifyBeneficiary(bytes32(_tokenId), _to);\n        }\n\n        super._setTokenOwner(_tokenId, _to);\n    }\n}\n',
    sourcePath: "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/DebtToken.sol",
    ast: {
        attributes: {
            absolutePath: "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/DebtToken.sol",
            exportedSymbols: {
                DebtToken: [1819],
            },
        },
        children: [
            {
                attributes: {
                    literals: ["solidity", "0.4", ".18"],
                },
                id: 1612,
                name: "PragmaDirective",
                src: "584:23:2",
            },
            {
                attributes: {
                    SourceUnit: 1611,
                    absolutePath: "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/DebtRegistry.sol",
                    file: "./DebtRegistry.sol",
                    scope: 1820,
                    symbolAliases: [null],
                    unitAlias: "",
                },
                id: 1613,
                name: "ImportDirective",
                src: "609:28:2",
            },
            {
                attributes: {
                    SourceUnit: 4644,
                    absolutePath: "NonFungibleToken/contracts/MintableNonFungibleToken.sol",
                    file: "NonFungibleToken/contracts/MintableNonFungibleToken.sol",
                    scope: 1820,
                    symbolAliases: [null],
                    unitAlias: "",
                },
                id: 1614,
                name: "ImportDirective",
                src: "638:65:2",
            },
            {
                attributes: {
                    SourceUnit: 5261,
                    absolutePath: "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
                    file: "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
                    scope: 1820,
                    symbolAliases: [null],
                    unitAlias: "",
                },
                id: 1615,
                name: "ImportDirective",
                src: "704:60:2",
            },
            {
                attributes: {
                    SourceUnit: 5554,
                    absolutePath: "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
                    file: "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
                    scope: 1820,
                    symbolAliases: [null],
                    unitAlias: "",
                },
                id: 1616,
                name: "ImportDirective",
                src: "765:59:2",
            },
            {
                attributes: {
                    contractDependencies: [4505, 4578, 4643, 5200, 5260, 5414],
                    contractKind: "contract",
                    documentation: "The DebtToken contract governs all business logic for making a debt agreement\ntransferable as an ERC721 non-fungible token.  Additionally, the contract\nallows authorized contracts to trigger the minting of a debt agreement token\nand, in turn, the insertion of a debt issuance into the DebtRegsitry.\n * Author: Nadav Hollander -- Github: nadavhollander",
                    fullyImplemented: true,
                    linearizedBaseContracts: [1819, 5260, 5414, 4643, 5200, 4505, 4578],
                    name: "DebtToken",
                    scope: 1820,
                },
                children: [
                    {
                        attributes: {
                            arguments: [null],
                        },
                        children: [
                            {
                                attributes: {
                                    contractScope: null,
                                    name: "MintableNonFungibleToken",
                                    referencedDeclaration: 4643,
                                    type: "contract MintableNonFungibleToken",
                                },
                                id: 1617,
                                name: "UserDefinedTypeName",
                                src: "1224:24:2",
                            },
                        ],
                        id: 1618,
                        name: "InheritanceSpecifier",
                        src: "1224:24:2",
                    },
                    {
                        attributes: {
                            arguments: [null],
                        },
                        children: [
                            {
                                attributes: {
                                    contractScope: null,
                                    name: "Pausable",
                                    referencedDeclaration: 5260,
                                    type: "contract Pausable",
                                },
                                id: 1619,
                                name: "UserDefinedTypeName",
                                src: "1250:8:2",
                            },
                        ],
                        id: 1620,
                        name: "InheritanceSpecifier",
                        src: "1250:8:2",
                    },
                    {
                        children: [
                            {
                                attributes: {
                                    contractScope: null,
                                    name: "PermissionsLib",
                                    referencedDeclaration: 2766,
                                    type: "library PermissionsLib",
                                },
                                id: 1621,
                                name: "UserDefinedTypeName",
                                src: "1271:14:2",
                            },
                            {
                                attributes: {
                                    contractScope: null,
                                    name: "PermissionsLib.Permissions",
                                    referencedDeclaration: 2600,
                                    type: "struct PermissionsLib.Permissions storage pointer",
                                },
                                id: 1622,
                                name: "UserDefinedTypeName",
                                src: "1290:26:2",
                            },
                        ],
                        id: 1623,
                        name: "UsingForDirective",
                        src: "1265:52:2",
                    },
                    {
                        attributes: {
                            constant: false,
                            name: "name",
                            scope: 1819,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "string storage ref",
                            visibility: "public",
                        },
                        children: [
                            {
                                attributes: {
                                    name: "string",
                                    type: "string storage pointer",
                                },
                                id: 1624,
                                name: "ElementaryTypeName",
                                src: "1323:6:2",
                            },
                            {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "44656274546f6b656e",
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    lValueRequested: false,
                                    subdenomination: null,
                                    token: "string",
                                    type: 'literal_string "DebtToken"',
                                    value: "DebtToken",
                                },
                                id: 1625,
                                name: "Literal",
                                src: "1345:11:2",
                            },
                        ],
                        id: 1626,
                        name: "VariableDeclaration",
                        src: "1323:33:2",
                    },
                    {
                        attributes: {
                            constant: false,
                            name: "symbol",
                            scope: 1819,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "string storage ref",
                            visibility: "public",
                        },
                        children: [
                            {
                                attributes: {
                                    name: "string",
                                    type: "string storage pointer",
                                },
                                id: 1627,
                                name: "ElementaryTypeName",
                                src: "1362:6:2",
                            },
                            {
                                attributes: {
                                    argumentTypes: null,
                                    hexvalue: "444454",
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    lValueRequested: false,
                                    subdenomination: null,
                                    token: "string",
                                    type: 'literal_string "DDT"',
                                    value: "DDT",
                                },
                                id: 1628,
                                name: "Literal",
                                src: "1385:5:2",
                            },
                        ],
                        id: 1629,
                        name: "VariableDeclaration",
                        src: "1362:28:2",
                    },
                    {
                        attributes: {
                            constant: false,
                            name: "registry",
                            scope: 1819,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "contract DebtRegistry",
                            value: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                attributes: {
                                    contractScope: null,
                                    name: "DebtRegistry",
                                    referencedDeclaration: 1610,
                                    type: "contract DebtRegistry",
                                },
                                id: 1630,
                                name: "UserDefinedTypeName",
                                src: "1397:12:2",
                            },
                        ],
                        id: 1631,
                        name: "VariableDeclaration",
                        src: "1397:28:2",
                    },
                    {
                        attributes: {
                            constant: false,
                            name: "brokeredTokenId",
                            scope: 1819,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "internal",
                        },
                        children: [
                            {
                                attributes: {
                                    name: "uint",
                                    type: "uint256",
                                },
                                id: 1632,
                                name: "ElementaryTypeName",
                                src: "1431:4:2",
                            },
                        ],
                        id: 1633,
                        name: "VariableDeclaration",
                        src: "1431:29:2",
                    },
                    {
                        attributes: {
                            constant: false,
                            name: "tokenCreationPermissions",
                            scope: 1819,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "struct PermissionsLib.Permissions storage ref",
                            value: null,
                            visibility: "internal",
                        },
                        children: [
                            {
                                attributes: {
                                    contractScope: null,
                                    name: "PermissionsLib.Permissions",
                                    referencedDeclaration: 2600,
                                    type: "struct PermissionsLib.Permissions storage pointer",
                                },
                                id: 1634,
                                name: "UserDefinedTypeName",
                                src: "1467:26:2",
                            },
                        ],
                        id: 1635,
                        name: "VariableDeclaration",
                        src: "1467:60:2",
                    },
                    {
                        attributes: {
                            constant: false,
                            name: "tokenBrokeragePermissions",
                            scope: 1819,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "struct PermissionsLib.Permissions storage ref",
                            value: null,
                            visibility: "internal",
                        },
                        children: [
                            {
                                attributes: {
                                    contractScope: null,
                                    name: "PermissionsLib.Permissions",
                                    referencedDeclaration: 2600,
                                    type: "struct PermissionsLib.Permissions storage pointer",
                                },
                                id: 1636,
                                name: "UserDefinedTypeName",
                                src: "1533:26:2",
                            },
                        ],
                        id: 1637,
                        name: "VariableDeclaration",
                        src: "1533:61:2",
                    },
                    {
                        attributes: {
                            constant: false,
                            name: "tokenExchangePermissions",
                            scope: 1819,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "struct PermissionsLib.Permissions storage ref",
                            value: null,
                            visibility: "internal",
                        },
                        children: [
                            {
                                attributes: {
                                    contractScope: null,
                                    name: "PermissionsLib.Permissions",
                                    referencedDeclaration: 2600,
                                    type: "struct PermissionsLib.Permissions storage pointer",
                                },
                                id: 1638,
                                name: "UserDefinedTypeName",
                                src: "1600:26:2",
                            },
                        ],
                        id: 1639,
                        name: "VariableDeclaration",
                        src: "1600:60:2",
                    },
                    {
                        attributes: {
                            constant: false,
                            implemented: true,
                            isConstructor: true,
                            modifiers: [null],
                            name: "DebtToken",
                            payable: false,
                            scope: 1819,
                            stateMutability: "nonpayable",
                            superFunction: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_registry",
                                            scope: 1651,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 1640,
                                                name: "ElementaryTypeName",
                                                src: "1765:7:2",
                                            },
                                        ],
                                        id: 1641,
                                        name: "VariableDeclaration",
                                        src: "1765:17:2",
                                    },
                                ],
                                id: 1642,
                                name: "ParameterList",
                                src: "1764:19:2",
                            },
                            {
                                attributes: {
                                    parameters: [null],
                                },
                                children: [],
                                id: 1643,
                                name: "ParameterList",
                                src: "1803:0:2",
                            },
                            {
                                children: [
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "=",
                                                    type: "contract DebtRegistry",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1631,
                                                            type: "contract DebtRegistry",
                                                            value: "registry",
                                                        },
                                                        id: 1644,
                                                        name: "Identifier",
                                                        src: "1813:8:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            isStructConstructorCall: false,
                                                            lValueRequested: false,
                                                            names: [null],
                                                            type: "contract DebtRegistry",
                                                            type_conversion: true,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: [
                                                                        {
                                                                            typeIdentifier: "t_address",
                                                                            typeString: "address",
                                                                        },
                                                                    ],
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1610,
                                                                    type: "type(contract DebtRegistry)",
                                                                    value: "DebtRegistry",
                                                                },
                                                                id: 1645,
                                                                name: "Identifier",
                                                                src: "1824:12:2",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1641,
                                                                    type: "address",
                                                                    value: "_registry",
                                                                },
                                                                id: 1646,
                                                                name: "Identifier",
                                                                src: "1837:9:2",
                                                            },
                                                        ],
                                                        id: 1647,
                                                        name: "FunctionCall",
                                                        src: "1824:23:2",
                                                    },
                                                ],
                                                id: 1648,
                                                name: "Assignment",
                                                src: "1813:34:2",
                                            },
                                        ],
                                        id: 1649,
                                        name: "ExpressionStatement",
                                        src: "1813:34:2",
                                    },
                                ],
                                id: 1650,
                                name: "Block",
                                src: "1803:51:2",
                            },
                        ],
                        id: 1651,
                        name: "FunctionDefinition",
                        src: "1746:108:2",
                    },
                    {
                        attributes: {
                            constant: false,
                            implemented: true,
                            isConstructor: false,
                            name: "create",
                            payable: false,
                            scope: 1819,
                            stateMutability: "nonpayable",
                            superFunction: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_version",
                                            scope: 1708,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 1652,
                                                name: "ElementaryTypeName",
                                                src: "2048:7:2",
                                            },
                                        ],
                                        id: 1653,
                                        name: "VariableDeclaration",
                                        src: "2048:16:2",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_beneficiary",
                                            scope: 1708,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 1654,
                                                name: "ElementaryTypeName",
                                                src: "2074:7:2",
                                            },
                                        ],
                                        id: 1655,
                                        name: "VariableDeclaration",
                                        src: "2074:20:2",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_debtor",
                                            scope: 1708,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 1656,
                                                name: "ElementaryTypeName",
                                                src: "2104:7:2",
                                            },
                                        ],
                                        id: 1657,
                                        name: "VariableDeclaration",
                                        src: "2104:15:2",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_underwriter",
                                            scope: 1708,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 1658,
                                                name: "ElementaryTypeName",
                                                src: "2129:7:2",
                                            },
                                        ],
                                        id: 1659,
                                        name: "VariableDeclaration",
                                        src: "2129:20:2",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_underwriterRiskRating",
                                            scope: 1708,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint256",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint",
                                                    type: "uint256",
                                                },
                                                id: 1660,
                                                name: "ElementaryTypeName",
                                                src: "2159:4:2",
                                            },
                                        ],
                                        id: 1661,
                                        name: "VariableDeclaration",
                                        src: "2159:27:2",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_termsContract",
                                            scope: 1708,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 1662,
                                                name: "ElementaryTypeName",
                                                src: "2196:7:2",
                                            },
                                        ],
                                        id: 1663,
                                        name: "VariableDeclaration",
                                        src: "2196:22:2",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_termsContractParameters",
                                            scope: 1708,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "bytes32",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "bytes32",
                                                    type: "bytes32",
                                                },
                                                id: 1664,
                                                name: "ElementaryTypeName",
                                                src: "2228:7:2",
                                            },
                                        ],
                                        id: 1665,
                                        name: "VariableDeclaration",
                                        src: "2228:32:2",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_salt",
                                            scope: 1708,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint256",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint",
                                                    type: "uint256",
                                                },
                                                id: 1666,
                                                name: "ElementaryTypeName",
                                                src: "2270:4:2",
                                            },
                                        ],
                                        id: 1667,
                                        name: "VariableDeclaration",
                                        src: "2270:10:2",
                                    },
                                ],
                                id: 1668,
                                name: "ParameterList",
                                src: "2038:248:2",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_tokenId",
                                            scope: 1708,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint256",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint",
                                                    type: "uint256",
                                                },
                                                id: 1671,
                                                name: "ElementaryTypeName",
                                                src: "2341:4:2",
                                            },
                                        ],
                                        id: 1672,
                                        name: "VariableDeclaration",
                                        src: "2341:13:2",
                                    },
                                ],
                                id: 1673,
                                name: "ParameterList",
                                src: "2340:15:2",
                            },
                            {
                                attributes: {
                                    arguments: [null],
                                },
                                children: [
                                    {
                                        attributes: {
                                            argumentTypes: null,
                                            overloadedDeclarations: [null],
                                            referencedDeclaration: 5221,
                                            type: "modifier ()",
                                            value: "whenNotPaused",
                                        },
                                        id: 1669,
                                        name: "Identifier",
                                        src: "2310:13:2",
                                    },
                                ],
                                id: 1670,
                                name: "ModifierInvocation",
                                src: "2310:13:2",
                            },
                            {
                                children: [
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "tuple()",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_bool",
                                                                    typeString: "bool",
                                                                },
                                                            ],
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 5941,
                                                            type: "function (bool) pure",
                                                            value: "require",
                                                        },
                                                        id: 1674,
                                                        name: "Identifier",
                                                        src: "2370:7:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            isStructConstructorCall: false,
                                                            lValueRequested: false,
                                                            names: [null],
                                                            type: "bool",
                                                            type_conversion: false,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: [
                                                                        {
                                                                            typeIdentifier: "t_address",
                                                                            typeString: "address",
                                                                        },
                                                                    ],
                                                                    isConstant: false,
                                                                    isLValue: true,
                                                                    isPure: false,
                                                                    lValueRequested: false,
                                                                    member_name: "isAuthorized",
                                                                    referencedDeclaration: 2737,
                                                                    type: "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 1635,
                                                                            type: "struct PermissionsLib.Permissions storage ref",
                                                                            value: "tokenCreationPermissions",
                                                                        },
                                                                        id: 1675,
                                                                        name: "Identifier",
                                                                        src: "2378:24:2",
                                                                    },
                                                                ],
                                                                id: 1676,
                                                                name: "MemberAccess",
                                                                src: "2378:37:2",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: false,
                                                                    lValueRequested: false,
                                                                    member_name: "sender",
                                                                    referencedDeclaration: null,
                                                                    type: "address",
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 5938,
                                                                            type: "msg",
                                                                            value: "msg",
                                                                        },
                                                                        id: 1677,
                                                                        name: "Identifier",
                                                                        src: "2416:3:2",
                                                                    },
                                                                ],
                                                                id: 1678,
                                                                name: "MemberAccess",
                                                                src: "2416:10:2",
                                                            },
                                                        ],
                                                        id: 1679,
                                                        name: "FunctionCall",
                                                        src: "2378:49:2",
                                                    },
                                                ],
                                                id: 1680,
                                                name: "FunctionCall",
                                                src: "2370:58:2",
                                            },
                                        ],
                                        id: 1681,
                                        name: "ExpressionStatement",
                                        src: "2370:58:2",
                                    },
                                    {
                                        attributes: {
                                            assignments: [1683],
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    constant: false,
                                                    name: "entryHash",
                                                    scope: 1708,
                                                    stateVariable: false,
                                                    storageLocation: "default",
                                                    type: "bytes32",
                                                    value: null,
                                                    visibility: "internal",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            name: "bytes32",
                                                            type: "bytes32",
                                                        },
                                                        id: 1682,
                                                        name: "ElementaryTypeName",
                                                        src: "2439:7:2",
                                                    },
                                                ],
                                                id: 1683,
                                                name: "VariableDeclaration",
                                                src: "2439:17:2",
                                            },
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "bytes32",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_uint256",
                                                                    typeString: "uint256",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_bytes32",
                                                                    typeString: "bytes32",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_uint256",
                                                                    typeString: "uint256",
                                                                },
                                                            ],
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name: "insert",
                                                            referencedDeclaration: 1328,
                                                            type: "function (address,address,address,address,uint256,address,bytes32,uint256) external returns (bytes32)",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1631,
                                                                    type: "contract DebtRegistry",
                                                                    value: "registry",
                                                                },
                                                                id: 1684,
                                                                name: "Identifier",
                                                                src: "2459:8:2",
                                                            },
                                                        ],
                                                        id: 1685,
                                                        name: "MemberAccess",
                                                        src: "2459:15:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1653,
                                                            type: "address",
                                                            value: "_version",
                                                        },
                                                        id: 1686,
                                                        name: "Identifier",
                                                        src: "2488:8:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1655,
                                                            type: "address",
                                                            value: "_beneficiary",
                                                        },
                                                        id: 1687,
                                                        name: "Identifier",
                                                        src: "2510:12:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1657,
                                                            type: "address",
                                                            value: "_debtor",
                                                        },
                                                        id: 1688,
                                                        name: "Identifier",
                                                        src: "2536:7:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1659,
                                                            type: "address",
                                                            value: "_underwriter",
                                                        },
                                                        id: 1689,
                                                        name: "Identifier",
                                                        src: "2557:12:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1661,
                                                            type: "uint256",
                                                            value: "_underwriterRiskRating",
                                                        },
                                                        id: 1690,
                                                        name: "Identifier",
                                                        src: "2583:22:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1663,
                                                            type: "address",
                                                            value: "_termsContract",
                                                        },
                                                        id: 1691,
                                                        name: "Identifier",
                                                        src: "2619:14:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1665,
                                                            type: "bytes32",
                                                            value: "_termsContractParameters",
                                                        },
                                                        id: 1692,
                                                        name: "Identifier",
                                                        src: "2647:24:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1667,
                                                            type: "uint256",
                                                            value: "_salt",
                                                        },
                                                        id: 1693,
                                                        name: "Identifier",
                                                        src: "2685:5:2",
                                                    },
                                                ],
                                                id: 1694,
                                                name: "FunctionCall",
                                                src: "2459:241:2",
                                            },
                                        ],
                                        id: 1695,
                                        name: "VariableDeclarationStatement",
                                        src: "2439:261:2",
                                    },
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "tuple()",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_uint256",
                                                                    typeString: "uint256",
                                                                },
                                                            ],
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 4642,
                                                            type: "function (address,uint256)",
                                                            value: "mint",
                                                        },
                                                        id: 1696,
                                                        name: "Identifier",
                                                        src: "2711:4:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1655,
                                                            type: "address",
                                                            value: "_beneficiary",
                                                        },
                                                        id: 1697,
                                                        name: "Identifier",
                                                        src: "2716:12:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            isStructConstructorCall: false,
                                                            lValueRequested: false,
                                                            names: [null],
                                                            type: "uint256",
                                                            type_conversion: true,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: [
                                                                        {
                                                                            typeIdentifier: "t_bytes32",
                                                                            typeString: "bytes32",
                                                                        },
                                                                    ],
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    lValueRequested: false,
                                                                    type: "type(uint256)",
                                                                    value: "uint",
                                                                },
                                                                id: 1698,
                                                                name: "ElementaryTypeNameExpression",
                                                                src: "2730:4:2",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1683,
                                                                    type: "bytes32",
                                                                    value: "entryHash",
                                                                },
                                                                id: 1699,
                                                                name: "Identifier",
                                                                src: "2735:9:2",
                                                            },
                                                        ],
                                                        id: 1700,
                                                        name: "FunctionCall",
                                                        src: "2730:15:2",
                                                    },
                                                ],
                                                id: 1701,
                                                name: "FunctionCall",
                                                src: "2711:35:2",
                                            },
                                        ],
                                        id: 1702,
                                        name: "ExpressionStatement",
                                        src: "2711:35:2",
                                    },
                                    {
                                        attributes: {
                                            functionReturnParameters: 1673,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "uint256",
                                                    type_conversion: true,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_bytes32",
                                                                    typeString: "bytes32",
                                                                },
                                                            ],
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: true,
                                                            lValueRequested: false,
                                                            type: "type(uint256)",
                                                            value: "uint",
                                                        },
                                                        id: 1703,
                                                        name: "ElementaryTypeNameExpression",
                                                        src: "2764:4:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1683,
                                                            type: "bytes32",
                                                            value: "entryHash",
                                                        },
                                                        id: 1704,
                                                        name: "Identifier",
                                                        src: "2769:9:2",
                                                    },
                                                ],
                                                id: 1705,
                                                name: "FunctionCall",
                                                src: "2764:15:2",
                                            },
                                        ],
                                        id: 1706,
                                        name: "Return",
                                        src: "2757:22:2",
                                    },
                                ],
                                id: 1707,
                                name: "Block",
                                src: "2360:426:2",
                            },
                        ],
                        id: 1708,
                        name: "FunctionDefinition",
                        src: "2023:763:2",
                    },
                    {
                        attributes: {
                            constant: false,
                            implemented: true,
                            isConstructor: false,
                            name: "addAuthorizedMintAgent",
                            payable: false,
                            scope: 1819,
                            stateMutability: "nonpayable",
                            superFunction: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_agent",
                                            scope: 1722,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 1709,
                                                name: "ElementaryTypeName",
                                                src: "2917:7:2",
                                            },
                                        ],
                                        id: 1710,
                                        name: "VariableDeclaration",
                                        src: "2917:14:2",
                                    },
                                ],
                                id: 1711,
                                name: "ParameterList",
                                src: "2916:16:2",
                            },
                            {
                                attributes: {
                                    parameters: [null],
                                },
                                children: [],
                                id: 1714,
                                name: "ParameterList",
                                src: "2970:0:2",
                            },
                            {
                                attributes: {
                                    arguments: [null],
                                },
                                children: [
                                    {
                                        attributes: {
                                            argumentTypes: null,
                                            overloadedDeclarations: [null],
                                            referencedDeclaration: 5388,
                                            type: "modifier ()",
                                            value: "onlyOwner",
                                        },
                                        id: 1712,
                                        name: "Identifier",
                                        src: "2956:9:2",
                                    },
                                ],
                                id: 1713,
                                name: "ModifierInvocation",
                                src: "2956:9:2",
                            },
                            {
                                children: [
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "tuple()",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                            ],
                                                            isConstant: false,
                                                            isLValue: true,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name: "authorize",
                                                            referencedDeclaration: 2643,
                                                            type: "function (struct PermissionsLib.Permissions storage pointer,address)",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1635,
                                                                    type: "struct PermissionsLib.Permissions storage ref",
                                                                    value: "tokenCreationPermissions",
                                                                },
                                                                id: 1715,
                                                                name: "Identifier",
                                                                src: "2980:24:2",
                                                            },
                                                        ],
                                                        id: 1717,
                                                        name: "MemberAccess",
                                                        src: "2980:34:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1710,
                                                            type: "address",
                                                            value: "_agent",
                                                        },
                                                        id: 1718,
                                                        name: "Identifier",
                                                        src: "3015:6:2",
                                                    },
                                                ],
                                                id: 1719,
                                                name: "FunctionCall",
                                                src: "2980:42:2",
                                            },
                                        ],
                                        id: 1720,
                                        name: "ExpressionStatement",
                                        src: "2980:42:2",
                                    },
                                ],
                                id: 1721,
                                name: "Block",
                                src: "2970:59:2",
                            },
                        ],
                        id: 1722,
                        name: "FunctionDefinition",
                        src: "2885:144:2",
                    },
                    {
                        attributes: {
                            constant: false,
                            implemented: true,
                            isConstructor: false,
                            name: "revokeMintAgentAuthorization",
                            payable: false,
                            scope: 1819,
                            stateMutability: "nonpayable",
                            superFunction: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_agent",
                                            scope: 1736,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 1723,
                                                name: "ElementaryTypeName",
                                                src: "3170:7:2",
                                            },
                                        ],
                                        id: 1724,
                                        name: "VariableDeclaration",
                                        src: "3170:14:2",
                                    },
                                ],
                                id: 1725,
                                name: "ParameterList",
                                src: "3169:16:2",
                            },
                            {
                                attributes: {
                                    parameters: [null],
                                },
                                children: [],
                                id: 1728,
                                name: "ParameterList",
                                src: "3223:0:2",
                            },
                            {
                                attributes: {
                                    arguments: [null],
                                },
                                children: [
                                    {
                                        attributes: {
                                            argumentTypes: null,
                                            overloadedDeclarations: [null],
                                            referencedDeclaration: 5388,
                                            type: "modifier ()",
                                            value: "onlyOwner",
                                        },
                                        id: 1726,
                                        name: "Identifier",
                                        src: "3209:9:2",
                                    },
                                ],
                                id: 1727,
                                name: "ModifierInvocation",
                                src: "3209:9:2",
                            },
                            {
                                children: [
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "tuple()",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                            ],
                                                            isConstant: false,
                                                            isLValue: true,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name: "revokeAuthorization",
                                                            referencedDeclaration: 2722,
                                                            type: "function (struct PermissionsLib.Permissions storage pointer,address)",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1635,
                                                                    type: "struct PermissionsLib.Permissions storage ref",
                                                                    value: "tokenCreationPermissions",
                                                                },
                                                                id: 1729,
                                                                name: "Identifier",
                                                                src: "3233:24:2",
                                                            },
                                                        ],
                                                        id: 1731,
                                                        name: "MemberAccess",
                                                        src: "3233:44:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1724,
                                                            type: "address",
                                                            value: "_agent",
                                                        },
                                                        id: 1732,
                                                        name: "Identifier",
                                                        src: "3278:6:2",
                                                    },
                                                ],
                                                id: 1733,
                                                name: "FunctionCall",
                                                src: "3233:52:2",
                                            },
                                        ],
                                        id: 1734,
                                        name: "ExpressionStatement",
                                        src: "3233:52:2",
                                    },
                                ],
                                id: 1735,
                                name: "Block",
                                src: "3223:69:2",
                            },
                        ],
                        id: 1736,
                        name: "FunctionDefinition",
                        src: "3132:160:2",
                    },
                    {
                        attributes: {
                            constant: true,
                            implemented: true,
                            isConstructor: false,
                            modifiers: [null],
                            name: "getAuthorizedMintAgents",
                            payable: false,
                            scope: 1819,
                            stateMutability: "view",
                            superFunction: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                attributes: {
                                    parameters: [null],
                                },
                                children: [],
                                id: 1737,
                                name: "ParameterList",
                                src: "3411:2:2",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_agents",
                                            scope: 1747,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address[] memory",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    length: null,
                                                    type: "address[] storage pointer",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            name: "address",
                                                            type: "address",
                                                        },
                                                        id: 1738,
                                                        name: "ElementaryTypeName",
                                                        src: "3459:7:2",
                                                    },
                                                ],
                                                id: 1739,
                                                name: "ArrayTypeName",
                                                src: "3459:9:2",
                                            },
                                        ],
                                        id: 1740,
                                        name: "VariableDeclaration",
                                        src: "3459:17:2",
                                    },
                                ],
                                id: 1741,
                                name: "ParameterList",
                                src: "3458:19:2",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            functionReturnParameters: 1741,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    arguments: [null],
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "address[] memory",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [null],
                                                            isConstant: false,
                                                            isLValue: true,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name: "getAuthorizedAgents",
                                                            referencedDeclaration: 2765,
                                                            type: "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1635,
                                                                    type: "struct PermissionsLib.Permissions storage ref",
                                                                    value: "tokenCreationPermissions",
                                                                },
                                                                id: 1742,
                                                                name: "Identifier",
                                                                src: "3499:24:2",
                                                            },
                                                        ],
                                                        id: 1743,
                                                        name: "MemberAccess",
                                                        src: "3499:44:2",
                                                    },
                                                ],
                                                id: 1744,
                                                name: "FunctionCall",
                                                src: "3499:46:2",
                                            },
                                        ],
                                        id: 1745,
                                        name: "Return",
                                        src: "3492:53:2",
                                    },
                                ],
                                id: 1746,
                                name: "Block",
                                src: "3482:70:2",
                            },
                        ],
                        id: 1747,
                        name: "FunctionDefinition",
                        src: "3379:173:2",
                    },
                    {
                        attributes: {
                            constant: false,
                            implemented: true,
                            isConstructor: false,
                            name: "_clearApprovalAndTransfer",
                            payable: false,
                            scope: 1819,
                            stateMutability: "nonpayable",
                            superFunction: 5004,
                            visibility: "internal",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_from",
                                            scope: 1767,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 1748,
                                                name: "ElementaryTypeName",
                                                src: "3779:7:2",
                                            },
                                        ],
                                        id: 1749,
                                        name: "VariableDeclaration",
                                        src: "3779:13:2",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_to",
                                            scope: 1767,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 1750,
                                                name: "ElementaryTypeName",
                                                src: "3802:7:2",
                                            },
                                        ],
                                        id: 1751,
                                        name: "VariableDeclaration",
                                        src: "3802:11:2",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_tokenId",
                                            scope: 1767,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint256",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint",
                                                    type: "uint256",
                                                },
                                                id: 1752,
                                                name: "ElementaryTypeName",
                                                src: "3823:4:2",
                                            },
                                        ],
                                        id: 1753,
                                        name: "VariableDeclaration",
                                        src: "3823:13:2",
                                    },
                                ],
                                id: 1754,
                                name: "ParameterList",
                                src: "3769:73:2",
                            },
                            {
                                attributes: {
                                    parameters: [null],
                                },
                                children: [],
                                id: 1757,
                                name: "ParameterList",
                                src: "3886:0:2",
                            },
                            {
                                attributes: {
                                    arguments: [null],
                                },
                                children: [
                                    {
                                        attributes: {
                                            argumentTypes: null,
                                            overloadedDeclarations: [null],
                                            referencedDeclaration: 5221,
                                            type: "modifier ()",
                                            value: "whenNotPaused",
                                        },
                                        id: 1755,
                                        name: "Identifier",
                                        src: "3868:13:2",
                                    },
                                ],
                                id: 1756,
                                name: "ModifierInvocation",
                                src: "3868:13:2",
                            },
                            {
                                children: [
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "tuple()",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_uint256",
                                                                    typeString: "uint256",
                                                                },
                                                            ],
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name: "_clearApprovalAndTransfer",
                                                            referencedDeclaration: 5004,
                                                            type: "function (address,address,uint256)",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 5972,
                                                                    type: "contract super DebtToken",
                                                                    value: "super",
                                                                },
                                                                id: 1758,
                                                                name: "Identifier",
                                                                src: "3896:5:2",
                                                            },
                                                        ],
                                                        id: 1760,
                                                        name: "MemberAccess",
                                                        src: "3896:31:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1749,
                                                            type: "address",
                                                            value: "_from",
                                                        },
                                                        id: 1761,
                                                        name: "Identifier",
                                                        src: "3928:5:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1751,
                                                            type: "address",
                                                            value: "_to",
                                                        },
                                                        id: 1762,
                                                        name: "Identifier",
                                                        src: "3935:3:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1753,
                                                            type: "uint256",
                                                            value: "_tokenId",
                                                        },
                                                        id: 1763,
                                                        name: "Identifier",
                                                        src: "3940:8:2",
                                                    },
                                                ],
                                                id: 1764,
                                                name: "FunctionCall",
                                                src: "3896:53:2",
                                            },
                                        ],
                                        id: 1765,
                                        name: "ExpressionStatement",
                                        src: "3896:53:2",
                                    },
                                ],
                                id: 1766,
                                name: "Block",
                                src: "3886:70:2",
                            },
                        ],
                        id: 1767,
                        name: "FunctionDefinition",
                        src: "3735:221:2",
                    },
                    {
                        attributes: {
                            constant: false,
                            implemented: true,
                            isConstructor: false,
                            name: "_approve",
                            payable: false,
                            scope: 1819,
                            stateMutability: "nonpayable",
                            superFunction: 5030,
                            visibility: "internal",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_to",
                                            scope: 1784,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 1768,
                                                name: "ElementaryTypeName",
                                                src: "4158:7:2",
                                            },
                                        ],
                                        id: 1769,
                                        name: "VariableDeclaration",
                                        src: "4158:11:2",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_tokenId",
                                            scope: 1784,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint256",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint",
                                                    type: "uint256",
                                                },
                                                id: 1770,
                                                name: "ElementaryTypeName",
                                                src: "4171:4:2",
                                            },
                                        ],
                                        id: 1771,
                                        name: "VariableDeclaration",
                                        src: "4171:13:2",
                                    },
                                ],
                                id: 1772,
                                name: "ParameterList",
                                src: "4157:28:2",
                            },
                            {
                                attributes: {
                                    parameters: [null],
                                },
                                children: [],
                                id: 1775,
                                name: "ParameterList",
                                src: "4229:0:2",
                            },
                            {
                                attributes: {
                                    arguments: [null],
                                },
                                children: [
                                    {
                                        attributes: {
                                            argumentTypes: null,
                                            overloadedDeclarations: [null],
                                            referencedDeclaration: 5221,
                                            type: "modifier ()",
                                            value: "whenNotPaused",
                                        },
                                        id: 1773,
                                        name: "Identifier",
                                        src: "4211:13:2",
                                    },
                                ],
                                id: 1774,
                                name: "ModifierInvocation",
                                src: "4211:13:2",
                            },
                            {
                                children: [
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "tuple()",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_uint256",
                                                                    typeString: "uint256",
                                                                },
                                                            ],
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name: "_approve",
                                                            referencedDeclaration: 5030,
                                                            type: "function (address,uint256)",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 5972,
                                                                    type: "contract super DebtToken",
                                                                    value: "super",
                                                                },
                                                                id: 1776,
                                                                name: "Identifier",
                                                                src: "4239:5:2",
                                                            },
                                                        ],
                                                        id: 1778,
                                                        name: "MemberAccess",
                                                        src: "4239:14:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1769,
                                                            type: "address",
                                                            value: "_to",
                                                        },
                                                        id: 1779,
                                                        name: "Identifier",
                                                        src: "4254:3:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1771,
                                                            type: "uint256",
                                                            value: "_tokenId",
                                                        },
                                                        id: 1780,
                                                        name: "Identifier",
                                                        src: "4259:8:2",
                                                    },
                                                ],
                                                id: 1781,
                                                name: "FunctionCall",
                                                src: "4239:29:2",
                                            },
                                        ],
                                        id: 1782,
                                        name: "ExpressionStatement",
                                        src: "4239:29:2",
                                    },
                                ],
                                id: 1783,
                                name: "Block",
                                src: "4229:46:2",
                            },
                        ],
                        id: 1784,
                        name: "FunctionDefinition",
                        src: "4140:135:2",
                    },
                    {
                        attributes: {
                            constant: false,
                            implemented: true,
                            isConstructor: false,
                            modifiers: [null],
                            name: "_setTokenOwner",
                            payable: false,
                            scope: 1819,
                            stateMutability: "nonpayable",
                            superFunction: 5099,
                            visibility: "internal",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_tokenId",
                                            scope: 1818,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint256",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint",
                                                    type: "uint256",
                                                },
                                                id: 1785,
                                                name: "ElementaryTypeName",
                                                src: "4497:4:2",
                                            },
                                        ],
                                        id: 1786,
                                        name: "VariableDeclaration",
                                        src: "4497:13:2",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_to",
                                            scope: 1818,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 1787,
                                                name: "ElementaryTypeName",
                                                src: "4512:7:2",
                                            },
                                        ],
                                        id: 1788,
                                        name: "VariableDeclaration",
                                        src: "4512:11:2",
                                    },
                                ],
                                id: 1789,
                                name: "ParameterList",
                                src: "4496:28:2",
                            },
                            {
                                attributes: {
                                    parameters: [null],
                                },
                                children: [],
                                id: 1790,
                                name: "ParameterList",
                                src: "4546:0:2",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            falseBody: null,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    commonType: {
                                                        typeIdentifier: "t_address",
                                                        typeString: "address",
                                                    },
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "!=",
                                                    type: "bool",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            isStructConstructorCall: false,
                                                            lValueRequested: false,
                                                            names: [null],
                                                            type: "address",
                                                            type_conversion: false,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: [
                                                                        {
                                                                            typeIdentifier: "t_bytes32",
                                                                            typeString: "bytes32",
                                                                        },
                                                                    ],
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: false,
                                                                    lValueRequested: false,
                                                                    member_name: "getBeneficiary",
                                                                    referencedDeclaration: 1501,
                                                                    type: "function (bytes32) view external returns (address)",
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 1631,
                                                                            type: "contract DebtRegistry",
                                                                            value: "registry",
                                                                        },
                                                                        id: 1791,
                                                                        name: "Identifier",
                                                                        src: "4560:8:2",
                                                                    },
                                                                ],
                                                                id: 1792,
                                                                name: "MemberAccess",
                                                                src: "4560:23:2",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: false,
                                                                    isStructConstructorCall: false,
                                                                    lValueRequested: false,
                                                                    names: [null],
                                                                    type: "bytes32",
                                                                    type_conversion: true,
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: [
                                                                                {
                                                                                    typeIdentifier: "t_uint256",
                                                                                    typeString: "uint256",
                                                                                },
                                                                            ],
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: true,
                                                                            lValueRequested: false,
                                                                            type: "type(bytes32)",
                                                                            value: "bytes32",
                                                                        },
                                                                        id: 1793,
                                                                        name: "ElementaryTypeNameExpression",
                                                                        src: "4584:7:2",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 1786,
                                                                            type: "uint256",
                                                                            value: "_tokenId",
                                                                        },
                                                                        id: 1794,
                                                                        name: "Identifier",
                                                                        src: "4592:8:2",
                                                                    },
                                                                ],
                                                                id: 1795,
                                                                name: "FunctionCall",
                                                                src: "4584:17:2",
                                                            },
                                                        ],
                                                        id: 1796,
                                                        name: "FunctionCall",
                                                        src: "4560:42:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1788,
                                                            type: "address",
                                                            value: "_to",
                                                        },
                                                        id: 1797,
                                                        name: "Identifier",
                                                        src: "4606:3:2",
                                                    },
                                                ],
                                                id: 1798,
                                                name: "BinaryOperation",
                                                src: "4560:49:2",
                                            },
                                            {
                                                children: [
                                                    {
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: false,
                                                                    isStructConstructorCall: false,
                                                                    lValueRequested: false,
                                                                    names: [null],
                                                                    type: "tuple()",
                                                                    type_conversion: false,
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: [
                                                                                {
                                                                                    typeIdentifier: "t_bytes32",
                                                                                    typeString: "bytes32",
                                                                                },
                                                                                {
                                                                                    typeIdentifier: "t_address",
                                                                                    typeString: "address",
                                                                                },
                                                                            ],
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: false,
                                                                            lValueRequested: false,
                                                                            member_name: "modifyBeneficiary",
                                                                            referencedDeclaration: 1366,
                                                                            type: "function (bytes32,address) external",
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    overloadedDeclarations: [
                                                                                        null,
                                                                                    ],
                                                                                    referencedDeclaration: 1631,
                                                                                    type: "contract DebtRegistry",
                                                                                    value: "registry",
                                                                                },
                                                                                id: 1799,
                                                                                name: "Identifier",
                                                                                src: "4625:8:2",
                                                                            },
                                                                        ],
                                                                        id: 1801,
                                                                        name: "MemberAccess",
                                                                        src: "4625:26:2",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: false,
                                                                            isStructConstructorCall: false,
                                                                            lValueRequested: false,
                                                                            names: [null],
                                                                            type: "bytes32",
                                                                            type_conversion: true,
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: [
                                                                                        {
                                                                                            typeIdentifier: "t_uint256",
                                                                                            typeString: "uint256",
                                                                                        },
                                                                                    ],
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: true,
                                                                                    lValueRequested: false,
                                                                                    type: "type(bytes32)",
                                                                                    value: "bytes32",
                                                                                },
                                                                                id: 1802,
                                                                                name: "ElementaryTypeNameExpression",
                                                                                src: "4652:7:2",
                                                                            },
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    overloadedDeclarations: [
                                                                                        null,
                                                                                    ],
                                                                                    referencedDeclaration: 1786,
                                                                                    type: "uint256",
                                                                                    value: "_tokenId",
                                                                                },
                                                                                id: 1803,
                                                                                name: "Identifier",
                                                                                src: "4660:8:2",
                                                                            },
                                                                        ],
                                                                        id: 1804,
                                                                        name: "FunctionCall",
                                                                        src: "4652:17:2",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 1788,
                                                                            type: "address",
                                                                            value: "_to",
                                                                        },
                                                                        id: 1805,
                                                                        name: "Identifier",
                                                                        src: "4671:3:2",
                                                                    },
                                                                ],
                                                                id: 1806,
                                                                name: "FunctionCall",
                                                                src: "4625:50:2",
                                                            },
                                                        ],
                                                        id: 1807,
                                                        name: "ExpressionStatement",
                                                        src: "4625:50:2",
                                                    },
                                                ],
                                                id: 1808,
                                                name: "Block",
                                                src: "4611:75:2",
                                            },
                                        ],
                                        id: 1809,
                                        name: "IfStatement",
                                        src: "4556:130:2",
                                    },
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "tuple()",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_uint256",
                                                                    typeString: "uint256",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                            ],
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name: "_setTokenOwner",
                                                            referencedDeclaration: 5099,
                                                            type: "function (uint256,address)",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 5972,
                                                                    type: "contract super DebtToken",
                                                                    value: "super",
                                                                },
                                                                id: 1810,
                                                                name: "Identifier",
                                                                src: "4696:5:2",
                                                            },
                                                        ],
                                                        id: 1812,
                                                        name: "MemberAccess",
                                                        src: "4696:20:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1786,
                                                            type: "uint256",
                                                            value: "_tokenId",
                                                        },
                                                        id: 1813,
                                                        name: "Identifier",
                                                        src: "4717:8:2",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1788,
                                                            type: "address",
                                                            value: "_to",
                                                        },
                                                        id: 1814,
                                                        name: "Identifier",
                                                        src: "4727:3:2",
                                                    },
                                                ],
                                                id: 1815,
                                                name: "FunctionCall",
                                                src: "4696:35:2",
                                            },
                                        ],
                                        id: 1816,
                                        name: "ExpressionStatement",
                                        src: "4696:35:2",
                                    },
                                ],
                                id: 1817,
                                name: "Block",
                                src: "4546:192:2",
                            },
                        ],
                        id: 1818,
                        name: "FunctionDefinition",
                        src: "4473:265:2",
                    },
                ],
                id: 1819,
                name: "ContractDefinition",
                src: "1202:3538:2",
            },
        ],
        id: 1820,
        name: "SourceUnit",
        src: "584:4157:2",
    },
    compiler: {
        name: "solc",
        version: "0.4.18+commit.9cf6e910.Emscripten.clang",
    },
    networks: {
        "42": {
            events: {},
            links: {},
            address: "0x7bb8be8ba408a541369e61fc41f4f0b1c5db87da",
        },
        "70": {
            events: {},
            links: {},
            address: "0x7b217e90c64afe84b673d68bc9140d9a9e8be0f4",
        },
    },
    schemaVersion: "1.0.1",
    updatedAt: "2018-02-16T11:14:33.206Z",
};
//# sourceMappingURL=DebtToken.js.map