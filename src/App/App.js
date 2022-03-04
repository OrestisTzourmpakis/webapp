import './App.css';
import { createTheme, CssBaseline, ThemeProvider, Typography } from '@material-ui/core';
import MainPage from '../pages/mainpage/MainPage';
import { TabContextProvider } from '../contexts/TabContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/login/Login';
import RegisterPage from '../pages/register/RegisterPage';
import { SnackbarContextProvider } from '../contexts/SnackbarContext';
import ExternalLoginPage from '../pages/login/ExternalLoginPage';


const theme = createTheme({
  custom: {
    drawer: {
      backgroundColor:"#4a64e3"
    },
    drawerSelectedItem: {
      backgroundColor:"white"
    },
    mainPage: {
      backgroundColor:"#e8e9ec"
    }
  
  },

});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SnackbarContextProvider>

       
      <CssBaseline/>
      {/* Appbar with drawert first */}
      {/* <Typography variant='h2'>
        Hello there
      </Typography> */}
      <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
      <Route path="/external-login" element={<ExternalLoginPage />} />

              <Route path="/register" element={<RegisterPage />} />

            <Route path="/*" element={
              <TabContextProvider>
                <MainPage/>
              </TabContextProvider>
              }/>
            </Routes>
          </Router>
          </SnackbarContextProvider>
        </ThemeProvider>
    </>
  );
}

export default App;
