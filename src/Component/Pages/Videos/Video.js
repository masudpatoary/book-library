import React from 'react';
import VideoModal from './VideoModal';

const Video = ({ video }) => {
    const { title, thumb } = video

    return (
        <div className=''>
            <label for="my-modal" className="flex flex-col rounded-lg justify-center content-center card-hover cursor-pointer w-fit">

                <div className='flex justify-center items-center mt-2 '>
                    <figure ><img src={thumb} alt={title} className='w-96 rounded-xl' /></figure>
                </div>
                <div class="card-body text-center font-bold">
                    <h4 class="">{title}</h4>
                </div>
            </label>
            <VideoModal video={video}></VideoModal>
        </div>
    );
};

export default Video;