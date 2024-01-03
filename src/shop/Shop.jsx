import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';

const Shop = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/all-books')
    .then(res => res.json(res))
    .then(data => setBooks(data))
  }, [])
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold
      text-center'>All Books Are Here</h2>

        <div className='grid lg:grid-cols-4 sm:grid-cols-2
        md:grid-cols-3 grid-cols-1 gap-8
        my-12'>
          {
            books.map(book =>
              <Card
              >
                <img src={book.imageURL} alt='books' 
                  className='h-96'
                />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                  {book.bookTitle}
                </p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
              <button className='bg-blue-700 font-semibold
              text-white py-2 rounded
              '>Buy Now</button>
            </Card>
              )
          }
        </div>
    </div>
  )
}

export default Shop