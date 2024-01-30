import { Box, Stack, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

const handleClick = (event: any) => {
        let index = parseInt(event.target.id)
        let target = dataMenu[index]

        let targettedElement = document.getElementById(`${target.lable}`)
        console.log(index)

        switch (index) {
            case 5:
                window.open('https://twitter.com/FansipanLabs', '_blank')
                break
            default:
                targettedElement?.scrollIntoView({ behavior: 'smooth', block:'center' ,inline: 'start'})
        }
    }

export const dataMenu = [
    {
        lable: 'Product',
        link: handleClick
    },
    {
        lable: 'Services',
        link: handleClick
    },
    {
        lable: 'Team',
        link: handleClick
    },
    {
        lable: 'Awards',
        link: handleClick
    },
    {
        lable: 'Partners',
        link: handleClick
    },
    {
        lable: 'Blogs & News',
        link: handleClick
    },

]


export default function Nav(props: any) {
    const {isDark} = props
    const router = useRouter()
    const {t} = useTranslation()



    return (
        <Fragment>
            <Stack direction='row' alignItems='center' id='a'
                sx={{
                    gap: 1,
                    height: '100%',
                    overflow: 'hidden',
                    pl: 5,
                    '@media screen and (max-width: 800px)': {
                        display: 'none',
                    },
                    mr: 0,
                    justifyItems: 'space-between',
                    width: '100%'
                }}
            >
                {
                    dataMenu.map((item, index) => (
                        <div key={index}>
                            <Box
                                
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    transition: 'transform 0.3s ease-in-out',
                                    ':hover': {
                                                transform: 'scale(1.2)'
                                            },
                                    
                                }}
                            >
                                    <Button
                                        id={`${index}`}
                                        onClick={item.link}
                                    >
                                        <Typography noWrap
                                        variant="button"
                                        id={`${index}`}
                                        sx={{
                                            fontSize: '14px',
                                            color: '#ffffff',
                                            textAlign: 'right',
                                            textTransform: 'none'
                                        }}
                                    >
                                        {t(item.lable)}
                                    </Typography>
                                    </Button>
                            </Box>
                        </div>
                    ))
                }
            </Stack>
        </Fragment>
    )
}