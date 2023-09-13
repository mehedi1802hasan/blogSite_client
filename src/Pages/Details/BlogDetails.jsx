import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const loader=useLoaderData();
    return (
        <div>
            <h3>id wayssss</h3>
            <p>title:: {loader.name}</p>
        </div>
    );
};

export default BlogDetails;