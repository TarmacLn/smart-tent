import { useEffect, useState } from "react";
import { uiStore } from "../../stores";
import React from "react";
import { observer } from "mobx-react-lite";
import Main from "./Tabs/Main";
import Panels from "./Tabs/Panels";
import AC from "./Tabs/AC";

function Energy() {
    const [currentTab, setCurrentTab] = useState(uiStore.CurrentTab);

    useEffect(() => {
        setCurrentTab(uiStore.CurrentTab);
    }, [uiStore.CurrentTab]);

    return (
        <div className='Energy'>
            {currentTab === 0 && <Main />}
            {currentTab === 1 && <Panels />}
            {currentTab === 2 && <AC />}
        </div>
    );
}

export default observer(Energy);
