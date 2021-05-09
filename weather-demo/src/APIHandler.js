import React from 'react';
import Weather from './Components/Weather';

function APIHandler() {
    return (
        <div>
            <Weather data={data} />
        </div>
    );
}

export default APIHandler;
