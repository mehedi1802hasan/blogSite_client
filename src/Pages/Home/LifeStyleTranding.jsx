import React, { useEffect, useState } from 'react';

const LifeStyleTranding = () => {
    const [allstory,setAllstory]=useState([]);
    useEffect(()=>{
        fetch('allstory.json')
        .then(res=>res.json())
        .then(data=>setAllstory(data))
    },[]);
    const lifeStyleStories= allstory.filter(item=>item.value ==="lifestyle");
    // const lifeStyleStories = allstory.filter(item => item.value === "LifeStyle");
   const trendingStories =allstory.filter(item=>item.value==="trending");
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-12'>
            <div>
                <h3 className='text-3xl font-bold mb-7'>#LifeStyle</h3>
            <div className='space-y-12'>
                {
                    lifeStyleStories.map(item=>    <div className='flex gap-10 justify-center items-center'>
                    <div><img className='h-52 w-52 rounded-lg' src={item.image}alt="" /></div>
                    <div> 
                   <h4 className='text-2xl font-bold w-96 my-4'>Gujarat titans beat rajasthan royals to win title in first tournament</h4>      
                  <h4 className=' w-96'>Titans captain Pandya took 3-17, including the prize scalp of England's Jos Buttler for 39 to restrict Royals to 130-9

</h4>
                   </div>
                </div>)
                }
            </div>
            </div>
            <div>
            <h3 className='text-3xl font-bold mb-7'>#Tranding</h3>
            <div className='space-y-12'>
                {
                    trendingStories.slice(0,3).map(item=>    <div className='flex gap-10 justify-center items-center'>
                    <div><img className='h-52 w-52 rounded-lg' src={item.image}alt="" /></div>
                    <div> 
                   <h4 className='text-2xl font-bold w-96 my-4'>Gujarat titans beat rajasthan royals to win title in first tournament</h4>      
                  <h4 className=' w-96'>Titans captain Pandya took 3-17, including the prize scalp of England's Jos Buttler for 39 to restrict Royals to 130-9

</h4>
                   </div>
                </div>)
                }
            </div>
            </div>
        </div>
    );
};

export default LifeStyleTranding;