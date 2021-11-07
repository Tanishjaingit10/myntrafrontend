import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { BACKEND } from "../../Keys";
import axios from "axios";
import { appContext } from "../../Store/Context";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Login() {
  const { setContext } = useContext(appContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginHandler = (event) => {
    event.preventDefault();
    axios
      .post(`${BACKEND}/signin`, { email, password })
      .then((res) => {
        const data = res.data;
        setContext((prev) => {
          return {
            ...prev,
            token: data?.token,
            user: data?.user,
            loggedIn: true,
          };
        });
      })
      .catch((err) => alert(err.response.data.error));
  };
  const handleGlogin = (response) => {
    axios
      .post(`${BACKEND}/googlelogin`, { token: response.tokenId })
      .then((res) => {
        const data = res.data;
        setContext((prev) => {
          return {
            ...prev,
            token: data?.token,
            user: data?.user,
            loggedIn: true,
          };
        });
      })
      .catch((err) => console.log(err.response.data));
  };
  const handleGfailure = (error) => {
    console.log(error);
  };
  return (
    <div className="h-screen pt-20 flex items-center bg-gray-100 justify-center w-full">
      <div className="p-10 pt-8 w-11/12 md:w-3/5 sm:w-5/6 lg:w-1/2 rounded-2xl bg-white shadow-md flex items-center flex-col">
        <h1 className="mb-2 text-3xl p-3 text-pink-500"> Sign in </h1>
        <div className="w-11/12 sm:w-5/6 md:3/4 lg:w-2/3 xl:w-1/2 flex flex-col items-center">
          <form
            className="w-full flex flex-col text-gray-700"
            onSubmit={(e) => loginHandler(e)}
          >
            <TextField
              label="Email"
              id="filled-size-small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="filled"
              size="small"
              type="email"
              className="my-3"
              required
            />
            <FormControl variant="filled" className="my-3 mb-4">
              <InputLabel htmlFor="password">Password</InputLabel>
              <FilledInput
                required
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                size="small"
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((p) => !p)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <button
              type="submit"
              className="w-full shadow-md rounded my-3 p-2 bg-blue-500 font-bold text-white"
            >
              Login
            </button>
          </form>
          <GoogleLogin
            clientId="920754705442-j7429tvbnqpmbtehalk80rkhlgt2975r.apps.googleusercontent.com"
            render={(e) => (
              <button
                onClick={e.onClick}
                disabled={e.disabled}
                className="w-full text-white shadow-md rounded my-4 p-2 bg-red-500 font-bold"
              >
                G
              </button>
            )}
            buttonText="Login"
            onSuccess={handleGlogin}
            onFailure={handleGfailure}
            cookiePolicy={"single_host_origin"}
          />
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-400">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
