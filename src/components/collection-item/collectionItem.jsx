import React from 'react'
import { connect } from 'react-redux'
import { addItemToCart } from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/customButton'
import './collectionItem.scss'

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item

  return (
    <div className="collection-item">
      <div className="image" style={{
        backgroundImage: `url(${imageUrl})`
      }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)