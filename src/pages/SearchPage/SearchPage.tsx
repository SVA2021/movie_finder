import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {Box, Button, Grid, Pagination, Stack, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {ModalBox, SearchForm, SmallCard} from "../../components";
import {selectSearchExtended, selectSearchRequest, selectSearchResult, setSearchRequest} from "../../features/movieFinder/movieFinderSlice";
import {getMoviesByKeywordAsync} from '../../features/movieFinder/movieFinderThunks';

const DEFAULT_SEARCH_KEYWORD = {keyword: '', page: 1};

export const SearchPage = () => {

  const dispatch = useAppDispatch();
  const SEARCH_RESULT = useAppSelector(selectSearchResult);
  const SEARCH_EXTENDED = useAppSelector(selectSearchExtended);
  const SEARCH_REQUEST = useAppSelector(selectSearchRequest) ?? DEFAULT_SEARCH_KEYWORD;
  const [isFormOpen, setIsFormOpen] = useState(false);

  const searchItems = SEARCH_RESULT?.items ?? [];

  useEffect(() => {
    dispatch(getMoviesByKeywordAsync({search: SEARCH_REQUEST, extended: SEARCH_EXTENDED}))
  }, [SEARCH_REQUEST, SEARCH_EXTENDED, dispatch]);

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setSearchRequest({...SEARCH_REQUEST, page}))
  };

  const PaginationArea = () => (
    <Stack alignItems={'center'} mt={2} mb={2}>
      <Pagination variant="outlined" shape="rounded" size="large" color="secondary"
        page={SEARCH_REQUEST.page}
        count={SEARCH_RESULT?.totalPages ?? 0}
        onChange={handleChange} />
    </Stack>
  );

  return (
    <Box pt={1} sx={{position: 'relative'}}>
      <Typography gutterBottom variant="h3" component={'h2'} color={'common.white'}>
        Результат поиска по
        <Typography variant="h3" component={'span'} color={'secondary'} ml={1}>
          "{SEARCH_REQUEST.keyword}"
        </Typography>
        , всего найдено
        <Typography variant="h3" component={'span'} color={'secondary'} ml={1}>
          {SEARCH_RESULT?.total ?? 0}
        </Typography>
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
        <ModalBox closeHandler={() => setIsFormOpen(false)}>
          <SearchForm initialFilters={SEARCH_EXTENDED} closeHandler={() => setIsFormOpen(false)} />
        </ModalBox>
      }

      <Box sx={{position: 'fixed', top: {xs: 30, md: 160}, right: {xs: 10, md: 32}}}>
        <Button onClick={() => setIsFormOpen(true)} >
          <FilterAltIcon fontSize='medium' />
        </Button>
      </Box>
    </Box>
  )
};