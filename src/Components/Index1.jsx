import React from 'react';
import one from './brands/1.jpg';
import two from './brands/2.jpg';
import three from './brands/3.jpg';
import four from './brands/4.jpg';
import five from './brands/5.jpg';
import six from './brands/6.jpg';
import seven from './brands/7.jpg';
import eight from './brands/8.jpg';
import nine from './brands/9.jpg';
import ten from './brands/10.jpg';
import eleven from './brands/11.jpg';
import twelve from './brands/13.jpg';
import thiteen from './brands/14.jpg';
import fourteen from './brands/15.jpg';


class Index1 extends React.Component {
  render() {
    return (
    <>
      <center><h1>OUR BRANDS</h1></center>
      <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* Set 1 */}
          <div className="carousel-item active">
            <div className="row">
              <div className="col">
                <img src={one} className="d-block w-100" alt="Slide 1" />
              </div>
              <div className="col">
                <img src={two} className="d-block w-100" alt="Slide 2" />
              </div>
              <div className="col">
                <img src={three} className="d-block w-100" alt="Slide 3" />
              </div>
              <div className="col">
                <img src={four} className="d-block w-100" alt="Slide 4" />
              </div>
            </div>
          </div>

          {/* Set 2 */}
          <div className="carousel-item">
            <div className="row">
              <div className="col">
                <img src={five} className="d-block w-100" alt="Slide 1" />
              </div>
              <div className="col">
                <img src={six} className="d-block w-100" alt="Slide 2" />
              </div>
              <div className="col">
                <img src={seven} className="d-block w-100" alt="Slide 3" />
              </div>
              <div className="col">
                <img src={eight} className="d-block w-100" alt="Slide 4" />
              </div>
            </div>
          </div>

          {/* Set 3 */}
          <div className="carousel-item">
            <div className="row">
              <div className="col">
                <img src={nine} className="d-block w-100" alt="Slide 1" />
              </div>
              <div className="col">
                <img src={ten} className="d-block w-100" alt="Slide 2" />
              </div>
              <div className="col">
                <img src={eleven} className="d-block w-100" alt="Slide 3" />
              </div>
              <div className="col">
                <img src={twelve} className="d-block w-100" alt="Slide 4" />
              </div>
            </div>
          </div>

           {/* Set 3 */}
           <div className="carousel-item">
            <div className="row">
              <div className="col">
                <img src={thiteen} className="d-block w-100" alt="Slide 1" />
              </div>
              <div className="col">
                <img src={fourteen} className="d-block w-100" alt="Slide 2" />
              </div>
              <div className="col">
                <img src={eight} className="d-block w-100" alt="Slide 3" />
              </div>
              <div className="col">
                <img src={twelve} className="d-block w-100" alt="Slide 4" />
              </div>
            </div>
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
    </>
    );
  }
}

export default Index1;