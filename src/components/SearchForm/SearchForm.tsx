import {Box, Paper} from '@mui/material';
import React, {FC, memo, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {getFiltersAsync, selectFilters} from '../../features/movieFinder/movieFinderSlice';
import {TSearchRequest} from '../../features/movieFinder/movieFinderTypes';

interface SearchFormProps {
    isOpen: boolean
    initialFilters: TSearchRequest
    closeHandler: () => void
    searchHanler: () => void
}

export const SearchForm: FC<SearchFormProps> = memo(({isOpen, searchHanler, closeHandler, initialFilters}) => {


    const dispatch = useAppDispatch();
    const Filters = useAppSelector(selectFilters);

    useEffect(() => {
        dispatch(getFiltersAsync());
    }, []);

    return (
        <Paper elevation={24} >
            <Box
                p={{xs: 1, md: 2, lg: 4}}
                zIndex={10000}
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
                onClick={closeHandler}
            >
            </Box>
        </Paper>
    );
});