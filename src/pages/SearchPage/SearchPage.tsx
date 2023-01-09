import {Box, Grid, Pagination, Stack, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {SearchForm, SmallCard, StyledButton} from "../../components";
import {getMoviesByKeywordAsync, selectSearchExtended, selectSearchRequest, selectSearchResult, setSearchRequest} from "../../features/movieFinder/movieFinderSlice";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const DEFAULT_SEARCH_KEYWORD = {keyword: '', page: 1};

export const SearchPage = () => {

  const dispatch = useAppDispatch();
  const SEARCH_RESULT = useAppSelector(selectSearchResult);
  const SEARCH_REQUEST = useAppSelector(selectSearchRequest) ?? DEFAULT_SEARCH_KEYWORD;
  const SEARCH_EXTENDED = useAppSelector(selectSearchExtended);
  const searchItems = SEARCH_RESULT?.items ?? [];
  const totalPages = SEARCH_RESULT?.totalPages ?? 0;
  const total = SEARCH_RESULT?.total ?? 0;
  const [isFormOpen, setIsFormOpen] = useState(false);

  const title = `Результат поиска по "${SEARCH_REQUEST.keyword}", всего найдено ${total}`;

  useEffect(() => {
    dispatch(getMoviesByKeywordAsync({search: SEARCH_REQUEST, extended: SEARCH_EXTENDED}))
  }, [SEARCH_REQUEST, SEARCH_EXTENDED, dispatch]);

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setSearchRequest(SEARCH_REQUEST))
  };

  const PaginationArea = () => {
    return (
      <Stack alignItems={'center'} mt={2} mb={2}>
        <Pagination variant="outlined" shape="rounded" size="large" color="secondary"
          page={SEARCH_REQUEST.page}
          count={totalPages}
          onChange={handleChange}
        />
      </Stack>
    )
  };

  return (
    <Box pt={1} sx={{position: 'relative'}}>
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

      {isFormOpen &&
        <SearchForm
          initialFilters={SEARCH_EXTENDED}
          closeHandler={() => setIsFormOpen(false)}
        />}

      <Box sx={{position: 'fixed', top: {xs: 30, md: 160}, right: {xs: 10, md: 32}}}>
        <StyledButton onClick={() => setIsFormOpen(true)} ><FilterAltIcon fontSize='medium' /></StyledButton>
      </Box>
    </Box>
  )
};