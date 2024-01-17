import type { AddEthereumChainParameter } from '@web3-react/types'

const ETH: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
}

const MATIC: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'Matic',
    symbol: 'MATIC',
    decimals: 18,
}

const BNB: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
}

const OAS: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'OAS',
    symbol: 'OAS',
    decimals: 18,
}

interface BasicChainInformation {
    urls: string[]
    name: string
}

interface ExtendedChainInformation extends BasicChainInformation {
    nativeCurrency: AddEthereumChainParameter['nativeCurrency']
    blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls']
}

function isExtendedChainInformation(
    chainInformation: BasicChainInformation | ExtendedChainInformation
): chainInformation is ExtendedChainInformation {
    return !!(chainInformation as ExtendedChainInformation).nativeCurrency
}

export function getAddChainParameters(chainId: number): AddEthereumChainParameter | number {
    const chainInformation = CHAINS[chainId]
    if (isExtendedChainInformation(chainInformation)) {
        return {
            chainId,
            chainName: chainInformation.name,
            nativeCurrency: chainInformation.nativeCurrency,
            rpcUrls: chainInformation.urls,
            blockExplorerUrls: chainInformation.blockExplorerUrls,
        }
    } else {
        return chainId
    }
}


type ChainConfig = { [chainId: number]: BasicChainInformation | ExtendedChainInformation }

export const MAINNET_CHAINS: ChainConfig = {
    1: {
        urls: [process.env.NEXT_PUBLIC_RPC_URL_1 as string].filter(Boolean),
        name: 'Mainnet',
    },
    56: {
        urls: [process.env.NEXT_PUBLIC_RPC_URL_56 as string].filter(Boolean),
        name: 'Binance Smart Chain',
        nativeCurrency: BNB,
        blockExplorerUrls: ['https://bscscan.com'],
    },
    97: {
        urls: [process.env.NEXT_PUBLIC_RPC_URL_97 as string].filter(Boolean),
        name: 'Binance Smart Chain Testnet',
        nativeCurrency: BNB,
        blockExplorerUrls: ['https://testnet.bscscan.com'],
    },
    137: {
        urls: ['https://polygon-rpc.com'].filter(Boolean),
        name: 'POLYGON',
        nativeCurrency: MATIC,
        blockExplorerUrls: ['https://polygonscan.com'],
    },
    247253: {
        urls: ['https://rpc-testnet.saakuru.network'],
        name: 'Saakuru Testnet',
        nativeCurrency: OAS,
        blockExplorerUrls: ['https://explorer-testnet.saakuru.network'],
    },
    7225878: {
        urls: ['https://rpc.saakuru.network'],
        name: 'SAAKURU',
        nativeCurrency: OAS,
        blockExplorerUrls: ['https://explorer.saakuru.network'],
    },
}

export const TESTNET_CHAINS: ChainConfig = {
    247255: {
        urls: ['https://rpc-testnet.saakuru.network'],
        name: 'Saakuru Testnet',
        nativeCurrency: OAS,
        blockExplorerUrls: ['https://explorer-testnet.saakuru.network'],
    },
    80001: {
        urls: ['https://mumbai.polygonscan.com'],
        name: 'Matic Mumbai',
        nativeCurrency: MATIC,
        blockExplorerUrls: ["https://matic-mumbai.chainstacklabs.com",
        "https://rpc-mumbai.matic.today",
        "https://rpc-mumbai.maticvigil.com"],
    },
}

export const CHAINS: ChainConfig = {
    ...MAINNET_CHAINS,
    ...TESTNET_CHAINS,
}

export const URLS: { [chainId: number]: string[] } = Object.keys(CHAINS).reduce<{ [chainId: number]: string[] }>(
    (accumulator, chainId) => {
        const validURLs: string[] = CHAINS[Number(chainId)].urls

        if (validURLs.length) {
            accumulator[Number(chainId)] = validURLs
        }

        return accumulator
    },
    {}
)