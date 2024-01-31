import React from 'react';

function Watches(props) {
    let {image,itemname,price} = props
    return (
      <div className="deals container-fluid bg-light  text-center w-25 ">
     
        <div className="ms-2 me-2 veg-item">
          <div className="vegimg " style={{ height: "300px", width: "350px" }} >
            
            <img src={image} alt="" style={{height:"100%",width:"100%"}}/>
          </div>
          <div className="veg dicription py-1">
            <p className="">{itemname}</p>
          </div>
          <div className="price">
            
            <span className="ms-2">
              <span>{price}</span>
            </span>
          </div>
          
          <div className="d-grid gap-2 col-6 mx-auto py-2">
            <button  className="bottom btn btn-success  text-light border border-light">
             Buy Now
            </button>
          </div>
        </div>
       
      </div>
    );
  };
export default Watches;