import React from 'react'

import './customButton.scss'

const CustomButton = ({ children, isGoogleSignIn, ...otherButtonProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherButtonProps}>
    {children}
  </button>
)

export default CustomButton