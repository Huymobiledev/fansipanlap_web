import { Fragment, useEffect, useState } from "react";
import NewSlider from "./components/slider";
import { Box, Container, Grid, Stack } from "@mui/material";
import FilterBar from "./components/filterBar";
import NewItem from "./components/item";
import { ButtonOutline } from "@/components/button";
import { getListNews, getCategories } from "@/api/news";
import router from 'next/router'
import { useTranslation } from "react-i18next";
import NoData from "@/components/button/nodata";
import LoadingDialog from "@/components/dialog/loadingDialog";

export default function ViewNewPage(props: any) {
    const { t, i18n } = useTranslation()

    const [news, setNews] = useState<any>(null);
    const [categories, setCategories] = useState<any[]>([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { _atx } = router.query
    const limit = 20

    const fetchNews = async () => {
        if(loading){
            return
        }
        try {
            setLoading(true);
            let filter: any = {
                limit: limit
            }
            let category = categories?.find(item => item.slug === _atx)
            if (category) {
                filter.category_id = category.category_id
            }
            const result = await getListNews(filter);
            if (result.success) {
                setNews(result);
            } else {
                setError(result?.error?.message)
            }
        } catch (err: any) {
            setError(err?.message);
        } finally {
            setLoading(false);
        }
    }

    const fetchCategories = async () => {
        try {
            const result = await getCategories();
            setCategories(result?.data);
        } catch (err) {
        } finally {
        }
    }

    useEffect(() => {
        fetchNews()
        if(categories.length===0){
            fetchCategories()
        }
        
    }, [_atx, router.locale]);

    if (!news && error) {
        return (
            <Box py={10}>
                <NoData text={error} />
            </Box>
        )
    }

    return (
        <Fragment>
            <LoadingDialog open={loading}/>
            <Container maxWidth='xl'
                sx={{
                    my: 10
                }}
            >
                <NewSlider />
                <FilterBar data={categories} />
                <Grid container component={'ul'}
                    sx={{
                        listStyleType: 'none',
                        px: {
                            xs: 0,
                            md: 'auto'
                        },
                        
                    }}
                >
                    {news && news?.data?.map((item: any) => (
                        <Grid item lg={4} md={6} key={item.article_id} component={'li'}
                            sx={{
                                p: {
                                    md:2,
                                    xs: 0,
                                },
                            }}
                        >
                            <NewItem item={item} />
                        </Grid>
                    ))}
                </Grid>
                {news && news?.pagination?.total > (news?.pagination?.offset + news?.pagination?.limit) &&
                    <Stack direction={'row'} justifyContent={'center'} width={'100%'} py={5}>
                        <ButtonOutline>
                            {t('Load more')}
                        </ButtonOutline>
                    </Stack>
                }
            </Container>

        </Fragment>
    )
}