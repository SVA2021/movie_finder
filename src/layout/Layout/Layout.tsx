import {Backdrop, CircularProgress, Container} from "@mui/material";
import {Outlet} from "react-router-dom";
import {useAppSelector} from "../../app/hooks";
import {selectStatus} from "../../features/movieFinder/movieFinderSlice";
import {Footer, Header} from "../index";

export const Layout = () => {
    const SERVER_STATUS = useAppSelector(selectStatus);

    return (
        <Container
            maxWidth='xl'
            sx={{
                minHeight: '100vh',
                bgcolor: 'primary.main',
            }} >
            <Backdrop open={SERVER_STATUS === 'loading'} sx={{zIndex: 1000}} >
                <CircularProgress color="warning" />
            </Backdrop>
            <Header />
            <Outlet />
            <Footer />
        </Container>
    )
};