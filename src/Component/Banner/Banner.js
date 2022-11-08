import React from 'react';
import image1 from '../../assets/bannerphoto/banner.jpg'
import image2 from '../../assets/bannerphoto/ban.jpg'
import image3 from '../../assets/bannerphoto/banner01.jpg'
import image4 from '../../assets/bannerphoto/banner02.jpg'


const Banner = () => {
    return (

        <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src={image1}  alt='' className="w-full rounded-lg "  />
    
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
      <h3 className='text-6xl text-white font-bold'>
        Affordable <br />
        Price for Wedding <br />
        Photography.
      </h3>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2  w-1/2 left-24 top-1/2">
      <p className='text-1xl text-white font-bold'>

      "Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever... it remembers little things, long after you have forgotten everything."

        </p>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-2/3">
    <button className="btn glass  mx-2">Booking Now</button>
   <Link to='/services'> <button className="btn glass   "> See Packages</button></Link>
    </div>


    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full">
    <img src={image2} alt='' className="w-full rounded-lg" />

    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
      <h3 className='text-6xl text-white font-bold'>
        Affordable <br />
        Price for Wedding <br />
        Photography.
      </h3>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2  w-1/2 left-24 top-1/2">
      <p className='text-1xl text-white font-bold'>

      "Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever... it remembers little things, long after you have forgotten everything."

        </p>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-2/3">
    <button className="btn glass mx-2">Booking Now</button>
    <button className="btn glass "> See Packages</button>
    </div>


    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full">
    <img src={image3} alt='' className="w-full rounded-lg" />

    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
      <h3 className='text-6xl text-white font-bold'>
        Affordable <br />
        Price for Wedding <br />
        Photography.
      </h3>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2  w-1/2 left-24 top-1/2">
      <p className='text-1xl text-white font-bold'>

      "Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever... it remembers little things, long after you have forgotten everything."

        </p>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-2/3">
    <button className="btn glass mx-2">Booking Now</button>
    <button className="btn glass "> See Packages</button>
    </div>


    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide4" className="carousel-item relative w-full">
    <img src={image4} alt='' className="w-full rounded-lg" />

    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
      <h3 className='text-6xl text-white font-bold'>
        Affordable <br />
        Price for Wedding <br />
        Photography.
      </h3>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2  w-1/2 left-24 top-1/2">
      <p className='text-1xl text-white font-bold'>

      "Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever... it remembers little things, long after you have forgotten everything."

        </p>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-2/3">
    <button className="btn glass mx-2">Booking Now</button>
    <button className="btn glass "> See Packages</button>
    </div>


    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

    );
};

export default Banner;