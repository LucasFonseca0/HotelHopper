
import { signupUser } from "@/src/api/userAPI";
import styles from "@/src/utils/style";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long!"),
});

type SignUpSchema = z.infer<typeof formSchema>;

const Signup = ({
  setActiveState,
  setIsLoading
}: {
  setActiveState: (e: string) => void;
  setIsLoading:  Function;
}) => {


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(formSchema),
  });

 
  const onSubmit = async (data: SignUpSchema) => {
    setIsLoading(true)
    try {
      await signupUser(data)
      toast.success("signup succeful")
      setActiveState("Login")
    } catch (error: any) {
      console.log(error)
      toast.error(error.response.data.message);
    }
    setIsLoading(false)
  };

  return (
    <div>
      <br />
      <h1 className={`text-[25px] font-[500] font-Poppins text-center py-2 text-dark`}>SignUp with HotelHopper</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
  
        <div className="w-full  relative mb-3">
          <label className={`${styles.label}`}>Enter your name</label>
          <input
            {...register("name")}
            type="text"
            placeholder="your name"
            className={`${styles.input}`}
          />
        </div>
        {errors.name && (
          <span className="text-red-500 block mt-1">
            {`${errors.name.message}`}
          </span>
        )}
        
        <label className={`${styles.label}`}>Enter your email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="loginmail@gmail.com"
          className={`${styles.input}`}
        />
        {errors.email && (
          <span className="text-red-500 block mt-1">
            {`${errors.email.message}`}
          </span>
        )}
    
    
       
        <div className="w-full mt-5 relative mb-1">
          <label htmlFor="password" className={`${styles.label}`}>
            Enter your password
          </label>
          <input
            {...register("password")}
            type="password"
            placeholder="password!@%"
            className={`${styles.input} `}
          />
          {errors.password && (
            <span className="text-red-500 block mt-1">
              {`${errors.password.message}`}
            </span>
          )}
        </div>
        <div className="w-full mt-5">
        <Button
            type="submit"
            className={`${styles.button} mt-3 `}
            disabled={isSubmitting}
          >
            Signup
          </Button>
        </div>
        <br />
               

        <h5 className="text-center pt-4 font-Poppins text-[14px] ">
          Already have account?
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => setActiveState("Login")}
          >
            Login
          </span>
        </h5>
        <br />
      </form>
    </div>
  );
};

export default Signup;
