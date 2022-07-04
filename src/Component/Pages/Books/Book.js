import React from 'react';

const Book = ({ book }) => {
    const { name, writer, thumb, edition, publishYear, url, details } = book
    return (
        <div className="flex flex-col rounded-lg justify-center content-center card-hover cursor-pointer w-80">

            <div className='flex justify-center items-center mt-2 '>
                <figure><img src={thumb} alt="car!" className='w-64' /></figure>
            </div>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{writer}</p>
                <div class="card-actions justify-end">
                    <a href={url} target="_blank" class="btn btn-primary text-neutral">বইটি পড়ে দেখুন</a>
                </div>
            </div>
        </div>
    );
};

export default Book;