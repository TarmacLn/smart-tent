import React, { useEffect } from 'react';
import { uiStore } from '../../stores';
import ErrorPage from '../ErrorPage';
import Basic from './Tabs/Basic';
import Colour from './Tabs/Colour';
import Special from './Tabs/Special';
import Menu from './Tabs/Menu';
import './Lights.less';
import { observer } from 'mobx-react-lite';

function Lights() {
    const [currentTab, setCurrentTab] = React.useState(uiStore.CurrentTab);

    useEffect(() => {
        setCurrentTab(uiStore.CurrentTab);
    }, [uiStore.CurrentTab]);

    return (
        <div className='Lights'>
            {currentTab === 0 && <Menu />}
            {currentTab === 1 && <Basic />}
            {currentTab === 2 && <Colour />}
            {currentTab === 3 && <Special />}
            {currentTab > 3 && <ErrorPage />}
        </div>
    );
}

export default observer(Lights);
