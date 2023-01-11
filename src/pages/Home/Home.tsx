import {Box, Link, Typography} from "@mui/material";
import {FC, useEffect} from 'react';
import {Link as RouterLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {SwipeListTemplate} from "../../components";
import { selectHomePage} from "../../features/movieFinder/movieFinderSlice";
import {getTopListAsync} from "../../features/movieFinder/movieFinderThunks";
import {TOP_FILMS_TYPE} from "../../features/movieFinder/movieFinderTypes";
import {getTopListTitle} from "../../utils";

export const Home: FC<any> = () => {

    const dispatch = useAppDispatch();
    const HomePage = useAppSelector(selectHomePage);

    useEffect(() => {
        TOP_FILMS_TYPE.forEach((type) =>
            dispatch(getTopListAsync({type, page: 1}))
        )
    }, []);

    return (
        <Box pt={1}>
            {TOP_FILMS_TYPE.map((type, index) =>
                <Box m={1} key={index} >
                    <Typography
                        ml={{lg: 15, xl: 20}}
                        gutterBottom
                        variant="h3"
                        component={'h2'}
                        textTransform={'capitalize'}
                    >
                        <Link
                            component={RouterLink}
                            underline={'hover'}
                            to={`top/${type}`}
                            sx={{color: 'common.white'}}
                        >
                            {getTopListTitle(type)}
                        </Link>
                    </Typography>
                    <SwipeListTemplate data={HomePage[type]?.data ?? []} />
                </Box>
            )}
        </Box>
    )
};