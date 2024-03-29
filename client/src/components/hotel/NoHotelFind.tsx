import React from 'react';

const NoHotelFind = () => {
  return (
    <div className='flex flex-col justify-center m-auto items-center text-secondary h-[60vh]'>
      <h2 className='text-2xl sm:text-4xl xl:text-7xl font-bold'>No Hotels Found</h2>
      <p className='text-2xl sm:text-4xl xl:text-7xl text-wrap flex justify-center items-center'>Please verify your filter parameters.</p>
    </div>
  );
};

export default NoHotelFind;

