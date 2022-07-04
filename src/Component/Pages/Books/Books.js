import React from 'react';
import allBooks from '../../../booksdb.json'
import Book from './Book';
import './Books.local.css'
const Books = () => {


    return (
        <div className='my-10'>
            <p className='py-3 text-center text-xl font-bold '>All Favourite Books</p>
            <div className='flex flex-wrap gap-6 justify-center '>
                {
                    allBooks.map((book) => <Book
                        key={book.id}
                        book={book}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;