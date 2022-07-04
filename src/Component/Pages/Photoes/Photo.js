import React from 'react';
import PhotoModal from './PhotoModal';

const Photo = ({image}) => {
    return (
        <div>
            <label for={image.img} className='h-auto'>
                <img src={image.img}  className=" w-full h-full object-cover"></img>
                <PhotoModal image={image}></PhotoModal>
            </label >
        </div>
    );
};

export default Photo;