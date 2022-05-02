import React from 'react'
import Products from '../components/Products';

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto px-8 2xl:px-0'>
        <h1 className="my-10 text-center">Redux Toolkit Store</h1>
        <section>
          <h5 className="text-xl text-center font-semibold">Products</h5>
            <Products/>
        </section>
    </div>
  )
}

export default Home