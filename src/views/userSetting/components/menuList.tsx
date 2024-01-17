import { LogoutIcon, PasswordIcon, ProfileIcon } from "@/components/icons/icons";
import { Divider, Stack } from "@mui/material";
import { Fragment, useState } from "react";
import MenuItem from "./menuItem";
import router from "next/router";
import { useAppDispatch } from "@/hooks/hooks";
import { logout } from "@/slices/userSlice";
import ConfirmDialog from "@/components/dialog/confirmDialog";
import { editFunEnum } from "../viewProfile";

const menu1 = [
    {
        avatar: <ProfileIcon />,
        label: 'Profile',
        value: 'profile',
        link: ''
    },
    {
        avatar: <PasswordIcon />,
        label: 'Change Password',
        value: 'password',
        link: ''
    },
]

const menu2 = [
    {
        avatar: <LogoutIcon />,
        label: 'Logout',
        link: ''
    },
]
export default function MenuList() {

    const dispatch = useAppDispatch()
    const [info, setInfo] = useState('')
    const { _fu } = router.query

    const handleLogout = async() => {
        dispatch(logout())
        router.reload()
    }

    const handleConfirmLogout = () => {
        setInfo('Do you want logout?')
    }

    const handleSelect = (value: any) => [
        router.replace(`${router.pathname}?_fu=${value}`)
    ]

    return (
        <Fragment>
            <ConfirmDialog
                open={info !== ''}
                info={info}
                onClose={() => setInfo('')}
                onConfirm={() => {
                    setInfo('')
                    handleLogout()
                }}
            />
            <Stack direction='column' spacing={2} justifyContent='flex-start' alignItems='center' pb={1}>
                {menu1.map((item, index) => {
                    return <MenuItem item={item} key={index} onClick={handleSelect} selected={(_fu || editFunEnum.EDIT_PROFILE) === item?.value}/>
                })}

            </Stack>
            <Divider />

            <Stack direction='column' spacing={2} justifyContent='flex-start' alignItems='center' pt={1}>
                {menu2.map((item, index) => {
                    return <MenuItem item={item} key={index} noArrow onClick={handleConfirmLogout} />
                })}

            </Stack>

        </Fragment>
    )
}