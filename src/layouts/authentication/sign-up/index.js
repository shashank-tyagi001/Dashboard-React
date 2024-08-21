/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

import { useForm  } from 'react-hook-form';
import classNames from "classnames";
import { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { studentPost } from '../../../redux/slice/signUpSlice';


function Cover() {

  const [data , setData] = useState({ });

  const dispatch = useDispatch();

  const { register , handleSubmit ,  formState: { errors } } = useForm();

  const post = useSelector( (state) => state.signUp.data );
  //console.log(post);


  const getUserValue = (e) => {
    setData({...data, [e.target.name]: e.target.value });
 }
 //console.log("bcsHDHD",data);
    

  const onSubmit  = () => {   
      dispatch(studentPost(data));
      handleClear();
  }

  const handleClear = () => {
    document.getElementById("name").value = " ";
    document.getElementById("email").value = " ";
    document.getElementById("password").value = " ";
  }

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit(onSubmit)}>
            <MDBox mb={2}>
              <MDInput type="text" label="Name" id="name"  name="name" variant="standard" className={classNames(errors.name ? 'form-control is-invalid': 'form-control')} fullWidth {...register('name' , { required: "Name is required" , onChange: getUserValue })} />
              {
                errors.name &&
                <small className="text-danger">
                  {errors.name.message}
                </small>
              }
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" label="Email" id="email" name="email" variant="standard" className={classNames(errors.email ? 'form-control is-invalid': 'form-control')} fullWidth {...register( 'email' , { required: "Email is necessary" , pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i , message: "Please Enter VAlid email"} , onChange: getUserValue })}/>
              {
                errors.email &&
                <small className="text-danger">
                  {errors.email.message}
                </small>
              }
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" id="password" name="password" variant="standard" className={classNames(errors.password ? 'form-control is-invalid': 'form-control')} fullWidth {...register( 'password' , { required: "Password is necessary" , minLength: {value: 8 , message: "Please Enter 8 Characters"} , onChange: getUserValue })} />
              {
                errors.password &&
                <small className="text-danger">
                  {errors.password.message}
                </small>
              }
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" type="submit"  fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
