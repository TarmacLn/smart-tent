import React from 'react';
import { observer } from 'mobx-react-lite';
import './App.less';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

const App: React.FC = () => {

    const theme = createTheme({
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
