import {Box, Grid, Pagination, Stack, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {SmallCard} from "../../components";
import {getMoviesByKeywordAsync, selectSearch, setSearchKeyword} from "../../features/movieFinder/movieFinderSlice";
import {TSearchRequest} from "../../features/movieFinder/movieFinderTypes";

export const SearchPage = () => {

    const dispatch = useAppDispatch();
    const SEARCH = useAppSelector(selectSearch);

    const [searchParams, setSearchParams] = useState<TSearchRequest>({
        keyword: SEARCH.request?.keyword ?? '',
        page: SEARCH.request?.page ?? 1,
    });

    const searchItems = SEARCH.result?.items ?? [];
    const totalPages = SEARCH.result?.totalPages ?? 0;
    const total = SEARCH.result?.total ?? 0;

    const title = `Результат поиска по "${searchParams.keyword}", всего найдено ${total}`;

    useEffect(() => {
        dispatch(getMoviesByKeywordAsync(searchParams))
    }, [searchParams]);

    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(setSearchKeyword(searchParams))
    };

    const PaginationArea = () => {
        return (
            <Stack alignItems={'center'} mt={2} mb={2}>
                <Pagination variant="outlined" shape="rounded" size="large" color="secondary"
                    page={searchParams.page}
                    count={totalPages}
                    onChange={handleChange}
                />
            </Stack>
        )
    };

    return (
        <Box pt={1}>
            <Typography gutterBottom variant="h3" component={'h2'} textTransform={'capitalize'} color={'common.white'}>
                {title}
            </Typography>
            <Box pt={1}>
                <PaginationArea />
                <Grid container rowSpacing={2} columnSpacing={{xs: 0, md: 2, lg: 4}}>
                    {
                        searchItems.map((item, index) =>
                            <Grid key={index} item xs={12} md={3} lg={2}>
                                <SmallCard item={{...item, id: item.kinopoiskId, filmLength: null, rating: null}} />
                            </Grid>
                        )
                    }
                </Grid>
                <PaginationArea />
            </Box>
        </Box>
    )
};