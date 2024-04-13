"use client"

import styles from '@/src/utils/style';
import Link from 'next/link';
import ProfileDropdown from './ProfileDropdown';


const Header = () => {

 

  return (
    <header className='w-full  bg-primary '>
     
        <div className="w-[90%] h-[80px] m-auto flex items-center justify-between" >
            <Link href={"/hotels"}>
              <h1 className={`${styles.logo}`}>
                  HotelHopper
              </h1>
            </Link>

            <ProfileDropdown/>
            
            
        </div>
        
    </header>
  )
}

export default Header
