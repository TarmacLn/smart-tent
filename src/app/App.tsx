import React from 'react';
import { observer } from 'mobx-react-lite';
import './App.less';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

const App: React.FC = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: lightBlue[600],
                dark: lightBlue[800],
                contrastText: '#fff',
            },
            secondary: {
                main: '#ffffffff',
                dark: '#c7eaffff',
                contrastText: lightBlue[600],
            },
            error: {
                main: '#a85e4a',
                dark: '#7a3b27',
                contrastText: '#fff',
            },
            mode: 'light',
        },
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#e4e4e4ff',
                    },
                },
            },
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <div className="app">
                <Outlet />
            </div>
        </ThemeProvider>
    );
};

export default observer(App);
