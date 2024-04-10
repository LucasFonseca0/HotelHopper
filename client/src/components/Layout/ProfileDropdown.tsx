"use client";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import AuthScreen from "../../screens/AuthScreen";
import useUser from "../../hooks/useUser";
import Cookies from "js-cookie";
import toast from "react-hot-toast";


const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const [singedIn, setSingedIn] = useState(false);
  const { user, loading } = useUser();
 

  

  useEffect(() => {
    if (!loading) {
      setSingedIn(!!user);
    }
    if(user){
      setSingedIn(true)
      

    }
  }, [loading, user,open]);

  const logoutHandler = () => {
    Cookies.remove("access_token");
    toast.success("log ou successful!");
    window.location.reload()
  };

  const addUser = async (user:any) => {
    
  
  }

  return (
    <div className="flex items-center gap-4">
      {singedIn ? (
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              as="button"
              className="transition-transform"
             
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{user!.email}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Profile</DropdownItem>
            <DropdownItem key="all_orders" href="/orders">All orders</DropdownItem>
            <DropdownItem key="team_settings">
              Apply for seller account
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={ logoutHandler}>
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <CgProfile
          className="text-3xl cursor-pointer text-black"
          onClick={() => setOpen(!open)}
        />
      )}
      {open && <AuthScreen setOpen={setOpen} />}
    </div>
  );
};

export default ProfileDropdown;
