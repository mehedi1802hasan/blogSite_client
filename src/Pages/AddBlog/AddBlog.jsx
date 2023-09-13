import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar';
import Swal from 'sweetalert2';

const AddBlog = () => {
  const [image, setImage] = useState('');
  const [value, setValue] = useState('');
  const [name, setName] = useState('');
  const [writerName, setWriterName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const imageValue = form.image.value;
    const valueValue = form.value.value;
    const nameValue = form.title.value;
    const writerNameValue = form.writerName.value;
    const dateValue = form.date.value;
    const timeValue = form.time.value;
    const descriptionValue = form.description.value;

    console.log(imageValue, valueValue, nameValue, writerNameValue, dateValue, timeValue, descriptionValue);

    const addstory = {
      image: imageValue,
      value: valueValue,
      name: nameValue,
      writerName: writerNameValue,
      date: dateValue,
      time: timeValue,
      description: descriptionValue,
    };
    console.log(addstory);

    fetch('https://blog-site-server-6tp8d2x43-mehedi1802hasan.vercel.app/story', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addstory),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'blog successfully added',
            showConfirmButton: false,
            timer: 1500,
          });

          // Reset the form
          form.reset();
        }
      });
  };

    return (
        <div>
            <Navbar></Navbar>
           <div className='p-8 bg-orange-50'>
           <h3 className='text-center text-3xl font-bold font-serif mb-6 '>Add Blog</h3>
              <form onSubmit={handleSubmit} className='w-8/12 mx-auto '>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Url</label>
          <input type="text" name='image' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter the image url" required />
        </div>
        <div>
          <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Value</label>
          <input type="text" name='value' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter the value(like:fashion/sport etc..)" required />
        </div>
        <div>
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">title</label>
          <input type="text" name='title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter the title" required />
        </div>
        <div>
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">writterName</label>
          <input type="text" name='writerName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter the writer name" required />
        </div>
        <div>
          <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
          <input type="date" name='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Read Time</label>
          <input type="number" name='time' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter the reading time" required />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
        <textarea type="text" name='description' className=" p-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter the blog description" required />
      </div>
      
      
      
      <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
           </div>
        </div>
    );
};

export default AddBlog;