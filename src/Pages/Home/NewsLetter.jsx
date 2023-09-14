import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'

const NewsLetter = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        const form = e.target;
        const emailValue = form.email.value;
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'email send successfully',
            showConfirmButton: false,
            timer: 1500
          })
        console.log(emailValue);
        
        // Clear the input field by resetting the email state variable
        setEmail('');
    }

    return (
        <div
            className="h-72 relative flex flex-col justify-center items-center"
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
            <div className="gap-8 space-y-6 space-x-2 relative text-white md:flex items-center">
                <h3 className='text-4xl font-bold'>Subscribe to see what we're <br /> thinking</h3>
                <form onSubmit={handleSubscribe} className=''>
                    <TextField
                        label=""
                        type='email'
                        name='email'
                        required
                        placeholder='enter your email'
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update email state
                        InputProps={{
                            endAdornment: (
                                <Button type='submit' variant="contained" color="warning" className='bg-yellow-500 text-white'>
                                    Subscribe
                                </Button>
                            ),
                        }}
                        className='bg-white'
                    />
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;
