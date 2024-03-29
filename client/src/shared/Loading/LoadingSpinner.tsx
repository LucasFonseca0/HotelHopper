import React from 'react';
import { Spinner } from '@nextui-org/react';

const LoadingSpinner = () => {
  return (

    <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-900 bg-opacity-50">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Spinner label="loading..." color="secondary" labelColor="secondary" size='lg' className='font-bold'/>
      </div>
    </div>
    
  );
}

export default LoadingSpinner;
