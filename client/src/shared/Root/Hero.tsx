import styles from "@/src/utils/style";
import { Button } from "@nextui-org/button";

const Hero = () => {
  return (
    <div className="w-full h-[92vh] banner flex  items-center pl-32   z-10 absolute ">
      
      <div className="w-[70%] max-w-[70rem] p-5  pl-8 text-black rounded-[8px] shadow  bg-white  
       ">
        <h1 className="text-3xl py-5 xl:text-6xl font-[700] xl:leading-[80px] sm:mt-20 font-Inter">
          Luxurious and comfortable hotels, <br />
          Booked straight from your home!
        </h1>
        <p className={`text-[18px]`}>
          Luxury hotels, resorts and apartments available for booking or reservation.
          Great <br /> <span className="text-secondary font-bold">discounts for first-time bookings.</span>
        </p>
        <br />
        <Button className={`${styles.button} w-[180px] md:mb-12`}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
