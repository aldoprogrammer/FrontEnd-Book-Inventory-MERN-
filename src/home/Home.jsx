import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavBooks from './FavBooks'




const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellerBooks/>
      <FavBooks />
   </div>
  )
}

export default Home
