// import React from 'react';
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ScheduleIcon from '@mui/icons-material/Schedule';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Banner = () => {
    const [banner,setBanner]=useState([]);
    // const{image,value,name,date,time,writerName,description}=item;
    useEffect(()=>{
        fetch('banner.json')
        .then(res=>res.json())
        .then(data=>setBanner(data))
    },[]);
    const pagination = {
     
        clickable: true,
        renderBullet: function (index, className) {
          return '<span  class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    return (
        <div className='bg-slate-50 p-9'>
            <h4 className=' md:mb-4'>Featured Storeis</h4>
            <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper  "
      >
     
     
       <div>
          
          {
              banner.map(item=>   <SwiperSlide key={item.value}><div className='md:flex gap-16 justify-between '>
           <div className='md:w-1/2'>
           <img className='rounded-3xl mb-9 ' src={item.image} alt="" />
           </div>
        
          <div className='md:w-1/2 md:mt-10'>
            <h3 className='text-yellow-500 font-serif '>{item.value}</h3>
            <h3 className='font-bold text-4xl font-serif my-9'>{item.name}</h3>
            <div className='flex gap-4 mb-8'>
            <p>  <CalendarTodayIcon/> {item.date}</p>
              <p><ScheduleIcon/> {item.time} minutes</p>
              <p>Written By    {item.writerName}</p>
             
            </div>
            <p>{item.description}</p>
          </div>
      </div>       </SwiperSlide> )
          }
          </div>
 

 
     

        
      </Swiper>
    </>
        </div>
    );
};

export default Banner;