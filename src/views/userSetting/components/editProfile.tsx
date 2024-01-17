import { updateProfileAPI } from "@/api/profile";
import { ButtonGreen, ButtonOutline } from "@/components/button";
import { ErrorDialog } from "@/components/dialog/errorDialog";
import { EditIcon } from "@/components/icons/icons";
import InputForm from "@/components/input/input";
import InputGender from "@/components/input/inputGender";
import BaseSelect from "@/components/input/select-2";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { checkAuthenticated, userSelector } from "@/slices/userSlice";
import { Stack, Grid, Typography, Box } from "@mui/material";
import { t } from "i18next";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
    first_name: string
    last_name: string
    gender: string
    country_id: string
}

export default function EditProfile(props: any) {
    const { user } = useAppSelector(userSelector)
    const [country, setCountry] = useState<any[]>([])
    const [error, setError] = useState('')
    const [pending, setPending] = useState(false)
    const { register, setValue, getValues, watch, handleSubmit, formState: { errors } } = useForm<FormData>();
    const dispatch = useAppDispatch()


   
    const handleChangeCountry = (value: any) => {
        const currentCountry = country?.find(v => v.name === value)
        setValue('country_id', currentCountry?.country_id)
    }

    const handleUpdateProfile = async (data: FormData) => {
        if (pending) {
            return
        }
        //console.log(data)
        setPending(true)
        try {
            const rs = await updateProfileAPI(data)
            if (rs.success) {
                setError('Update success!')
                dispatch(checkAuthenticated())
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
        firstname: register('first_name', {
            required: {
                value: true,
                message: 'Firstname not empty'
            }
        }),
        lastname: register('last_name', {
            required: {
                value: true,
                message: 'Lastname not empty'
            }
        }),
        country: register('country_id', {
            required: {
                value: true,
                message: 'Country not empty'
            }
        }),
        gender: register('gender', {
            required: {
                value: true,
                message: 'Gender not empty'
            }
        }),
    }

    useEffect(() => {
        setValue('country_id', user?.country_id)
        setValue('gender', (user?.gender || 'male'))
    }, [user])

    const currentCountryId = watch('country_id')
    const currentCountry = country?.find(v => v.country_id === currentCountryId)


    return (
        <Fragment>
            <ErrorDialog
                open={error !== ''}
                info={error}
                onClose={() => setError('')}
            />
            <form onSubmit={handleSubmit(handleUpdateProfile)}>
                <Stack direction='column' width='100%' spacing={3} pb={3}>
                    <InputForm
                        //endAdornment={<EditIcon />}
                        defaultValue={user?.first_name}
                        label="First Name"
                        placeholder="First name"
                        id='first_name'
                        register={formRegister.firstname}
                        type="text"
                        error={errors.first_name?.message}
                    />
                    <InputForm
                        //endAdornment={<EditIcon />}
                        defaultValue={user?.last_name}
                        label="Last Name"
                        placeholder="Last name"
                        id='last_name'
                        register={formRegister.lastname}
                        type="text"
                        error={errors.last_name?.message}
                    />




                    <Stack direction='row' alignItems='center' spacing={3} pb={.5}>
                        <Typography>
                            {t('Country')}:
                        </Typography>
                        <Box
                            sx={{
                                width: 250,
                                height: 34,
                            }}
                        >
                            {country && <BaseSelect
                                data={country.map(v => v.name) || []}
                                onChange={(value) => handleChangeCountry(value)}
                                currentSelected={currentCountry?.name || ''}
                                label="Country"
                                error={errors.country_id?.message}
                            />}
                        </Box>

                    </Stack>

                    <InputGender
                        defaultValue={user?.gender || 'male'}
                        label="Gender"
                        id='gender'
                        onChange={(value) => setValue('gender', value)}
                        error={errors.gender?.message}
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