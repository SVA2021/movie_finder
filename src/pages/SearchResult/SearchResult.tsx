import { Box, Pagination, Skeleton, Typography } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { TOP2 } from "../../features/movieFinder/fakeData";
import { selectSearchResult, selectStatus } from "../../features/movieFinder/movieFinderSlice";
// import SmallCard from "../SmallCard/SmallCard";

const ITEMS = TOP2.films;

// interface TSearchResultProps {
// 	total: number
// 	totalPages: number
// 	page: number
// 	items: TSearchItem[]
// }

const SearchResult = () => {

	const dispatch = useAppDispatch();
	const SERVER_STATUS = useAppSelector(selectStatus);
	const SEARCH_RESULT = useAppSelector(selectSearchResult);

	const { currentPage, total, totalPages, keyword, items } = SEARCH_RESULT;
	const CARDS = items[currentPage];

	const [page, setPage] = useState<number>(currentPage);

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	}

	return (
		<Box sx={{ mt: 2, pt: 2, }}>
			<Typography gutterBottom variant="h3" component={'h3'}>
				{SERVER_STATUS === 'idle' && `Результат поиска по "${keyword}", всего найдено ${total}`}
				{SERVER_STATUS === 'failed' && `Что то пошло не так...`}
				{SERVER_STATUS === 'loading' && <Skeleton />}
			</Typography>
			{/* <Box display={'grid'} gridTemplateColumns={'repeat(12, 1fr)'} gap={1}>
				{
					SERVER_STATUS === 'loading'
						? <Skeleton />
						: CARDS.map((item) =>
							<Box gridColumn={{ xs: 'span 12', md: 'span 3', lg: 'span 2' }}>
								<SmallCard item={item} handleClick={(n: number) => console.log(n)} />
							</Box>
						)}
			</Box> */}
			<Box sx={{
				m: 2,
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
				<Pagination
					onChange={handleChange}
					count={totalPages || 0}
					color={'primary'} page={page}
					boundaryCount={2}
					size={'large'}
				/>
			</Box>
		</Box>
	)
}

export default SearchResult;