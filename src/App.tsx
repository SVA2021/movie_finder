import {CssBaseline, GlobalStyles, ThemeProvider} from '@mui/material';
import {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from './app/hooks';
import {selectIsAuth, selectUser, setUser} from './features/auth/authSlice';
import {Layout} from './layout';
import {Details, Home, SearchPage, TopPage} from './pages';
import {theme} from './theme';

export const App = () => {

  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    const username = localStorage.getItem('user');
    if (!isAuth && username) dispatch(setUser({login: username, password: 'random'}));
    if (!username && isAuth && user?.login) localStorage.setItem('user', user?.login);
  }, [isAuth])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{body: {backgroundColor: '#19283F'}}} />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='top/:type' element={<TopPage />} />
          <Route path='details/:id' element={<Details />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
};