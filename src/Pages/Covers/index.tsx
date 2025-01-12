import React from 'react';
import { Link } from 'react-router-dom';

function Covers() {
    return (
        <div className='Page covers'>
            Covers
            {' '}
            <Link to='/'>Menu</Link>
        </div>
    );
}

export default Covers;
