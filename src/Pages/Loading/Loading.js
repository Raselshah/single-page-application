import React from 'react';
import spinner from './images/Spinner-1s-200px.gif'

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <img src={spinner} alt="" />
        </div>
    );
};

export default Loading;