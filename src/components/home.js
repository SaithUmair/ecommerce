import React from 'react'
import image1 from '../images/massgainer.png'
export default function home() {
  return (
    <section className='home'>
      <h1 className='heading1'>Fuel Your Potential</h1>
      <article className='article'>

      <h1 className='h1' >Brand Name</h1>
      <h2 className='h3'>Explore Supplemets | Brands | <br /> Products etc </h2>
      <button className='btn'>Explore</button>
      </article>
      <section className='homesec2'>
    <h1 className='heading'>Shop By Categories</h1>
      <article className='home2'>
    <figure>
     <a href='/' > <img src={image1} alt="" /></a>
      <figcaption>Mass Gainer</figcaption>
    </figure>
    <figure>
     <a href='/' > <img src={image1} alt="" /></a>
      <figcaption>Mass Gainer</figcaption>
    </figure>   <figure>
     <a href='/' ><img src={image1} alt="" /></a>
      <figcaption>Mass Gainer</figcaption>
    </figure>   <figure>
     <a href='/' > <img src={image1} alt="" /></a>
      <figcaption>Mass Gainer</figcaption>
    </figure>   <figure>
     <a href='/' > <img src={image1} alt="" /></a>
      <figcaption>Mass Gainer</figcaption>
    </figure>   <figure>
     <a href='/' > <img src={image1} alt="" /></a>
      <figcaption>Mass Gainer</figcaption>
    </figure>   <figure>
     <a href='/' > <img src={image1} alt="" /></a>
      <figcaption>Mass Gainer</figcaption>
    </figure>
      </article>
      </section>
      </section>
  )
}
