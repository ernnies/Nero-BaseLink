const baselink = {
  address: "0x348f9695E78b67931Fd9CB705e8bCbdDDA15cDB9",
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "_USDT",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "seller",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "buyer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "quantity",
          type: "uint256",
        },
      ],
      name: "ListingPaid",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "seller",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "rate",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "quantity",
          type: "uint256",
        },
      ],
      name: "newListing",
      type: "event",
    },
    {
      inputs: [],
      name: "USDT",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "_id",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "_rate",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_quantity",
          type: "uint256",
        },
      ],
      name: "addListing",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_seller",
          type: "address",
        },
      ],
      name: "getAllListingsForAddress",
      outputs: [
        {
          components: [
            {
              internalType: "bytes32",
              name: "id",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "seller",
              type: "address",
            },
            {
              internalType: "address",
              name: "buyer",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "rate",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "quantity",
              type: "uint256",
            },
            {
              internalType: "enum BaseLink.Status",
              name: "status",
              type: "uint8",
            },
          ],
          internalType: "struct BaseLink.Listing[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "_id",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "_seller",
          type: "address",
        },
      ],
      name: "getListing",
      outputs: [
        {
          components: [
            {
              internalType: "bytes32",
              name: "id",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "seller",
              type: "address",
            },
            {
              internalType: "address",
              name: "buyer",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "rate",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "quantity",
              type: "uint256",
            },
            {
              internalType: "enum BaseLink.Status",
              name: "status",
              type: "uint8",
            },
          ],
          internalType: "struct BaseLink.Listing",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "listings",
      outputs: [
        {
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "seller",
          type: "address",
        },
        {
          internalType: "address",
          name: "buyer",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "rate",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "quantity",
          type: "uint256",
        },
        {
          internalType: "enum BaseLink.Status",
          name: "status",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "_id",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "_seller",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_quantity",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
      ],
      name: "payForListing",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};

export default baselink;
