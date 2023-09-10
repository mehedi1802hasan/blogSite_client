import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';

const NewsLetter = () => {
    return (
        <div
            className=" h-72 relative flex flex-col justify-center items-center"
            style={{
                backgroundImage: 'url("https://blooria.electronthemes-ghost.com/content/images/2022/05/river-1-1.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div
                className="absolute inset-0 bg-gradient-to-b from-black to-transparent"
                style={{ backdropFilter: 'blur(4px)' }}
            ></div>
            <div className="gap-8 space-y-6 space-x-2 relative text-white md:flex  items-center">
                <h3 className='text-4xl font-bold'>Subscribe to see what we're <br /> thinking</h3>
                <div className=''>
                    <TextField
                        label=""
                        placeholder='enter your email'
                        variant="outlined"
                        InputProps={{
                          
                            endAdornment: <Button variant="contained" color="warning" className='bg-yellow-500 text-white'>Subscribe</Button>,
                        }}
                        className='bg-white'
                    />
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
