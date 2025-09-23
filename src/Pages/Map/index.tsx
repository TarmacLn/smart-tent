import { useEffect, useState } from "react";
import { uiStore } from "../../stores";
import React from "react";
import { observer } from "mobx-react-lite";
import Main from "./Tabs/Main";
import Events from "./Tabs/Events";
import Sights from "./Tabs/Sights";
import Shelters from "./Tabs/Shelters";

function Map() {
    const [currentTab, setCurrentTab] = useState(uiStore.CurrentTab);

    useEffect(() => {
        setCurrentTab(uiStore.CurrentTab);
    }, [uiStore.CurrentTab]);

    return (
        <div className='Map'>
            {currentTab === 0 && <Main />}
            {currentTab === 1 && <Sights />}
            {currentTab === 2 && <Events />}
            {currentTab === 3 && <Shelters />}
        </div>
    );
}

export default observer(Map);
