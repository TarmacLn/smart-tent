import { useEffect, useState } from "react";
import { uiStore } from "../../stores";
import React from "react";
import { observer } from "mobx-react-lite";
import Catalogue from "./Tabs/Catalogue";
import Basket from "./Tabs/Basket";

function Food() {
    const [currentTab, setCurrentTab] = useState(uiStore.CurrentTab);

    useEffect(() => {
        setCurrentTab(uiStore.CurrentTab);
    }, [uiStore.CurrentTab]);

    return (
        <div className='Covers'>
            {currentTab === 0 && <Catalogue />}
            {currentTab === 1 && <Basket />}
        </div>
    );
}

export default observer(Food);
