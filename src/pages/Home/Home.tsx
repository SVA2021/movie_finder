import {Box, Skeleton} from "@mui/material";
import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {SmallCard} from "../../components";
import {getTopListAsync, selectHomePage, selectHomePageCurrent, selectStatus} from "../../features/movieFinder/movieFinderSlice";

export const Home: FC<any> = () => {

	const dispatch = useAppDispatch();
	const SERVER_STATUS = useAppSelector(selectStatus);
	const CurrentPage = useAppSelector(selectHomePageCurrent);
	const HomePage = useAppSelector(selectHomePage);
	const Films = HomePage === null ? null : HomePage[CurrentPage.type]
	const CurrentFilms = Films === null ? [] : Films[CurrentPage.page]

	useEffect(() => {
		dispatch(getTopListAsync(CurrentPage));
	}, [CurrentPage, dispatch,]);

	return (
		<Box sx={{
			m: 2,
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
		}}>
			<Box display={'grid'} gridTemplateColumns={'repeat(12, 1fr)'} gap={3}>
				{
					SERVER_STATUS === 'loading'
						? <Skeleton />
						: CurrentFilms.map((item) =>
							<Box gridColumn={{xs: 'span 12', md: 'span 3', lg: 'span 2'}} key={item.id} >
								<SmallCard item={item} />
							</Box>
						)}
			</Box>
		</Box>
	)
};