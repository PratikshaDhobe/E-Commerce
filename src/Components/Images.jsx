import React, { useEffect, useState } from 'react'
import img1 from './Imges/1.jpg';
import img2 from './Imges/2.jpg';
import img3 from './Imges/3.jpg';
import img4 from './Imges/4.jpg';
import img5 from './Imges/5.jpg';
import img6 from './Imges/1.jpg';
import img7 from './Imges/2.jpg';
import img8 from './Imges/3.jpg';
import img9 from './Imges/4.jpg';
import img10 from './Imges/5.jpg';
import img11 from './Imges/4.jpg';
import img12 from './Imges/3.jpg';
import img13 from './Imges/2.jpg';
import img14 from './Imges/1.jpg';

const Images = () => {
    const imgArray =[img1,img2,img3,img14,img4,img5,img13,img6,img7,img8,img9,img10,img11,img12
    ]
    const [currentImage,setCurrentImage]=useState(0);

    useEffect(()=>{
         setTimeout(()=>{
            if (currentImage == (imgArray.length-1)) {
                setCurrentImage(0);
              }else
            setCurrentImage(currentImage + 1);
        },2000);
    

    },[currentImage])
  return (
    <div className='container-fluid min-vh-50'>
          <img style={{height:"90vh",width:"100%"}} src={imgArray[currentImage]} alt="" />
    </div>
  )
}

export default Images