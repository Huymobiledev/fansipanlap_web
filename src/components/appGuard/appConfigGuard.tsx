// import { useState, useEffect, Fragment } from 'react';
// import { useRouter } from 'next/router';
// import { Backdrop, Typography, Stack, Container } from "@mui/material";

// import io from 'socket.io-client'
// import React from 'react';
// import { checkUrl } from '../../utils';
// import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
// import { appConfigSelector } from '@/slices/appConfigSlice';
// import { userSelector } from '@/slices/userSlice';
// import { fetchAppConfig } from '../../slices/appConfigSlice';
// import { COLOR } from '@/constant/common';
// import { ButtonOutline } from '../button';
// let socket: any

// export { AppConfigGuard };

// export const SocketContext = React.createContext(socket)

// export const passmaintenaceUrl = (config: any) => {
//     if (config && config?.level) {
//         return config?.dapp[`level_${config?.level}`]?.allow_screens || [
//             '/',
//             '/booking*',
//             '/voucher*',
//             '/okara*',
//             '/member*',
//             '/profile',
//             '/song'
//         ]
//     }
//     return []
// }

// function AppConfigGuard({ children }: { children?: any }) {

//     const router = useRouter()
//     const { appConfig, isFetchingConfig, fetchingConfigError } = useAppSelector(appConfigSelector);
//     const { user, isLoggedIn, chainId } = useAppSelector(userSelector);
//     const [ipAddress, setIPAddress] = useState('')

//     const maintenanceConfig = appConfig?.maintenance_config
//     const whitelist = appConfig?.whitelist_ips || []
    

//     const dispatch = useAppDispatch();

//     const socketInitializer = async () => {
//         if (!isLoggedIn) {
//             return
//         }
//         try {
//             socket = io(
//                 process.env.NEXT_PUBLIC_SOCKET_API || 'wss://ws-dev.realcoin.network',
//                 {
//                     auth: {
//                         token: user?.token
//                     }
//                 })

//             socket.on('connect', () => {
//                 console.log('socket connected')
//             })

//             socket.on("error", (res: any) => {
//                 console.log('socket error', res); // undefined
//             });

//         } catch (e) {
//             console.log(e)
//         }
//     }

//     useEffect(() => {
//         /* try {
//             fetch('https://api.ipify.org?format=json')
//                 .then(response => response.json())
//                 .then(data => setIPAddress(data.ip))
//                 .catch(error => console.log(error))
//         } catch (e) {
//             console.log(e)
//         } */
//         dispatch(fetchAppConfig());

//     }, [isLoggedIn])

    

//     console.log(ipAddress)
//     if (appConfig?.maintenance && ipAddress && whitelist.includes(ipAddress)) {
//         return (
//             <SocketContext.Provider value={socket}>
//                 {children}
//             </SocketContext.Provider>
//         )
//     }

//     if (appConfig?.maintenance && checkUrl(router.pathname, passmaintenaceUrl(maintenanceConfig))) {
//         return (
//             <SocketContext.Provider value={socket}>
//                 {children}
//             </SocketContext.Provider>
//         )
//     }

//     if (appConfig && appConfig.maintenance) {
//         return (
//             <Fragment>

//                 <Container maxWidth='xs'
//                     sx={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         width: '100%'
//                     }}
//                 >
//                     <Backdrop
//                         sx={{
//                             color: '#fff',
//                             zIndex: (theme) => theme.zIndex.drawer + 1,
//                             background: `linear-gradient(180deg, ${COLOR.White} 19.37%, #000 78.84%)`,
//                             backdropFilter: 'blur(6.5px)',
//                             maxWidth: 444,
//                             margin: 'auto'
//                         }}
//                         open={true}
//                     >
//                         <Stack alignItems="center" px={2} spacing={1} pb={6}
//                             sx={{
//                                 width: '100%',
//                                 maxWidth: 444,
//                             }}
//                         >
//                             <img src='/assets/icons/logo-login.png' alt="" />
//                             <Typography
//                                 sx={{
//                                     fontSize: 16,
//                                     fontWeight: 700,
//                                     textAlign: 'center',
//                                 }}
//                             >
//                                 {appConfig?.maintenance_message}
//                             </Typography>
//                             <Typography
//                                 sx={{
//                                     fontSize: 12,
//                                 }}
//                             >
//                                 We will be back shortly
//                             </Typography>
//                             <ButtonOutline onClick={() => router.push('/')}>
//                                 {'Back to Home'}
//                             </ButtonOutline>
//                         </Stack>
//                     </Backdrop>
//                 </Container>
//             </Fragment>

//         );
//     }

//     return (

//         <SocketContext.Provider value={socket}>
//             {children}
//         </SocketContext.Provider>

//     );
// }