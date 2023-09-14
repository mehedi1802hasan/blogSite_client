import React, { useContext } from 'react';
import { AuthContext } from '../Pages/LoginRegistration/Provider';
import { Navigate, useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Swal from 'sweetalert2'

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location =useLocation();
    console.log(location)
   if(loading){
    return(
        <div className=' w-1/2 mx-auto md:mt-32'><h3 className='text-center text-red-800 text-4xl'>Loding...</h3>
          <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Stack>
        </div>
    )
   }
   if(user){
    return children
   }
   if(!user){
    Swal.fire(
        'Please login first',
       
        
      )
   }
   return <Navigate to='/login' state={{from:location}} replace/>
};

export default PrivateRoute;