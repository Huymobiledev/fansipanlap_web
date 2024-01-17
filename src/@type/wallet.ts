export interface IWallet {
    id: string
    address: string
    walletType: string
    secretType: string
    balance: {
        balance: string,
        symbol: string,
    }
}

export interface ITokenBalance {
    secretType: string
    balance: string
    gasBalance: string
    symbol: string
    gasSymbol: string
    rawBalance: string
    rawGasBalance: string
    decimals: number
    tokenAddress: string
    price?: number | null
    totalBalance: string
    totalGasBalance: string
    totalRawBalance: string
    totalRawGasBalance: string
}

export interface ISpendingWalletTransaction {
    action: string
    contract_address: string
    contract_name: string
    contract_symbol: string
    contract_decimals: number
    created_at: string
    created_time_stamp: number
    from_address: string
    to_address: string
    from: string,
    to: string,
    token_id: string | null
    value: string
    transaction_hash: string | undefined
}

export const SUPPORTED_TOKENS = {
    BNB: "BNB",
    SING: "SING",
    BUSD: "BUSD",
    USDT: "USDT",
    SUSDT: 'SUSDT',
    OAS: 'OAS'
}

export const SUPPORTED_CHAINS = {
    "BSC": process.env.NEXT_PUBLIC_CHAIN_ID
}

export enum WALLET_TRANSFER_TYPE {
    SPENDING = "SPENDING",
    EXTERNAL = "EXTERNAL"
}