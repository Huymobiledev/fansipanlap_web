
const toHex = (num: number) => {
  return '0x'+num.toString(16)
}

export const BSC_TESTNET_CONFIG = {
  chainId: toHex(97), // A 0x-prefixed hexadecimal string
  chainName: "Binance Smart Chain Testnet",
  nativeCurrency: {
    name: "Binance Chain Native Token",
    symbol: "BNB", // 2-6 characters long
    decimals: 18,
  },
  rpcUrls: [
    "https://data-seed-prebsc-1-s1.binance.org:8545",
    "https://data-seed-prebsc-2-s1.binance.org:8545",
    "https://data-seed-prebsc-1-s2.binance.org:8545",
    "https://data-seed-prebsc-2-s2.binance.org:8545",
    "https://data-seed-prebsc-1-s3.binance.org:8545",
    "https://data-seed-prebsc-2-s3.binance.org:8545"
  ],
  blockExplorerUrls: [ "https://testnet.bscscan.com" ]
}

export const BSC_CONFIG = {
  chainId: toHex(56), // A 0x-prefixed hexadecimal string
  chainName: "Binance Smart Chain",
  nativeCurrency: {
    name: "Binance Chain Native Token",
    symbol: "BNB",    // 2-6 characters long
    decimals: 18,
  },
  rpcUrls: [
    "https://bsc-dataseed1.binance.org",
    "https://bsc-dataseed2.binance.org",
    "https://bsc-dataseed3.binance.org",
    "https://bsc-dataseed4.binance.org"
  ],
  blockExplorerUrls: [ "https://bscscan.com" ]
}

export const SAAKURU_TESTNET_CONFIG = {
  chainId: toHex(247253), // A 0x-prefixed hexadecimal string
  chainName: "Saakuru Testnet",
  nativeCurrency: {
    name: "OAS",
    symbol: "OAS",    // 2-6 characters long
    decimals: 18,
  },
  rpcUrls: [
    "https://rpc-testnet.saakuru.network"
  ],
  blockExplorerUrls: [ "https://explorer-testnet.saakuru.network" ]
}

export const SAAKURU_CONFIG = {
  chainId: toHex(7225878), // A 0x-prefixed hexadecimal string
  chainName: "SAAKURU",
  nativeCurrency: {
    name: "OAS",
    symbol: "OAS",    // 2-6 characters long
    decimals: 18,
  },
  rpcUrls: [
    "https://rpc.saakuru.network"
  ],
  blockExplorerUrls: [ "https://explorer.saakuru.network" ]
}


export const POLYGON_CONFIG = {
  chainId: toHex(137), // A 0x-prefixed hexadecimal string
  chainName: "Polygon Network",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",    // 2-6 characters long
    decimals: 18,
  },
  rpcUrls: [
    "https://polygon-rpc.com/",
  ],
  blockExplorerUrls: [ "https://polygonscan.com/" ]
}

export const MUMBAI_CONFIG = {
  chainId: toHex(80001), // A 0x-prefixed hexadecimal string
  chainName: "Mumbai",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",    // 2-6 characters long
    decimals: 18,
  },
  rpcUrls: [
    "https://rpc-mumbai.maticvigil.com",
  ],
  blockExplorerUrls: [ "https://mumbai.polygonscan.com/" ]
}

export function getNetworkConfig(chainId: number) {
  switch (chainId) {
    case 56:
      return BSC_CONFIG
    case 97:
      return BSC_TESTNET_CONFIG
    case 247253:
      return SAAKURU_TESTNET_CONFIG
    case 7225878:
      return SAAKURU_CONFIG
    case 137:
      return POLYGON_CONFIG
      case 80001:
        return MUMBAI_CONFIG
  }
  return null
}