import {CssBaseline, GlobalStyles, ThemeProvider} from '@mui/material';
import {Route, Routes} from 'react-router-dom';
import {Layout} from './layout';
import {Details, Home, TopPage} from './pages';
import {theme} from './theme';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles styles={{body: {backgroundColor: '#19283F'}}} />
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='top/:type' element={<TopPage />} />
                    <Route path='details/:id' element={<Details />} />
                    <Route path='*' element={<Home />} />
                </Route>
            </Routes>
        </ThemeProvider>
    )
};