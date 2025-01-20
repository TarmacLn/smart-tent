import React from 'react';
import { Link } from 'react-router-dom';

function PageNotReady() {
    return (
        <div>
            <h1>The page is not ready yet!</h1>
            <p>This page is under construction. Please check back later.</p>
            <Link to='/menu'>Go back to the homepage</Link>
        </div>
    );
}

export default PageNotReady;
