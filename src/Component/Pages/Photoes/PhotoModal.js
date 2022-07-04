import React from 'react';
import { MapInteractionCSS } from 'react-map-interaction';

const PhotoModal = ({ image }) => {
    
    return (
        <div>
            <input type="checkbox" id={image.img} class="modal-toggle m-0 p-0" />
            <label for={image.img} class="modal h-full bg-neutral bg-opacity-70 w-full cursor-pointer m-0 p-0 shadow-none	">
                <label class="modal-box w-full lg:h-full sm:h-2/3 max-w-5xl bg-transparent  m-0 p-0 shadow-none rounded-none" for="">
                    <MapInteractionCSS className="ease-linear">
                        <img src={image.img} className=" w-full object-cover"></img>
                    </MapInteractionCSS>
                </label>
            </label>
        </div>
    );
};

export default PhotoModal;