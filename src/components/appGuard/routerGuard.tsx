// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
// import { checkAuthenticated, userSelector } from '@/slices/userSlice';
// import { useCookies } from 'react-cookie';
// import { checkUrl } from '@/utils';


// export { RouteGuard };

// export const noLoginUrl = [
//     '/',
//     '/new*',
//     '/services*',
//     '/about-us*',
//     '/login*',
//     '/forget-password*',
// ]

// function RouteGuard({ children }: { children?: any }) {
//     const { isLoading, isLoggedIn, user, isError, error } = useAppSelector(userSelector);

//     const [cookies, setCookie, removeCookie] = useCookies(['token']);

//     const dispatch = useAppDispatch();

//     const router = useRouter()


//     function onUpdateCookie(token: any) {
//         setCookie('token', token, {
//             path: '/',
//             secure: true,
//             sameSite: 'strict'
//         });
//     }

//     function onRemoveCookie() {
//         removeCookie('token', {
//             path: '/',
//             secure: true,
//             sameSite: 'strict'
//         });
//     }

//     useEffect(() => {
//         console.log(router.pathname)

//         /* if (!isLoggedIn) {
//             if (checkUrl(router.pathname, noLoginUrl)) {
//                 //#
//             } else {
//                 router.push(`/login?callback=${router.asPath}`)
//             }
//             dispatch(checkAuthenticated())
//         }

//         if (user?.token) {
//             //console.log('update token', token)
//             onUpdateCookie(user.token)
//         } */

//     }, [router])

//     if (checkUrl(router.pathname, noLoginUrl)) {
//         return children
//     }

//     return (

//         children

//     );
// }
