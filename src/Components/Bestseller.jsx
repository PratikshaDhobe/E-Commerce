import React from 'react'

 import one from'./Imges/best seller/101.jpg'
 import two from'./Imges/best seller/102.jpg'
 import three from'./Imges/best seller/103.jpg'
 import four from './Imges/best seller/104.jpg'
 import five from'./Imges/best seller/105.jpg'
 import six from'./Imges/best seller/106.jpg'
 import seven from'./Imges/best seller/107.jpg'
 import eight from './Imges/best seller/108.jpg'
 import nine from'./Imges/best seller/109.jpg'
 import ten from'./Imges/best seller/110.jpg'




import Watches from './Watches.jsx';



const Bestseller = () => {
    let myWatch= [
        {
            id:1,
            image: one,
            itemname: "Guess Mens Dress Silver Dial Round Case  Analog  Men Watch - GW0626G4",
            price: "₹ 22,495.00 "

        },
        {
            id:2,
            image:two,
            itemname: "Guess Ladies Trend Champagne Dial Round Case Analog Women Watch - GW0605L2",
            price: "₹ 20,495.00 "

        },
        {
            id:3,
            image:three,
            itemname: "Versace Hellenyium Green Dial Round Case Swiss Quartz Women Watch - VEHU00420",
            price: "₹ 11,495.00 "

        },
        {
            id:4,
            image:four,
            itemname: "Versace Greca Twist Black Dial Round Case Swiss Quartz Women Watch - VE6I00323",
            price: "₹ 13,495.00 "

        },
        {
            id:5,
            image:five,
            itemname: "Versace Greca Logo Blue Dial Round Case Swiss Quartz Unisex Watch - VE7G00423",
            price: "₹ 16,495.00 "

        },
        {
            id:6,
            image:six,
            itemname: "Versace Greca Chic Green Dial Round Case Swiss Quartz Women Watch - VE3D00522",
            price: "₹ 33,495.00 "

        },
        {
            id:7,
            image:seven,
            itemname: "Philipp  Plein  Newness  Men Silver  Dial  Quartz -         PWSAA0423",
            price: "₹ 26,495.00 "

        },
        {
            id:8,
            image:eight,
            itemname: "Philipp Plein Newness Men Silver Dial Automatic - PWRAA0323",
            price: "₹ 29,495.00 "

        },
        {
            id:9,
            image: nine,
            itemname: "Ted Baker Fleure Purple Dial Round Case Quartz Analog Women Watch - BKPFLS3039I",
            price: "₹ 15,495.00 "

        },{
            id:10,
            image: ten,
            itemname: "Ted Baker Lilabel Silver-Tone Dial Round Case Quartz Analog Women Watch - BKPLIS3049I",
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
      <center><h3 className='bottom'>BEST SELLER</h3></center>
    </div>
    
    <div id="carouselExample" className="carousel d-flex flex-wrap slide vw-100 my-4">
      <div className="carousel-inner">
        {WatchCombo.map((watch, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''} w-100`} key={index}>
            <div className="d-flex justify-content-around">
            {
    watch.map((watch)=>(
        <Watches
        key={watch.id}
        image={watch.image}
        itemname={watch.itemname}
        price={watch.price}
        />
    ))
}
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
     
   
    </>
  )
}

export default Bestseller