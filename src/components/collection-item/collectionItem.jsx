import React from 'react'
import CustomButton from '../custom-button/customButton'

import './collectionItem.scss'

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{
      backgroundImage: `url(${imageUrl})`
    }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
    <CustomButton inverted>ADD TO CART</CustomButton>
  </div>
)

export default CollectionItem