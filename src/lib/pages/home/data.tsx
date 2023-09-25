export const EXAMPLE_TX_HDWALLET = {
  types: {
    EIP712Domain: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "version",
        type: "string",
      },
      {
        name: "chainId",
        type: "uint256",
      },
      {
        name: "verifyingContract",
        type: "address",
      },
      {
        name: "salt",
        type: "bytes32",
      },
    ],
    Person: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "wallet",
        type: "address",
      },
      {
        name: "married",
        type: "bool",
      },
      {
        name: "kids",
        type: "uint8",
      },
      {
        name: "karma",
        type: "int16",
      },
      {
        name: "secret",
        type: "bytes",
      },
      {
        name: "small_secret",
        type: "bytes16",
      },
      {
        name: "pets",
        type: "string[]",
      },
      {
        name: "two_best_friends",
        type: "string[2]",
      },
    ],
    ThisIsARidiculouslyLongPrimaryTypeToForceHashesToBePrecalculatedByHDWalletKeepKey:
      [
        {
          name: "from",
          type: "Person",
        },
        {
          name: "to",
          type: "Person",
        },
        {
          name: "messages",
          type: "string[]",
        },
      ],
  },
  primaryType:
    "ThisIsARidiculouslyLongPrimaryTypeToForceHashesToBePrecalculatedByHDWalletKeepKey",
  domain: {
    name: "Ether Mail",
    version: "1",
    chainId: 1,
    verifyingContract: "0x1e0Ae8205e9726E6F296ab8869160A6423E2337E",
    salt: "0xca92da1a6e91d9358328d2f2155af143a7cb74b81a3a4e3e57e2191823dbb56c",
  },
  message: {
    from: {
      name: "Amy",
      wallet: "0xc0004B62C5A39a728e4Af5bee0c6B4a4E54b15ad",
      married: true,
      kids: 2,
      karma: 4,
      secret:
        "0x62c5a39a728e4af5bee0c6b462c5a39a728e4af5bee0c6b462c5a39a728e4af5bee0c6b462c5a39a728e4af5bee0c6b4",
      small_secret: "0x5ccf0e54367104795a47bc0481645d9e",
      pets: ["parrot"],
      two_best_friends: ["Carl", "Denis"],
    },
    to: {
      name: "Bob",
      wallet: "0x54B0Fa66A065748C40dCA2C7Fe125A2028CF9982",
      married: false,
      kids: 0,
      karma: -4,
      secret:
        "0x7fe125a2028cf97fe125a2028cf97fe125a2028cf97fe125a2028cf97fe125a2028cf97fe125a2028cf97fe125a2028cf9",
      small_secret: "0xa5e5c47b64775abc476d2962403258de",
      pets: ["dog", "cat"],
      two_best_friends: ["Emil", "Franz"],
    },
    messages: ["Hello, Bob!", "How are you?", "Hope you're fine"],
  },
};

export const EXAMPLE_TX_OPENSEA = {
  domain: {
    chainId: "1",
    name: "Seaport",
    verifyingContract: "0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC",
    version: "1.5",
  },
  message: {
    conduitKey:
      "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
    consideration: [
      {
        endAmount: "975000000000000000",
        identifierOrCriteria: "0",
        itemType: "0",
        recipient: "0x141D9959cAe3853b035000490C03991eB70Fc4aC",
        startAmount: "975000000000000000",
        token: "0x0000000000000000000000000000000000000000",
      },
      {
        endAmount: "25000000000000000",
        identifierOrCriteria: "0",
        itemType: "0",
        recipient: "0x0000a26b00c1F0DF003000390027140000fAa719",
        startAmount: "25000000000000000",
        token: "0x0000000000000000000000000000000000000000",
      },
    ],
    counter: "0",
    endTime: "1697993149",
    offer: [
      {
        endAmount: "1",
        identifierOrCriteria: "21",
        itemType: "2",
        startAmount: "1",
        token: "0x25EF864904d67e912B9eC491598A7E5A066B102F",
      },
    ],
    offerer: "0x141D9959cAe3853b035000490C03991eB70Fc4aC",
    orderType: "0",
    salt: "24446860302761739304752683030156737591518664810215442929803061704826371370774",
    startTime: "1695401149",
    totalOriginalConsiderationItems: "2",
    zone: "0x004C00500000aD104D7DBd00e3ae0A5C00560C00",
    zoneHash:
      "0x0000000000000000000000000000000000000000000000000000000000000000",
  },
  primaryType: "OrderComponents",
  types: {
    ConsiderationItem: [
      {
        name: "itemType",
        type: "uint8",
      },
      {
        name: "token",
        type: "address",
      },
      {
        name: "identifierOrCriteria",
        type: "uint256",
      },
      {
        name: "startAmount",
        type: "uint256",
      },
      {
        name: "endAmount",
        type: "uint256",
      },
      {
        name: "recipient",
        type: "address",
      },
    ],
    EIP712Domain: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "version",
        type: "string",
      },
      {
        name: "chainId",
        type: "uint256",
      },
      {
        name: "verifyingContract",
        type: "address",
      },
    ],
    OfferItem: [
      {
        name: "itemType",
        type: "uint8",
      },
      {
        name: "token",
        type: "address",
      },
      {
        name: "identifierOrCriteria",
        type: "uint256",
      },
      {
        name: "startAmount",
        type: "uint256",
      },
      {
        name: "endAmount",
        type: "uint256",
      },
    ],
    OrderComponents: [
      {
        name: "offerer",
        type: "address",
      },
      {
        name: "zone",
        type: "address",
      },
      {
        name: "offer",
        type: "OfferItem[]",
      },
      {
        name: "consideration",
        type: "ConsiderationItem[]",
      },
      {
        name: "orderType",
        type: "uint8",
      },
      {
        name: "startTime",
        type: "uint256",
      },
      {
        name: "endTime",
        type: "uint256",
      },
      {
        name: "zoneHash",
        type: "bytes32",
      },
      {
        name: "salt",
        type: "uint256",
      },
      {
        name: "conduitKey",
        type: "bytes32",
      },
      {
        name: "counter",
        type: "uint256",
      },
    ],
  },
};

export const EXAMPLE_TX_UNISWAP = {
  types: {
    PermitSingle: [
      {
        name: "details",
        type: "PermitDetails",
      },
      {
        name: "spender",
        type: "address",
      },
      {
        name: "sigDeadline",
        type: "uint256",
      },
    ],
    PermitDetails: [
      {
        name: "token",
        type: "address",
      },
      {
        name: "amount",
        type: "uint160",
      },
      {
        name: "expiration",
        type: "uint48",
      },
      {
        name: "nonce",
        type: "uint48",
      },
    ],
    EIP712Domain: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "chainId",
        type: "uint256",
      },
      {
        name: "verifyingContract",
        type: "address",
      },
    ],
  },
  domain: {
    name: "Permit2",
    chainId: "1",
    verifyingContract: "0x000000000022d473030f116ddee9f6b43ac78ba3",
  },
  primaryType: "PermitSingle",
  message: {
    details: {
      token: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      amount: "1461501637330902918203684832716283019655932542975",
      expiration: "1698178077",
      nonce: "0",
    },
    spender: "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
    sigDeadline: "1695587877",
  },
};
