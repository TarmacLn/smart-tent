import { useEffect, useState } from "react";
import { uiStore } from "../../stores";
import React from "react";
import { observer } from "mobx-react-lite";

function Map() {
    const [currentTab, setCurrentTab] = useState(uiStore.CurrentTab);

    useEffect(() => {
        setCurrentTab(uiStore.CurrentTab);
    }, [uiStore.CurrentTab]);

    return (
        <div className='Map'>

        </div>
    );
}

export default observer(Map);
