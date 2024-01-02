import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const {
        _id, 
        authorName, 
        imageURL, 
        category, 
        bookDescription, 
        bookTitle
    } = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <img 
            src={imageURL} alt='imageBook'
            className='h-96'
        />
        <h1 className='text-3xl 
        font-bold mt-4
        text-gray-900'>{bookTitle}</h1> 
        <p className='text-gray-700 
        mt-4'>Author By{authorName}</p>   
        <p className='text-blue-700 mt-4'>{category}</p>
        <p className='text-gray-700 mt-4'>{bookDescription}</p>
        
    </div>
  )
}

export default SingleBook