import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const loader=useLoaderData();
    return (
        <div>
         <div className='max-w-screen-md mx-auto'>
            <img className='mt-8 rounded-3xl' src={loader.image} alt="" />
         </div>
         <div><h4 className='text-3xl font-bold my-8 text-center font-serif'>{loader.name}</h4></div>
         <div><h4 className=' w-10/12 text-base mx-auto mb-5'><span className='font-bold'>Desriction:</span> {loader.description} </h4> </div>
         <div className=' w-10/12 text-base mx-auto mb-10 text-yellow-700 font-bold  font-serif'> --( {loader.date}<span > Published by : {loader.writerName} </span> )--</div>
        </div>
    );
};

export default BlogDetails;