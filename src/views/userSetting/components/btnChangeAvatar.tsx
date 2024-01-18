/* eslint-disable react-hooks/exhaustive-deps */
import { updateAvatarAPI, uploadPhotoAPI } from "@/api/profile";
import { ButtonOutline } from "@/components/button";
import { ErrorDialog } from "@/components/dialog/errorDialog";
import { useAppDispatch } from "@/hooks/hooks";
import { checkAuthenticated } from "@/slices/userSlice";
import { Box, ButtonBase, CircularProgress, Stack, styled, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";

const Input = styled('input')({
    display: 'none',
});

export function BtnEditAvatar() {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const [pending, setPending] = useState(false);
    const [error, setError] = useState('')

    const changeHandler = async (event: any) => {
        var selectedFile = new File([event.target.files[0]], "image.png");
        if (!selectedFile) {
            return
        }
        console.log("file upload", selectedFile)
        try {
            setPending(true)
            const rs = await uploadPhotoAPI(selectedFile)
            if (rs.success) {
                const ls = await updateAvatarAPI({
                    avatar: rs.data?.link
                });
                if (ls.success) {
                    setError('Update success!');
                    dispatch(checkAuthenticated())
                } else {
                    setError(ls?.error?.message)
                }
            } else {
                setError(rs?.error?.message)
            }

        } catch (e: any) {
            console.log(e)
        } finally {
            setPending(false)
        }
    };
    return (
        <Fragment>
            <ErrorDialog
                open={error !== ''}
                info={error}
                onClose={() => setError('')}
            />
            <Box>
                {pending ?
                    <CircularProgress />
                    :
                    <label htmlFor="icon-button-file">
                        <Input accept="image/*" id="icon-button-file" type="file"
                            onChange={changeHandler}
                        />
                        <ButtonBase 
                            component='span'
                            disabled={pending}
                            sx={{
                                background: '#fff',
                                borderRadius: '13px',
                                border: '1px solid #22AD01',
                                py: 1,
                                px: 2,
                            }}
                        >
                            {pending? <CircularProgress size={12}/>: t('Change Avatar')}
                        </ButtonBase>
                    </label>
                }

            </Box>
        </Fragment>
    );
}
