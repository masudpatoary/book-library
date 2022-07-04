import React from 'react';
import { gsap } from "gsap";

const NotFound = () => {
    gsap.to("not-found", {duration: 3, rotation: 360, scale: 0.5,transition: 0.3});
    return (
        <div>
            <div className='not-found block bg-primary m-20 p-5 rounded-lg text-base-100'>
                not found
            </div>
        </div>
    );
};

export default NotFound;