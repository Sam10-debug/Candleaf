import React from 'react'
import Hero from '../hero/Hero'
import Product from '../product/Products'
import Clean from '../clean/Clean'
import Testimonials from '../testimonials/Testimonials'
import Popular from '../popular/Popular'
import Cart from '@/app/cart/[id]/page'

const Conatiner = () => {
  return (
    <>
    <Hero />
    <Product />
    <Clean />
    <Testimonials />
    <Popular />
    {/* <Cart /> */}
    </>
  )
}

export default Conatiner
