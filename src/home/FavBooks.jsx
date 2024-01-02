import React from 'react'
import FavBooksImg from '../assets/favoritebook.jpg';

const FavBooks = () => {
  return (
    <div className='px-4 lg:px-24 my-20'>
        <div className='md:w-1/2'>
            <img src={FavBooksImg}
                alt=''
                className='rounded md:w-10/12'/>
        </div>
        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold
            my-5 md:w-3/4 leading-snug'>Find Your Favorite <span
            className='text-blue-700'> Book Here!</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium enim iusto alias laborum nemo voluptates quidem vero nulla soluta possimus excepturi, obcaecati est modi inventore dolorem id earum quam hic.</p>
            <div className='flex flex-col sm:flex-row
            justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>800+</h3>
                    <p className='text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>550+</h3>
                    <p className='text-base'>Register Users</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1200+</h3>
                    <p className='text-base'>PDF Downloads</p>
                </div>
            </div>                
        </div>
    </div>
  )
}

export default FavBooks