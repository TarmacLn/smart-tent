import { useEffect, useState } from "react";
import { uiStore } from "../../stores";
import React from "react";
import { observer } from "mobx-react-lite";
import Main from "./Tabs/Main";
import Complete from "./Tabs/Complete";
import { Edit } from "@mui/icons-material";
import EditSelection from "./Tabs/EditSelection";

function Covers() {
    const [currentTab, setCurrentTab] = useState(uiStore.CurrentTab);

    useEffect(() => {
        setCurrentTab(uiStore.CurrentTab);
    }, [uiStore.CurrentTab]);

    return (
        <div className='Covers'>
            {currentTab === 0 && <Main />}
            {currentTab === 1 && <Complete />}
            {currentTab === 2 && <EditSelection />}
        </div>
    );
}

export default observer(Covers);
