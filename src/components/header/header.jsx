import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'

import './header.scss'

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>
    <div className="options">
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {
        currentUser ? (
          <div className="option" onClick={() => auth.signOut()}> SIGN OUT </div>
        ) : (
            <Link className="option" to="/signin">SIGN IN</Link>
          )
      }
      <CartIcon />
    </div>
    <CartDropdown />
  </div>
)

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

export default connect(mapStateToProps)(Header)