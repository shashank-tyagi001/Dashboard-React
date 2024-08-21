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

import { useState , useEffect } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

import { useForm } from "react-hook-form";
import classNames from 'classnames';
import { useSelector , useDispatch } from 'react-redux';
import { LoginData } from '../../../redux/slice/loginSlice';
import { useNavigate } from "react-router-dom";

function Basic() {

  const [rememberMe, setRememberMe] = useState(false);
  const { register , handleSubmit ,  formState: { errors } } = useForm();
  const [ info , setInfo ] = useState();
  const [ currEmail , setEmail ] = useState(); 
  const [ currPass , setPass ] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onSubmit = (data) => {
       setInfo(data);      
  }
  //console.log("cdsacsd",info);


  useEffect( () => {
    dispatch(LoginData())
  } ,[]);


  const studentData = useSelector( (state) => state.login.data);
  //console.log("All data",studentData);


const handlecheck = () => {

   studentData.map( (item) => {      
        if(item.email === currEmail && item.password === currPass)
          {
               navigate("/dashboard");
          } else {
            alert("Wrong Password ReEnter the passkey!!..");
          }     
  })
  }
  

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit(onSubmit)}>
            <MDBox mb={2}>
              <MDInput type="email" label="Email" className={classNames(errors.email ? 'form-control is-invalid': 'form-control')}  fullWidth  {...register( 'email' , { required: "Email is necessary" , pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i , message: "Please Enter VAlid email"} , onChange: (e) => setEmail(e.target.value)})}/>
              {
                errors.email &&
                <small className="text text-danger">
                  {
                    errors.email.message
                  }
                  </small>
              }
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" className={classNames(errors.email ? 'form-control is-invalid': 'form-control')} label="Password" fullWidth {...register( 'password' , { required: "Password is necessary" , minLength: {value: 8 , message: "Please Enter 8 Characters"} , onChange: (e) => setPass(e.target.value)})}/>
              {
                errors.password &&
                <small className="text-danger">
                  {
                    errors.password.message
                  }
                  </small>
              }
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" type="submit" onClick={handlecheck} fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
