"use client"
import { UserContex } from '@/usercontex/userProvider';
import Link from 'next/link';
import React, { use } from 'react';

const BookCard = ({ book }) => {
  const {id, title, description, stock } = book;
  const user = use(UserContex);
  console.log(user)
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>
        <p>{book.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{book.stock}</button>
          <Link href={`/books/${id}`}>
            <button className="btn btn-primary"> Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;