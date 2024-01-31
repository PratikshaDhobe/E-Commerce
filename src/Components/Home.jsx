import React from 'react';
import one from './Imges/watch1.jpg';
import two from './Imges/watch2.jpg';
import three from './Imges/watch2.jpg';


function Home() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src={one} className="h-40 w-20" alt="First slide" />
          </div>
          <div className="carousel-item active">
          <img src={two} className="h-40 w-20" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img src={three} className="h-40 w-30" alt="Third slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;