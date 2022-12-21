import {Search} from '@mui/icons-material';
import {Box, IconButton, Input, InputAdornment} from '@mui/material';
import {useRef} from 'react';
import {createSearchParams, useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../app/hooks';
import {setSearchKeyword} from '../../features/movieFinder/movieFinderSlice';

export const SearchField = () => {
    const ref = useRef<HTMLInputElement | undefined>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!ref || !ref.current) return false;
        const keyword = ref.current.value;
        const path = {
            pathname: '/search',
            search: createSearchParams({keyword}).toString(),
        };
        navigate(path);
        dispatch(setSearchKeyword({keyword, page: 1}));
        ref.current.value = '';
    }

    return (
        <Box component={'form'} onSubmit={handleSubmit} p={1}>
            <Input
                sx={{
                    p: 2,
                    bgcolor: 'secondary.main',
                    borderRadius: 4,
                    opacity: 0.5,
                    '&:hover': {
                        opacity: 0.75,
                    },
                    '&:focus-within': {
                        opacity: 1,
                    },
                }}
                disableUnderline
                inputRef={ref}
                fullWidth
                placeholder='Movies, series, keywords...'
                endAdornment={
                    <InputAdornment position="end"  >
                        <IconButton
                            type={'submit'}
                            sx={{
                                color: 'primary.main',
                                '&:hover': {
                                    color: 'action.hover',
                                },
                                '&:active': {
                                    color: 'action.active',
                                },
                            }}
                        >
                            <Search fontSize='medium' />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </Box>
    )
};