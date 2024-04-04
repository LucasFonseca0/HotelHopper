import { LoginUser } from "@/src/api/userAPI";
import styles from "@/src/utils/style";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import Cookies from "js-cookie";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long!"),
});

type LoginSchema = z.infer<typeof formSchema>;

const Login = ({
  setActiveState,
  setOpen,
  setIsLoading
}: {
  setActiveState: (e: string) => void;
  setOpen: (e: boolean) => void;
  setIsLoading:Function
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    setIsLoading(true)
    try {
      const JWTToken = await LoginUser(data)
      toast.success("signup succeful")
      console.log(JWTToken)
      Cookies.set("access_token",JWTToken.access_token );
      setOpen(false);
      reset();
      window.location.reload()
    } catch (error: any) {
      console.log(error)
      toast.error(error.response.data.message);
    }
    setIsLoading(false)
  };

  return (
    <div>
      <br />
      <h1
        className={
          "text-[25px] font-[500] font-Poppins text-center py-2 text-dark"
        }
      >
        Login with HotelHopper
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            className={`${styles.input}`}
          />
          {errors.password && (
            <span className="text-red-500 block mt-1">
              {`${errors.password.message}`}
            </span>
          )}
        </div>
        <div className="w-full mt-5">
          <span
            className={`${styles.label} my-2 text-[#2190ff] block text-right cursor-pointer`}
          >
            Forgot your password?{" "}
          </span>

          <Button
            type="submit"
            className={`${styles.button} mt-3 `}
            disabled={isSubmitting}
          >
            Login
          </Button>
        </div>

        <h5 className="text-center pt-4 font-Poppins text-[14px]">
          Not have any account?
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => setActiveState("Signup")}
          >
            sign up
          </span>
        </h5>
        <br />
      </form>
    </div>
  );
};

export default Login;
