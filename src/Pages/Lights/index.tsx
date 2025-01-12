import React from 'react';
import { Link } from 'react-router-dom';

function Lights() {
    return (
        <div className='Page lights'>
            Lights
            {' '}
            <Link to='/'>Menu</Link>
        </div>
    );
}

export default Lights;
