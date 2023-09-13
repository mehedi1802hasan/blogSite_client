import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const loader=useLoaderData();
    return (
        <div>
         <div className='max-w-screen-md mx-auto'>
            <img className='mt-8' src={loader.image} alt="" />
         </div>
         <div><h4 className='text-3xl font-bold my-8 text-center'>{loader.name}</h4></div>
         <div><h4 className=' w-10/12 text-base mx-auto mb-10'><span className='font-bold'>Desriction:</span> {loader.description}</h4></div>
        </div>
    );
};

export default BlogDetails;