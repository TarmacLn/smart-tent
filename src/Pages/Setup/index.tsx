import React from 'react';
import { Link } from 'react-router-dom';

function Setup() {
    return (
        <div className='Page setup'>
            Tent setup
            {' '}
            <Link to='/'>Menu</Link>
        </div>
    );
}

export default Setup;
