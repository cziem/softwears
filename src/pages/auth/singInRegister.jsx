import React from 'react'

import SignIn from '../../components/sign-in/signIn.component'
import SignUp from '../../components/sign-up/signUp.component'

import './singInRegister.styles.scss'

const SignInRegisterPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInRegisterPage
