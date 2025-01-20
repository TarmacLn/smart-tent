import React, { useEffect } from 'react';
import TentDetails from './Tabs/TentDetails';
import { uiStore } from '../../stores';
import { observer } from 'mobx-react-lite';
import TentLocation from './Tabs/TentLocation';
import TentStats from './Tabs/TentStats';
import ErrorPage from '../ErrorPage';

function Setup() {
    const [currentTab, setCurrentTab] = React.useState(uiStore.CurrentTab);

    useEffect(() => {
        setCurrentTab(uiStore.CurrentTab);
    }, [uiStore.CurrentTab]);

    return (
        <div className='Setup'>
            {currentTab === 0 && <TentDetails />}
            {currentTab === 1 && <TentLocation />}
            {currentTab === 2 && <TentStats />}
            {currentTab > 2 && <ErrorPage />}
        </div>
    );
}

export default observer(Setup);
