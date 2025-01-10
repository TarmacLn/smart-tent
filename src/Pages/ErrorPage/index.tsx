import { FC, useEffect, useState } from 'react';
import { isRouteErrorResponse, useRouteError, Link } from 'react-router-dom';

import './ErrorPage.less';
import React from 'react';

const ErrorPage: FC = () => {
    const error = useRouteError();

    const [errorStatus, setErrorStatus] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (isRouteErrorResponse(error)) {
            setErrorStatus(error.status);
            setErrorMessage(error.statusText);
        }
    }, [error]);

    return (
        <div id='ErrorPage'>
            <div className='ErrorStatus'>{errorStatus}</div>
            <div className='ErrorMessage'>{errorMessage}</div>
            <div className='Home'>
                Return to <Link to='/'>homepage</Link>
            </div>
        </div>
    );
};

export default ErrorPage;
