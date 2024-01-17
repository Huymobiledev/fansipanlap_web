import { useAppSelector } from "@/hooks/hooks";
import { userSelector } from "@/slices/userSlice";
import { Avatar, Box } from "@mui/material";
import Link from "next/link";
import { Fragment, use } from "react";
import Image from "next/image";

export default function UserAvatar() {
    const { isLoggedIn, user } = useAppSelector(userSelector)
    return (
        <Fragment>
            <Link href={'/profile'}>
                <Box
                    sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        background: '#999999'
                    }}
                >
                    {isLoggedIn ?
                        <Avatar
                            sx={{ width: 32, height: 32 }}
                            src={user?.avatar || ''}
                        >
                            {user.first_name.charAt(0)}
                        </Avatar>
                        : <Image
                            src='/assets/images/avatar.png'
                            width={32}
                            height={32}
                            alt='Avatar'
                        />}
                </Box>
            </Link>
        </Fragment>
    )
}