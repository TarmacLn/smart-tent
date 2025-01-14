import React, { useEffect } from 'react';
import TentDetails from './Tabs/TentDetails';
import { uiStore } from '../../stores';
import { observer } from 'mobx-react-lite';

function Setup() {
    const [currentTab, setCurrentTab] = React.useState(uiStore.CurrentTab);

    useEffect(() => {
        setCurrentTab(uiStore.CurrentTab);
    }, [uiStore.CurrentTab]);

    return (
        <div className='Setup'>
            {currentTab === 0 && <TentDetails />}
            {currentTab !== 0 && <div>Other Content</div>}
        </div>
    );
}

export default observer(Setup);
