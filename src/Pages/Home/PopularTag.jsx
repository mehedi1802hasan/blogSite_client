import React from 'react';

const PopularTag = () => {
    return (
        <div className='mt-12 p-16'>
            <h3 className='font-bold text-3xl mb-6'>Popular tags</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>

                <div className="  h-60 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://i.ibb.co/WzrhzpL/travel-7.webp")' }}>
                    <div className='bg-black absolute inset-0 opacity-80'></div>
                    <h3 className='border-2 border-red-500 p-5 text-white font-bold text-3xl '>hello world</h3>
                </div>

                <div className=" h-60 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://i.ibb.co/WzrhzpL/travel-7.webp")' }}>
                    <div className='bg-black absolute inset-0 opacity-80'></div>
                    <h3 className='border-2 border-red-500 p-5 text-white font-bold text-3xl '>hello </h3>
                </div>

                <div className=" h-60 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://i.ibb.co/WzrhzpL/travel-7.webp")' }}>
                    <div className='bg-black absolute inset-0 opacity-80'></div>
                    <h3 className='border-2 border-red-500 p-5 text-white font-bold text-3xl '>hello ///</h3>
                </div>

                <div className=" h-60 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://i.ibb.co/WzrhzpL/travel-7.webp")' }}>
                    <div className='bg-black absolute inset-0 opacity-80 '></div>
                    <h3 className='border-2 border-red-500 p-5 text-white font-bold text-3xl  '>hello world</h3>
                </div>

                <div className=" h-60 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://i.ibb.co/WzrhzpL/travel-7.webp")' }}>
                    <div className='bg-black absolute inset-0 opacity-80'></div>
                    <h3 className='border-2 border-red-500 p-5 text-white font-bold text-3xl '>hello world</h3>
                </div>

                <div className=" h-60 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://i.ibb.co/WzrhzpL/travel-7.webp")' }}>
                    <div className='bg-black absolute inset-0 opacity-80'></div>
                    <h3 className='border-2 border-red-500 p-5 text-white font-bold text-3xl '>hello world</h3>
                </div>

              
                
            </div>
        </div>
    );
};

export default PopularTag;
