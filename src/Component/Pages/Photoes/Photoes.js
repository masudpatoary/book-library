import React from 'react';
import allImages from '../../../imgDB.json'
import Photo from './Photo';

const Photoes = () => {

    return (
        <div>
            <div className=' md:grid md:grid-cols-3 gap-2 lg:grid-cols-4 md:row-auto md:grid-flow-dense'>
                {
                    allImages.map(image => <Photo
                        key={image.id}
                        image={image}></Photo>
                    )
                }
            </div>
        </div>
    );
};

export default Photoes;