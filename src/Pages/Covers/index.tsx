import { useEffect, useState } from "react";
import { uiStore } from "../../stores";
import React from "react";
import { observer } from "mobx-react-lite";
import Main from "./Tabs/Main";
import Complete from "./Tabs/Complete";

function Covers() {
    const [currentTab, setCurrentTab] = useState(uiStore.CurrentTab);

    useEffect(() => {
        setCurrentTab(uiStore.CurrentTab);
    }, [uiStore.CurrentTab]);

    return (
        <div className='Covers'>
            {currentTab === 0 && <Main />}
            {currentTab === 1 && <Complete />}
        </div>
    );
}

export default observer(Covers);
