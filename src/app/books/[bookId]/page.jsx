
import React from 'react';

const BookDetailPage = async({params}) => {
    const {bookId}=await params;


    const res = await fetch (`http://localhost:5000/books/${bookId}`)
    const book = await res.json();

    return (
        <div className='flex flex-col flex-1 justify-center items-center '>

       <div className="card  bg-base-100 shadow-sm py-20">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">{book.id}</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{book.title}</h2>
      <span className="text-xl">{book.price}</span>
    </div>
    <p  className="mt-6 flex flex-col gap-2 text-3xl">
        {book.description}
    </p>
    <div className="mt-6">
      <button className="btn btn-primary btn-block">{book.stock}</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default BookDetailPage;