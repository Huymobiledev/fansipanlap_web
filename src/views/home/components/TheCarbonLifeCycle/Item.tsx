import { ButtonBase } from "@mui/material";
import { Stack, Box } from "@mui/system";
import ScrollAnimation from "react-animate-on-scroll";
import router from 'next/router';

interface IProps {
    index: number,
    image: string,
    title: string,
    text: string,
    learnmore: string,
    pl?: number,
    color?: string,

}
export function LifeCycleLeft(props: IProps) {
    const { index, image, title, text, learnmore, pl, color } = props
    return (
        <ScrollAnimation animateIn='fadeInUp' delay={index * 50} animateOnce={true}>
            <Stack direction={'column'}
                sx={{
                    'img': {
                        width: 110,
                        height: 110,
                        objectFit: 'contain'
                    },
                    mr: '-1px',
                    borderRight: `2px solid ${color || '#000200'}`,
                    position: 'relative',
                    pr: 5,
                    pb: 5,
                    pl: pl || 0,
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: -11,
                        color: color || '#000200'
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" fill="white" stroke="currentColor" stroke-width="2" />
                    </svg>
                </Box>
                <img src={image || '/assets/images/carbon-1.png'} alt='carbon-1' />
                <Stack direction={'row'} spacing={.5}
                    sx={{
                        '.index': {
                            fontSize: 24,
                            fontWeight: 600,
                            color: '#22AD01'
                        },

                    }}
                >

                    <div className="index">{index}.</div>
                    <Stack direction={'column'} spacing={.5}
                        sx={{
                            textAlign: 'left',
                            'div:first-child': {
                                fontWeight: 600,
                                fontSize: [16, 16, 24, 24, 24],
                            },
                            'div:nth-child(2)': {
                                fontSize: [14, 14, 16, 16, 16],
                                fontWeight: 500,
                            }
                        }}
                    >
                        <div>{title}</div>
                        <div>{text}</div>
                        <ButtonBase
                            sx={{
                                display: learnmore ? 'auto' : 'none',
                                width: 'fit-content',
                                fontWeight: 500,
                                fontSize: 12,
                                color: '#22AD01',
                                letterSpacing: '2.4px',
                                'svg': {
                                    width: 24,
                                    height: 24,
                                    ml: 1,
                                }
                            }}
                            onClick={()=> router.push(`/news/${learnmore}`)}
                        >
                            LEARN MORE
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12.1204 8.8254C11.9407 8.61574 11.965 8.30009 12.1746 8.12038C12.3843 7.94067 12.6999 7.96495 12.8796 8.17461L15.8796 11.6746C16.0401 11.8619 16.0401 12.1382 15.8796 12.3254L12.8796 15.8254C12.6999 16.0351 12.3843 16.0593 12.1746 15.8796C11.965 15.6999 11.9407 15.3843 12.1204 15.1746L14.8415 12L12.1204 8.8254ZM8.12038 8.8254C7.94067 8.61574 7.96495 8.30009 8.17461 8.12038C8.38428 7.94067 8.69993 7.96495 8.87964 8.17461L11.8796 11.6746C12.0401 11.8619 12.0401 12.1382 11.8796 12.3254L8.87964 15.8254C8.69993 16.0351 8.38428 16.0593 8.17461 15.8796C7.96495 15.6999 7.94067 15.3843 8.12038 15.1746L10.8415 12L8.12038 8.8254Z" fill="#22AD01" />
                            </svg>
                        </ButtonBase>
                    </Stack>
                </Stack>

            </Stack>
        </ScrollAnimation>
    )
}

export function LifeCycleRight(props: IProps) {
    const { index, image, title, text, learnmore, pl, color } = props
    return (
        <ScrollAnimation animateIn='fadeInUp' delay={index * 100} animateOnce={true}>
            <Stack direction={'column'}
                sx={{
                    'img': {
                        width: 110,
                        height: 110,
                        objectFit: 'contain'
                    },
                    ml: '-1px',
                    pb: 5,
                    borderLeft: `2px solid ${color || '#000200'}`,
                    position: 'relative',
                    px: [1, 1, 5, 5, 5],
                    width: '100%'
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: -11,
                        color: color || '#000200'
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" fill="white" stroke="currentColor" stroke-width="2" />
                    </svg>
                </Box>
                <img src={image || '/assets/images/carbon-1.png'} alt='carbon-1' />
                <Stack direction={'row'} spacing={.5}
                    sx={{
                        '.index': {
                            fontSize: 24,
                            fontWeight: 600,
                            color: '#22AD01'
                        },

                    }}
                >

                    <div className="index">{index}.</div>
                    <Stack direction={'column'} spacing={.5}
                        sx={{
                            textAlign: 'left',
                            'div:first-child': {
                                fontWeight: 600,
                                fontSize: [16, 16, 24, 24, 24],
                            },
                            'div:nth-child(2)': {
                                fontSize: [14, 14, 16, 16, 16],
                                fontWeight: 500,
                            }
                        }}
                    >
                        <div>{title}</div>
                        <div>{text}</div>
                        <ButtonBase
                            sx={{
                                display: learnmore ? 'auto' : 'none',
                                width: 'fit-content',
                                fontWeight: 500,
                                fontSize: 12,
                                color: '#22AD01',
                                letterSpacing: '2.4px',
                                'svg': {
                                    width: 24,
                                    height: 24,
                                    ml: 1,
                                }
                            }}
                            onClick={()=> router.push(`/news/${learnmore}`)}
                        >
                            LEARN MORE
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12.1204 8.8254C11.9407 8.61574 11.965 8.30009 12.1746 8.12038C12.3843 7.94067 12.6999 7.96495 12.8796 8.17461L15.8796 11.6746C16.0401 11.8619 16.0401 12.1382 15.8796 12.3254L12.8796 15.8254C12.6999 16.0351 12.3843 16.0593 12.1746 15.8796C11.965 15.6999 11.9407 15.3843 12.1204 15.1746L14.8415 12L12.1204 8.8254ZM8.12038 8.8254C7.94067 8.61574 7.96495 8.30009 8.17461 8.12038C8.38428 7.94067 8.69993 7.96495 8.87964 8.17461L11.8796 11.6746C12.0401 11.8619 12.0401 12.1382 11.8796 12.3254L8.87964 15.8254C8.69993 16.0351 8.38428 16.0593 8.17461 15.8796C7.96495 15.6999 7.94067 15.3843 8.12038 15.1746L10.8415 12L8.12038 8.8254Z" fill="#22AD01" />
                            </svg>
                        </ButtonBase>
                    </Stack>
                </Stack>

            </Stack>
        </ScrollAnimation>
    )
}