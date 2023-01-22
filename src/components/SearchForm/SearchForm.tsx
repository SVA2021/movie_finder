import CloseIcon from '@mui/icons-material/Close';
import {Box, Button, Grid, MenuItem, Select, Slider, Typography} from '@mui/material';
import {FC, memo, useEffect} from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectFilters, setSearchExtended} from '../../features/movieFinder/movieFinderSlice';
import {getFiltersAsync} from '../../features/movieFinder/movieFinderThunks';
import {TSearchForm} from '../../features/movieFinder/movieFinderTypes';
interface SearchFormProps {
  initialFilters: TSearchForm | null
  closeHandler: () => void
}

const DEFAULT_SEARCH_FORM: TSearchForm = {
  countries: 'default',
  genres: 'default',
  order: 'RATING',
  rating: [0, 10],
  year: [1950, 2024],
}

export const SearchForm: FC<SearchFormProps> = memo(({closeHandler, initialFilters}) => {

  const dispatch = useAppDispatch();
  const Filters = useAppSelector(selectFilters);
  const Countries = Filters?.countries ?? [];
  const Genres = Filters?.genres ?? [];
  const BASE_FILTER_DATA: TSearchForm = initialFilters ?? DEFAULT_SEARCH_FORM;

  const onSubmit: SubmitHandler<TSearchForm> = data => onSubmitHandler(data);
  const {control, handleSubmit} = useForm<TSearchForm>();

  function onSubmitHandler(data: TSearchForm) {
    dispatch(setSearchExtended(data));
    closeHandler();
  }

  useEffect(() => {
    if (Filters === null) dispatch(getFiltersAsync());
  }, []);

  return (
    <Box
      p={{xs: 1, md: 2, lg: 4}}
      zIndex={1000}
      bgcolor={'primary.main'}
      sx={{
        position: 'fixed',
        inset: 0,
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box component={'form'} onSubmit={handleSubmit(onSubmit)} width={'80%'} >
        <Typography mb={{xs: 4, md: 20}} variant="h3" color={'secondary'} textAlign={'center'} >
          Дополнительные фильтры поиска
        </Typography>
        <Grid container spacing={{xs: 0, md: 8}} >
          <Grid item xs={12} md={6}>
            <Typography pb={4} variant="body1" component={'h4'} textTransform={'capitalize'} color={'secondary'}>
              год выпуска
            </Typography>
            <Controller
              name={'year'}
              control={control}
              defaultValue={BASE_FILTER_DATA.year}
              render={({field}) => (
                <Slider
                  {...field}
                  onChange={(_, value) => field.onChange(value)}
                  valueLabelDisplay="on"
                  max={2022}
                  min={1950}
                  step={1}
                  marks
                  color={'secondary'}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography pb={4} variant="body1" component={'h4'} textTransform={'capitalize'} color={'secondary'}>
              рейтинг
            </Typography>
            <Controller
              name={'rating'}
              control={control}
              defaultValue={BASE_FILTER_DATA.rating}
              render={({field}) => (
                <Slider
                  {...field}
                  onChange={(_, value) => field.onChange(value)}
                  valueLabelDisplay="on"
                  max={10}
                  min={0}
                  step={0.5}
                  marks
                  color={'secondary'}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography pb={4} variant="body1" component={'h4'} color={'secondary'}>
              Сортировать по
            </Typography>
            <Controller
              render={({field}) => (
                <Select {...field} color={'secondary'} >
                  <MenuItem value={'RATING'}>рейтингу</MenuItem>
                  <MenuItem value={'NUM_VOTE'}>количеству голосов</MenuItem>
                  <MenuItem value={'YEAR'}>году выпуска</MenuItem>
                </Select>
              )}
              defaultValue={BASE_FILTER_DATA.order}
              name={'order'}
              control={control}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography pb={4} variant="body1" component={'h4'} color={'secondary'}>
              Страна производитель
            </Typography>
            <Controller
              render={({field}) => (
                <Select {...field} color={'secondary'} >
                  <MenuItem value={'default'}>сбросить фильтр</MenuItem>
                  {
                    Countries.map((item) =>
                      <MenuItem key={item.id} value={item.id}>{item.country}</MenuItem>
                    )
                  }
                </Select>
              )}
              defaultValue={BASE_FILTER_DATA.countries}
              name={'countries'}
              control={control}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography pb={4} variant="body1" component={'h4'} color={'secondary'}>
              Жанр
            </Typography>
            <Controller
              render={({field}) => (
                <Select {...field} color={'secondary'} >
                  <MenuItem value={'default'}>сбросить фильтр</MenuItem>
                  {
                    Genres.map((item) =>
                      <MenuItem key={item.id} value={item.id}>{item.genre}</MenuItem>
                    )
                  }
                </Select>
              )}
              defaultValue={BASE_FILTER_DATA.genres}
              name={'genres'}
              control={control}
            />
          </Grid>
        </Grid>

        <Box mt={4} textAlign={'center'} >
          <Button type={'submit'} >Искать</Button>
        </Box>

      </Box>

      <Box sx={{position: 'absolute', top: {xs: 10, md: 32}, right: {xs: 10, md: 32}}}>
        <Button onClick={closeHandler} ><CloseIcon fontSize='small' /></Button>
      </Box>

    </Box>
  );
});