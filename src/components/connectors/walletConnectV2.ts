// import { initializeConnector } from '@web3-react/core'
// import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2'

// import { MAINNET_CHAINS } from './chains'

// const [mainnet, ...optionalChains] = Object.keys(MAINNET_CHAINS).map(Number)

// export const [walletConnectV2, hooks] = initializeConnector<WalletConnectV2>(
//   (actions) =>
//     new WalletConnectV2({
//       actions,
//       options: {
//         projectId: process.env.NEXT_PUBLIC_PROJECT_ID || '1403be485247502c80fddde0cface9e7',
//         chains: [mainnet],
//         optionalChains,
//         showQrModal: true,
//       },
//     })
// )