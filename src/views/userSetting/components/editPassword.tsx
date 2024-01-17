import { updatePasswordAPI, updateProfileAPI } from "@/api/profile";
import { ButtonGreen, ButtonOutline } from "@/components/button";
import { ErrorDialog } from "@/components/dialog/errorDialog";
import { EditIcon, EyeCloseIcon, EyeOpenIcon } from "@/components/icons/icons";
import InputForm from "@/components/input/input";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { checkAuthenticated, userSelector } from "@/slices/userSlice";
import { isValidPassword } from "@/utils";
import { Stack, Grid, Typography, Box, IconButton } from "@mui/material";
import { t } from "i18next";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
    old_password: string
    new_password: string
    re_new_password: string
}

export default function EditPassword(props: any) {
    const { user } = useAppSelector(userSelector)
    const [error, setError] = useState('')
    const [pending, setPending] = useState(false)
    const { register, setValue, getValues, watch, handleSubmit, formState: { errors } } = useForm<FormData>();
    const dispatch = useAppDispatch()

    const [showPassword, setShowPassword] = useState<any>({
        "old_password": false,
        "new_password": false,
        "re_new_password": false
    })
    const [initNote, setInitNote] = useState('Passwords should contain three of the four character types: Uppercase letters: A-Z. Lowercase letters: a-z. Numbers: 0-9')


    const handleUpdatePassword = async (data: FormData) => {
        if (pending) {
            return
        }
        //console.log(data)
        setPending(true)
        try {
            const dt = {
                old_password: data.old_password || '',
                new_password: data.new_password
            }
            const rs = await updatePasswordAPI(dt)
            if (rs.success) {
                setError('Update success!')
            } else {
                setError(rs?.error?.message)
            }
        } catch (e) {
            console.log(e)
        } finally {
            setPending(false)
        }
    }


    const formRegister = {
        oldPass: register('old_password', {
            /* required: {
                value: true,
                message: 'This field is required.'

            },
            minLength: {
                value: 6,
                message: 'Password must be longer than 6 characters.'
            } */
        }),
        newPass: register('new_password', {
            required: {
                value: true,
                message: 'This field is required.'

            },
            minLength: {
                value: 6,
                message: 'Password must be longer than 6 characters.'
            },
            validate: (val: string) => {
                if (!isValidPassword(val)) {
                    return "Passwords should contain three of the four character types: Uppercase letters: A-Z. Lowercase letters: a-z. Numbers: 0-9";
                }
            },
        }),
        reNewPass: register('re_new_password', {
            required: {
                value: true,
                message: 'This field is required.'

            },
            minLength: {
                value: 6,
                message: 'Password must be longer than 6 characters.'
            },
            validate: (val: string) => {
                if (watch('new_password') != val) {
                    return "Your passwords do no match";
                }
            },
        }),
    }

    useEffect(() => {
        if (errors.old_password || errors.new_password) {
            setInitNote('')
        }
    }, [errors])


    function BtnShowPass({ value }: { value: string }) {
        return (
            <IconButton onClick={() => {
                setShowPassword((prev: any) => ({
                    ...prev,
                    [value]: !prev[value]
                }))
            }
            }>
                {!showPassword[value] ? <EyeOpenIcon /> : <EyeCloseIcon />}
            </IconButton >
        )
    }


    return (
        <Fragment>
            <ErrorDialog
                open={error !== ''}
                info={error}
                onClose={() => setError('')}
            />
            <form onSubmit={handleSubmit(handleUpdatePassword)}>
                <Stack direction='column' width='100%' spacing={3} pb={3}>
                    <InputForm
                        id='old_password'
                        label="Old Password"
                        placeholder="Enter your old password"
                        register={formRegister.oldPass}
                        type={showPassword?.old_password ? "text" : "password"}
                        error={errors.old_password?.message}
                        endAdornment={<BtnShowPass value="old_password" />}
                        note={initNote}
                    />
                    <InputForm
                        id='new_password'
                        label="New Password"
                        placeholder="Enter your new password"
                        register={formRegister.newPass}
                        type={showPassword?.new_password ? "text" : "password"}
                        error={errors.new_password?.message}
                        endAdornment={<BtnShowPass value="new_password" />}
                        note={initNote}
                    />
                    <InputForm
                        id='re_new_password'
                        label="Re-type Password"
                        placeholder="Enter your new password"
                        register={formRegister.reNewPass}
                        type={showPassword?.re_new_password ? "text" : "password"}
                        error={errors.re_new_password?.message}
                        endAdornment={<BtnShowPass value="re_new_password" />}
                    />


                    <ButtonGreen
                        sx={{
                            maxWidth: 200,

                        }}
                        type="submit"
                    >
                        {t('Save')}
                    </ButtonGreen>
                </Stack>
            </form>
        </Fragment>
    )
}