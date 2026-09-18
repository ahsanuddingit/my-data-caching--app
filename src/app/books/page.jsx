import React from 'react';
import BookCard from '../components/BookCard';

const getBooks=async()=>{
    const res = await fetch ('http://localhost:5000/books', {caches:'no-store'})
    return res.json();
}

const BooksPage = async() => {
    const books = await getBooks();

    return (
        <div>
            <h1>Wellcome to bookspage</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    books.map(book => <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BooksPage;