import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PopularTag = () => {
    const [story,setStory]=useState([]);
    const lifestyle =story.filter(item=>item.value ==='lifestyle');
    const health =story.filter(item=>item.value ==='health');
    const trending =story.filter(item=>item.value ==='trending');
    const design =story.filter(item=>item.value ==='design');
    const fashion =story.filter(item=>item.value ==='fashion');
    const sports =story.filter(item=>item.value ==='sports');
    useEffect(()=>{
        fetch('https://blog-site-server-6tp8d2x43-mehedi1802hasan.vercel.app/story')
        .then(res=>res.json())
        .then(data=>setStory(data))
    },[])
    return (
        <div className='mt-12 p-16'>
            <h3 className='font-bold text-3xl mb-6 '>Popular tags</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>

            <Link to='/lifestyle' className="h-60 bg-cover bg-center relative hover:scale-105 duration-700" style={{ backgroundImage: 'url("https://i.ibb.co/0rZR4CS/pexels-photo-173301.jpg")' }}>
  <div className='bg-black absolute inset-0 opacity-80 flex justify-center items-center'>
    <div className='flex gap-7 items-center text-center p-5 text-white font-bold  '>
      <h3 className='text-2xl'># Lifestyle</h3>
      <h4 className='border-2 border-white px-5 py-3 text-3xl'>

        {lifestyle.length}
      </h4>
    </div>
  </div>
</Link>


<Link to='health' className="h-60 bg-cover bg-center relative hover:scale-105 duration-700" style={{ backgroundImage: 'url("https://i.ibb.co/56fKnGm/pexels-photo-3683074.jpg")' }}>
  <div className='bg-black absolute inset-0 opacity-80 flex justify-center items-center'>
    <div className='flex gap-7 items-center text-center p-5 text-white font-bold  '>
      <h3 className='text-2xl'># Health</h3>
      <h4 className='border-2 border-white px-5 py-3 text-3xl'> {health.length}</h4>
    </div>
  </div>
</Link>

<Link to='trending' className="h-60 bg-cover bg-center relative hover:scale-105 duration-700" style={{ backgroundImage: 'url("https://i.ibb.co/KK0h815/pexels-photo-6142426.jpg")' }}>
  <div className='bg-black absolute inset-0 opacity-80 flex justify-center items-center'>
    <div className='flex gap-7 items-center text-center p-5 text-white font-bold  '>
      <h3 className='text-2xl'># Trending</h3>
      <h4 className='border-2 border-white p-5 text-3xl'> {trending.length}</h4>
    </div>
  </div>
</Link>
<Link to='/design' className="h-60 bg-cover bg-center relative hover:scale-105 duration-700" style={{ backgroundImage: 'url("https://i.ibb.co/zhn5CKr/pexels-photo-276514.jpg")' }}>
  <div className='bg-black absolute inset-0 opacity-80 flex justify-center items-center'>
    <div className='flex gap-7 items-center text-center p-5 text-white font-bold '>
      <h3 className='text-2xl'># Design</h3>
      <h4 className='border-2 border-white px-5 py-3 text-3xl'> {design.length}</h4>
    </div>
  </div>
</Link>

<Link to='fashion' className="h-60 bg-cover bg-center relative hover:scale-105 duration-700" style={{ backgroundImage: 'url("https://i.ibb.co/rFVngn4/pexels-photo-934070.jpg")' }}>
  <div className='bg-black absolute inset-0 opacity-80 flex justify-center items-center'>
    <div className='flex gap-7 items-center text-center p-5 text-white font-bold  '>
      <h3 className='text-2xl'>Fashion</h3>
      <h4 className='border-2 border-white px-5 py-3 text-3xl'> {fashion.length}</h4>
    </div>
  </div>
</Link>

<Link to='sports' className="h-60 bg-cover bg-center relative hover:scale-105 duration-700" style={{ backgroundImage: 'url("hhttps://i.ibb.co/Vg3rntM/pexels-photo-269948.jpg")' }}>
  <div className='bg-black absolute inset-0 opacity-80 flex justify-center items-center'>
    <div className='flex gap-7 items-center text-center p-5 text-white font-bold  '>
      <h3 className='text-2xl'># Sport</h3>
      <h4 className='border-2 border-white px-5 py-3 text-3xl'> {sports.length}</h4>
    </div>
  </div>
</Link>


            </div>
        </div>
    );
};

export default PopularTag;
