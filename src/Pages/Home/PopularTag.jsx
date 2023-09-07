import React from 'react';

const PopularTag = () => {
    return (
        <div className='mt-12'>
            <h3 className='font-bold text-3xl mb-6'>Popular tags</h3>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className="w-72 h-60 bg-cover bg-center bg-blue-500 bg-opacity-0" style={{ backgroundImage: 'url("https://i.ibb.co/WzrhzpL/travel-7.webp")' }}>
                    <h4>#LifeStyle</h4>
                    <h3 className='border-2 border-red-500 p-5'>13</h3>
                </div>
            </div>
        </div>
    );
};

export default PopularTag;
