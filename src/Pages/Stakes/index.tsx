import React, { useEffect } from 'react';
import { uiStore } from '../../stores';
import Intro from './Tabs/Intro';
import Instructions1 from './Tabs/Instructions1';
import Instructions2 from './Tabs/Instructions2';
import Instructions3 from './Tabs/Instructions3';
import Instructions4 from './Tabs/Instructions4';
import { observer } from 'mobx-react-lite';

function Stakes() {
    const [currentTab, setCurrentTab] = React.useState(uiStore.CurrentTab);

    useEffect(() => {
        setCurrentTab(uiStore.CurrentTab);
    }, [uiStore.CurrentTab]);

    return (
        <div className='Setup'>
            {currentTab === 0 && <Intro />}
            {currentTab === 1 && <Instructions1 />}
            {currentTab === 2 && <Instructions2 />}
            {currentTab === 3 && <Instructions3 />}
            {currentTab === 4 && <Instructions4 />}
            {currentTab > 4 && <div>ERROR PAGE</div>}
        </div>
    );
}

export default observer(Stakes);
