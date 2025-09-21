import { useEffect, useState } from "react";
import { uiStore } from "../../stores";
import React from "react";
import { observer } from "mobx-react-lite";

function Weather() {
    const [currentTab, setCurrentTab] = useState(uiStore.CurrentTab);

    useEffect(() => {
        setCurrentTab(uiStore.CurrentTab);
    }, [uiStore.CurrentTab]);

    return (
        <div className='Weather'>
        </div>
    );
}

export default observer(Weather);
