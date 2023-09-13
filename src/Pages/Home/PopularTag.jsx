import React, { useEffect, useState } from 'react';

const PopularTag = () => {
    const [story,setStory]=useState([]);
    const lifestyle =story.filter(item=>item.value ==='lifestyle');
    const health =story.filter(item=>item.value ==='health');
    const trending =story.filter(item=>item.value ==='trending');
    const design =story.filter(item=>item.value ==='design');
    const popular =story.filter(item=>item.value ==='popular');
    const nature =story.filter(item=>item.value ==='nature');
    useEffect(()=>{
        fetch('http://localhost:2000/story')
        .then(res=>res.json())
        .then(data=>setStory(data))
    },[])
    return (
        <div className='mt-12 p-16'>
            <h3 className='font-bold text-3xl mb-6'>Popular tags</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>

            <div className="h-60 bg-cover bg-center relative hover:scale-105 duration-700" style={{ backgroundImage: 'url("https://i.ibb.co/WzrhzpL/travel-7.webp")' }}>
  <div className='bg-black absolute inset-0 opacity-80 flex justify-center items-center'>
    <div className='flex gap-7 items-center text-center p-5 text-white font-bold  '>
      <h3 className='text-2xl'># Lifestyle</h3>
      <h4 className='border-2 border-white px-5 py-3 text-3xl'>

        {lifestyle.length}
      </h4>
    </div>
  </div>
</div>


<div className="h-60 bg-cover bg-center relative hover:scale-105 duration-700" style={{ backgroundImage: 'url("https://i.ibb.co/WzrhzpL/travel-7.webp")' }}>
  <div className='bg-black absolute inset-0 opacity-80 flex justify-center items-center'>
    <div className='flex gap-7 items-center text-center p-5 text-white font-bold  '>
      <h3 className='text-2xl'># Health</h3>
      <h4 className='border-2 border-white px-5 py-3 text-3xl'> {health.length}</h4>
    </div>
  </div>
</div>

<div className="h-60 bg-cover bg-center relative hover:scale-105 duration-700" style={{ backgroundImage: 'url("https://i.ibb.co/WzrhzpL/travel-7.webp")' }}>
  <div className='bg-black absolute inset-0 opacity-80 flex justify-center items-center'>
    <div className='flex gap-7 items-center text-center p-5 text-white font-bold  '>
      <h3 className='text-2xl'># Trending</h3>
      <h4 className='border-2 border-white p-5 text-3xl'> {trending.length}</h4>
    </div>
  </div>
</div>
<div className="h-60 bg-cover bg-center relative hover:scale-105 duration-700" style={{ backgroundImage: 'url("https://i.ibb.co/WzrhzpL/travel-7.webp")' }}>
  <div className='bg-black absolute inset-0 opacity-80 flex justify-center items-center'>
    <div className='flex gap-7 items-center text-center p-5 text-white font-bold '>
      <h3 className='text-2xl'># Design</h3>
      <h4 className='border-2 border-white px-5 py-3 text-3xl'> {design.length}</h4>
    </div>
  </div>
</div>

<div className="h-60 bg-cover bg-center relative hover:scale-105 duration-700" style={{ backgroundImage: 'url("https://i.ibb.co/WzrhzpL/travel-7.webp")' }}>
  <div className='bg-black absolute inset-0 opacity-80 flex justify-center items-center'>
    <div className='flex gap-7 items-center text-center p-5 text-white font-bold  '>
      <h3 className='text-2xl'># Popular</h3>
      <h4 className='border-2 border-white px-5 py-3 text-3xl'> {popular.length}</h4>
    </div>
  </div>
</div>

<div className="h-60 bg-cover bg-center relative hover:scale-105 duration-700" style={{ backgroundImage: 'url("https://i.ibb.co/WzrhzpL/travel-7.webp")' }}>
  <div className='bg-black absolute inset-0 opacity-80 flex justify-center items-center'>
    <div className='flex gap-7 items-center text-center p-5 text-white font-bold  '>
      <h3 className='text-2xl'># Nature</h3>
      <h4 className='border-2 border-white px-5 py-3 text-3xl'> {nature.length}</h4>
    </div>
  </div>
</div>


            </div>
        </div>
    );
};

export default PopularTag;
