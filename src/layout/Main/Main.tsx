import {Backdrop, CircularProgress, Container} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import {useAppSelector} from "../../app/hooks";
import {selectStatus} from "../../features/movieFinder/movieFinderSlice";
import {Home} from "../../pages";

export const Main = () => {
	const SERVER_STATUS = useAppSelector(selectStatus);

	return (
		<Container maxWidth='xl' sx={{minHeight: '100vh'}} >
			<Backdrop open={SERVER_STATUS === 'loading'} >
				<CircularProgress color="warning" />
			</Backdrop>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</Container>
	)
};