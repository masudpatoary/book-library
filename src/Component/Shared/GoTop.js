import React from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
const GoTop = () => {
    return (
        <div className='fixed right-5 bottom-8 opacity-100	'>
            <a href='#home' className=' btn btn-ghost bg-opacity-100	 p-0 m-0 rounded-full'><BsFillArrowUpCircleFill className='text-3xl text-neutral opacity-100	'></BsFillArrowUpCircleFill></a>
        </div>
    );
};

export default GoTop;