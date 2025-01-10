import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const App: React.FC = () => {
    return (
        <div>
            Menu
            <Link to='/setup'>Tent Setup</Link>
            <Link to='/stakes'>Tent Stakes</Link>
            <Link to='/covers'>Tent Covers</Link>
            <Link to='/lights'>Tent Lights</Link>
        </div>
    );
}

export default observer(App);
