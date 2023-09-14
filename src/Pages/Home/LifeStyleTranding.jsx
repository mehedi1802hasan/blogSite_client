import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LifeStyleTranding = () => {
    const [allstory,setAllstory]=useState([]);
    useEffect(()=>{
        fetch('https://blog-site-server-6tp8d2x43-mehedi1802hasan.vercel.app/story')
        .then(res=>res.json())
        .then(data=>setAllstory(data))
    },[]);
    const lifeStyleStories= allstory.filter(item=>item.value ==="lifestyle");
    // const lifeStyleStories = allstory.filter(item => item.value === "LifeStyle");
   const trendingStories =allstory.filter(item=>item.value==="trending");
    return (
        <div className='mx-2 gap-5 grid grid-cols-1 md:grid-cols-2 mt-20 mb-10'>
            <div>
                <h3 className='text-3xl font-bold mb-7 '>#LifeStyle</h3>
            <div className='md:space-y-10 '>
                {
                    lifeStyleStories.slice(0,3).map(item=>   <Link to={`/story/${item._id}`}key={item.image} className='md:flex gap-10 justify-center items-center '>
                    <div className='h-full w-full'><img  className='rounded-lg h-48 w-96 mx-auto ' src={item.image}alt="" /></div>
                    <div> 
                   <h4 className='text-2xl font-bold w-96 my-4 mx-2'>{item.name}</h4>      
                   <h4 className='mx-2 '>{item.description.slice(0, 250)}{item.description.length > 50 ? "..." : ""}</h4>

                   </div>
                </Link>)
                }
            </div>
            </div>
            <div>
            <h3 className='text-3xl font-bold mb-7'>#Tranding</h3>
            <div className='space-y-12'>
                {
                    trendingStories.slice(0,3).map(item=>     <Link to={`/story/${item._id}`} key={item.image} className='md:flex gap-10 justify-center items-center '>
                    <div className='h-full w-full'><img className='h-48 w-96 mx-auto rounded-lg' src={item.image}alt="" /></div>
                    <div> 
                 
                   <h4 className='text-2xl font-bold w-96 my-4 mx-2'>{item.name}</h4>     
                   <h4 className='mx-2'>{item.description.slice(0, 250)}{item.description.length > 50 ? "..." : ""}</h4>

                   </div>
                </Link>)
                }
            </div>
            </div>
        </div>
    );
};

export default LifeStyleTranding;