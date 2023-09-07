import React, { useEffect, useState } from 'react';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const AllStories = () => {
    const [allstory, setAllstory] = useState([]);
    const [showAllItems, setShowAllItems] = useState(false);

    useEffect(() => {
        fetch('allstory.json')
            .then(res => res.json())
            .then(data => setAllstory(data))
    }, []);

    // Filter items to show only the first 6 or all items based on showAllItems state
    const displayedItems = showAllItems ? allstory : allstory.slice(0, 6);

    return (
        <div className='mt-10 '>
            <h3 className='text-center text-4xl font-bold font-serif mb-8'>All Stories</h3>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 border-0'>
                {displayedItems.map(item => (
                    <div key={item.image}>
                        <img className='h-64 w-full rounded-2xl hover:scale-105' src={item.image} alt="" />
                        <div className='flex justify-between items-center my-6  '>
                            <h3 className='text-yellow-500 font-bold'>{item.value}</h3>
                            <h4><CalendarMonthIcon/>{item.date}</h4>
                        </div>
                        <h4 className='text-2xl font-serif font-bold my-3 '>{item.name}</h4>
                        <h4>{item.description}</h4>
                    </div>
                ))}
            </div>

            {!showAllItems && (
                <div className='text-center my-5'>
                    <button
                        className="bg-transparent hover:bg-green-500 text-black font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded"
                        onClick={() => setShowAllItems(true)}
                    >
                        Show All
                    </button>
                </div>
            )}
        </div>
    );
};

export default AllStories;
