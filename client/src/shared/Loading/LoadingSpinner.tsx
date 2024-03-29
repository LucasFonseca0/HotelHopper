import React from 'react';
import { Spinner } from '@nextui-org/react';

const LoadingSpinner = () => {
  return (

    <div className="absolute inset-0 flex justify-center items-center z-50 bg-gray-900 bg-opacity-50 h-full">
    <Spinner label="loading..." color="secondary" labelColor="secondary" size='lg' className='font-bold'/>
  </div>
    
  );
}

export default LoadingSpinner;
