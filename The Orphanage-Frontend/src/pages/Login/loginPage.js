import React, { useEffect } from 'react'
import MainBrand from '../../components/Login&Signup/MainBrand';
import SocialIcons from '../../components/Login&Signup/SocialIcons';
import Signin from '../../components/Login&Signup/signin/signin';
import { isLoggedIn } from "../../utils/auth"



const SignIn = () => {

  useEffect(() => {
    if (isLoggedIn()) {
      window.location = "/"
      return (<div></div>)
    }
  }, [])

  return (
    <div className="container main-center">
      <MainBrand />
      <section className="social-form">
        <SocialIcons />
        <Signin />
      </section>
    </div>
  )

}

export default SignIn
