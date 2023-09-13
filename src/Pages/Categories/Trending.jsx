import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Trending = () => {
    const [story,setStory]=useState([]);
    const trending =story.filter(item=>item.value ==='trending');
   
    useEffect(()=>{
        fetch('https://blog-site-server-6tp8d2x43-mehedi1802hasan.vercel.app/story')
        .then(res=>res.json())
        .then(data=>setStory(data))
    },[])
    return (
        <div>
            <div>
               
                <div><h3 className='text-center font-serif text-3xl mt-7'>Total Trending Blog: {trending.length}</h3></div>

                <div className='my-9 mx-7'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 border-0'>
                {trending.map(item => (
                    <div key={item.image}>
                      <Link to={`/story/${item._id}`}>  <img className='h-64 w-full rounded-2xl hover:scale-105 duration-700' src={item.image} alt="" /></Link>
                        <div className='flex justify-between items-center my-6  '>
                            <h3 className='text-yellow-500 font-bold'>{item.value}</h3>
                            <h4><CalendarMonthIcon/>{item.date}</h4>
                        </div>
                        <h4 className='text-2xl font-serif font-bold my-3 '>{item.name}</h4>


                        
  <h4>{item.description.slice(0, 250)}{item.description.length > 50 ? "..." : ""}</h4>
   </div>
                ))}
            </div>
          
                </div>
            </div>
        </div>
    );
};

export default Trending;