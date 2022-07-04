import React, { useState } from 'react';

const VideoModal = ({ video }) => {
    
    const [w, setW] = useState()
    const [h, setH] = useState()
    console.log(video?.title)
    const iframeWidth = width => {
        if (window.innerWidth <= 640) {
            console.log("small",w,h)
            setW(365)
            setH(225)
        }
        else {
            console.log("large",w,h)
            setW(560)
            setH(315)

        }
    }
    // window.onload(iframeWidth)
    return (
        <div onLoad={()=>iframeWidth()}>
            <input type="checkbox" id="my-modal" class="modal-toggle m-0 p-0" />
            <div class="modal">
                <div class="modal-box min-w-fit flex justify-center m-0 p-0">
                    <div class="flex flex-wrap justify-center m-0 p-0">
                        <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2 m-0 p-0">✕</label>
                        {/* <h3 class="font-bold text-lg mb-5">{video.title}</h3> */}
                        <div>
                            <iframe width={w} height={h} src={video?.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default VideoModal;