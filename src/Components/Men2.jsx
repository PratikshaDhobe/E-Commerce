import Watches from './watches.jsx';

const Men = () => {
    let myWatch= [
        {
            id:1,
            image:m,
            itemname: "Timex Expedition Black Dial Round Case Quartz Analog Men Watch - TW4B14200JQ",
            price: "₹ 22,495.00 "

        },
        {
            id:2,
            image:n,
            itemname: "United Colors of Benetton Iconic Black Dial Round Case Quartz Analog Men Watch - UWUCG0308",
            price: "₹ 20,495.00 "

        },
        {
            id:3,
            image:o,
            itemname: "United Colors of Benetton Iconic Grey Dial Round Case Quartz Analog Men Watch - UWUCG0306",
            price: "₹ 11,495.00 "

        },
        {
            id:4,
            image:p,
            itemname: "Timex E Class Men Black Round Dial Analogue Quartz - TWEG16716",
            price: "₹ 13,495.00 "

        },
        {
            id:5,
            image:q,
            itemname: "United Colors of Benetton Sport  Ana-Digi Dial Round Case Digital Quartz Unisex Watch - UWUCG0602",
            price: "₹ 16,495.00 "

        },
        {
            id:6,
            image:r,
            itemname: "United Colors of Benetton Sport  Digital Dial Round Case Digital Quartz Unisex Watch - UWUCG0503",
            price: "₹ 33,495.00 "

        },
        {
            id:7,
            image:s,
            itemname: "United Colors of Benetton Signature Light Grey Dial Round Case Quartz Analog Men Watch - UWUCG0000",
            price: "₹ 26,495.00 "

        },
        {
            id:8,
            image:t,
            itemname: "Timex E Class Men Black Round Dial Analogue Quartz - TWEG20200",
            price: "₹ 29,495.00 "

        },
        {
            id:9,
            image:u,
            itemname: "Nautica Tin Can Bay Blue Dial Round Case Quartz Analog Men Watch - NAPTCF211",
            price: "₹ 15,495.00 "

        },{
            id:10,
            image:v,
            itemname: "Nautica Spettacolare Reissue Blue Dial Round Case Quartz Analog Men Watch - NAPSPF203",
            price: "₹ 20,495.00 "

        }

    ]

    const WatchCombo = [];
    for(let i = 0; i<myWatch.length;i+=4){
        WatchCombo.push(myWatch.slice(i,i+4));
    }

  return (
    <>
     <div className='text-left ms-22 my-22 me-22 '>
      <center><h3 className='bottom'>Men</h3></center>
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
        <span className="visually-hidden">Previous1</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next1</span>
      </button>
    </div>
     
   
    </>
  )
}

export default Men