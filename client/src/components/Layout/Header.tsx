"use client"

import styles from '@/src/utils/style'
import { Avatar } from '@nextui-org/react'
import Link from 'next/link'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import ProfileDropdown from './ProfileDropdown';


const Header = () => {

  const dropdownItens = [
    {
      key: "new",
      label: "New file",
    },
    {
      key: "copy",
      label: "Copy link",
    },
    {
      key: "edit",
      label: "Edit file",
    },
    {
      key: "log  out",
      label: "Delete file",
    }
  ];

  

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
