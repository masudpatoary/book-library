import React from 'react';
import allVideos from "../../../videoDB.json"
import Video from './Video';
const Videos = () => {
    return (
        <div>
            <div className='flex justify-center flex-wrap gap-5'>
                {
                    allVideos.map(video => <Video
                        key={video.id}
                        video={video}
                    ></Video>)
                }

            </div>
        </div>
    );
};

export default Videos;