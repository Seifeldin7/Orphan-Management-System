import React from 'react'
import MainBrand from '../../components/Login&Signup/MainBrand';
import SocialIcons from '../../components/Login&Signup/SocialIcons';
import Signup from '../../components/Login&Signup/signup/signup';
import { isLoggedIn } from "../../utils/auth"

const SignUp = () => {
  if (isLoggedIn()) {
    window.location = "/";
    return (<div></div>)
  }
  return (
    <div className="container main-center">
      <MainBrand />
      <section className="social-form">
        <SocialIcons />
        <Signup />
      </section>
    </div>
  )

}

export default SignUp
