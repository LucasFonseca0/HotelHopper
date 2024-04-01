import { Carousel } from '@material-tailwind/react';
import React from 'react';

const CarouselImage = ({ imagesURI }: { imagesURI: string[] }) => {
  return (
    <div className='flex'>
      <div className="">
        <Carousel 
        className='rounded-xl'
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}>
          {imagesURI.map((imageUrl, index) => (
            <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image 1"
            className="h-full w-full object-cover"
            key={index}
          />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselImage;
