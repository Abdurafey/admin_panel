import React, { useState, useEffect } from "react";
import basestyle from "./Base.module.css";
import loginstyle from "./Login.module.css";
import { useNavigate, NavLink } from "react-router-dom";

const Login = ({ setUserState }) => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };
  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };
// const popularMovies = async () =>{
//   try {
//     const route = 'movie/popular';
//     const result = await get(route)
//     console.log(result)
//   } catch (error) {
//     console.log('not found')
//   }
// }
// popularMovies()

/*  const moviesList = async () =>{
    try {
      // Example GET request
      const result = await get('account/20799056/lists?page=1');
      // setData(result);
      console.log(result)
    } catch (error) {
      // Handle errors
      console.error('Error fetching or updating data in ExampleComponent:', error);
    }
  }
  moviesList();*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    // const errors = validateForm();
    // setFormErrors(errors); useEffect(() => {
      // try {
      //   const endpoint = 'api/Account/Login';
      //   const data = {
      //     email: user.email,
      //     password: user.password
      //   }
      //   const postData = JSON.stringify(data)
      //   const postResult = await post(endpoint, postData);
      //   console.log('POST result:', postResult);

      // } catch (error) {
      //   // Handle errors
      //   console.error('Error fetching or updating data in ExampleComponent:', error);
      // }

    
  }

  return (
    <div className={loginstyle.login}>
      <form onSubmit={handleSubmit}>
        <h1>Login To Admin Panel</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={changeHandler}
          value={user.email}
        />
        <p className={basestyle.error}>{formErrors.email}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        <p className={basestyle.error}>{formErrors.password}</p>
        <button className={basestyle.button_common} type="submit">
          Login
        </button>
      </form>
      
      <NavLink to="/admin"><span>Forget Password?</span></NavLink>
    </div>
  );
};
export default Login;