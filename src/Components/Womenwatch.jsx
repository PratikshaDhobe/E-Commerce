import React from 'react'


 import oneone from'./Imges/women/11.jpg'
 import twotwo from'./Imges/women/12.jpg'
 import threethree from'./Imges/women/13.jpg'
 import fourfour from './Imges/women/14.jpg'
 import fivefive from'./Imges/women/15.jpg'
 import sixsix from'./Imges/women/16.jpg'
 import sevenseven from'./Imges/women/17.jpg'
 import eighteight from './Imges/women/18.jpg'
 import ninenine from'./Imges/women/19.jpg'
 import tenten from'./Imges/women/20.jpg'




import Watches from './Watches.jsx';

const Womenwatches = () => {
    let myWatch= [
        {
            id:1,
            image: oneone,
            itemname: "Timex Fria Women Green Round Dial Analogue Quartz - TWEL14303 ",
            price: "₹ 22,495.00 "

        },
        {
            id:2,
            image:twotwo,
            itemname: "Gc Sport Chic Brown Dial Round Case Quartz Women Watch - Z20001L4MF",
            price: "₹ 20,495.00 "

        },
        {
            id:3,
            image:threethree,
            itemname: "Gc Sport Chic White Dial Round Case Quartz Women Watch - Y92002L1MF",
            price: "₹ 11,495.00 "

        },
        {
            id:4,
            image:fourfour,
            itemname: "United Colors of Benetton Social Green Dial Round Case Quartz Analog Women Watch - UWUCL0102",
            price: "₹ 13,495.00 "

        },
        {
            id:5,
            image:fivefive,
            itemname: "Gc Sport Chic Silver Dial Round Case Quartz Women Watch - Z20002L1MF",
            price: "₹ 16,495.00 "

        },
        {
            id:6,
            image:sixsix,
            itemname: "Gc Sport Chic Silver Dial Round Case Quartz Analog Women Watch - Z09001L1MF",
            price: "₹ 33,495.00 "

        },
        {
            id:7,
            image:sevenseven,
            itemname: "Gc Sport Chic White Dial Round Case Quartz Women Watch - Y92005L1MF",
            price: "₹ 26,495.00 "

        },
        {
            id:8,
            image:eighteight,
            itemname: "Gc Sport Chic Green Dial Round Case Quartz Women Watch - Z20004L9MF",
            price: "₹ 29,495.00 "

        },
        {
            id:9,
            image: ninenine,
            itemname: "Gc Sport Chic Silver Dial Round Case Quartz Analog Women Watch - Z09002L1MF",
            price: "₹ 15,495.00 "

        },{
            id:10,
            image: tenten,
            itemname: "Gc Sport Chic White Dial Round Case Quartz Analog Women Watch - Z15001L1MF",
            price: "₹ 20,495.00 "

        }


    ]

    const WatchCombo = [];
    for(let i = 0; i<myWatch.length;i+=4){
        WatchCombo.push(myWatch.slice(i,i+4));
    }

  return (
    <>
    <div className='text-left ms-5 my-5 me-5 '>
      <center><h3 className='bottom'>WOMEN'S WATCHES</h3></center>
    </div>

    <div id="carouselExample2" className="carousel d-flex flex-wrap slide vw-100 my-4">
      <div className="carousel-inner">
        {WatchCombo.map((watchGroup, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''} w-100`} key={index}>
            <div className="d-flex justify-content-around">
              {watchGroup.map((watch) => (
                <Watches
                  key={watch.id}
                  image={watch.image}
                  itemname={watch.itemname}
                  price={watch.price}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample2"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample2"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </>
  )
}

export default Womenwatches