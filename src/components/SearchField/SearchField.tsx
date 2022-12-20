import {Search} from '@mui/icons-material';
import {Box, IconButton, Input, InputAdornment} from '@mui/material';
import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';

export const SearchField = () => {
    const ref = useRef<HTMLInputElement | undefined>();
    const navigate = useNavigate();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        if (!ref || !ref.current) return false;
        e.preventDefault();
        // navigate('/search');
        console.log(ref.current.value)
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