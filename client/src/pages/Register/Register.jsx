import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LuEyeClosed } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./register.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] m-auto bg-white p-4 px-12">
          <h3 className="text-center text-[22px] font-[500]">
            Register with a new account
          </h3>

          <form className="w-full mt-8">
            <div className="form-group relative transition-all mb-2">
              <TextField
                id="email"
                label="Email ID"
                variant="outlined"
                className="w-full !mb-5"
              />

              <TextField
                id="name"
                label="Full Name"
                variant="outlined"
                className="w-full !mb-5"
              />
              {showPassword === true ? (
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  className="w-full mb-5"
                  type="text"
                />
              ) : (
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  className="w-full mb-5"
                  type="password"
                />
              )}
              <Button
                className="!absolute !bottom-[10px] !right-[10px] !z-10 !h-[35px] !w-[20px] !min-w-[35px] !rounded-full !text-black transition-all opacity-75"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword === true ? (
                  <LuEyeClosed className="text-[20px]" />
                ) : (
                  <FiEye className="text-[20px]" />
                )}
              </Button>
            </div>

            <div className="flex items-center mt-5 mb-3 gap-3 flex-col">
              <Button className="!text-black !bg-primary w-full !p-2 !px-5 !text-white">
                Register
              </Button>
            </div>

            <p className="text-[#555] mt-3 pb-4">
              Already have an account?{" "}
              <Link to="/login" className="text-black ms-2 link2">
                Sign In
              </Link>
            </p>

            <p className="text-[#555] text-center mt-3">
              Or continue with Social Account
            </p>
            <Button className="!border-2 custom-border !w-full !border-black !flex !items-center !justify-center !gap-3 !mt-5 !text-[#555] !text-[15px]">
              <FcGoogle /> Sign Up with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
