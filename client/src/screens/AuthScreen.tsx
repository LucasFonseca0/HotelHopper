import { useState } from "react";
import Login from "../shared/Auth/Login";
import Signup from "../shared/Auth/Signup";
import LoadingSpinner from "../shared/Loading/LoadingSpinner";


const AuthScreen = ({setOpen}:{setOpen:(e:boolean)=> void}) => {
  const [activeState, setActiveState] = useState("Login");
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const handleClose = (e:React.MouseEvent<HTMLDivElement>) => {
    if(e.target instanceof HTMLDivElement && e.target.id == "screen"){
      {
          setOpen(false)
      }
    }
  }

  return (
    <div className="w-full fixed top-0 left-0 h-screen z-50 flex items-center justify-center bg-[#00000039]" id="screen"
    onClick={handleClose}>
      <div className="w-[95%] max-w-2xl  text-black bg-primary rounded shadow-sm p-3 ">
        {activeState === "Login" && <Login setActiveState={setActiveState} setOpen={setOpen} setIsLoading={setIsLoading}/>}
        {activeState === "Signup" && <Signup setActiveState={setActiveState} setIsLoading={setIsLoading}/>}
        {isLoading && <LoadingSpinner />}

      </div>
    </div>
  );
};

export default AuthScreen;
