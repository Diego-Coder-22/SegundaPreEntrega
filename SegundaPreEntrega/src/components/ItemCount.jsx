import React, {useState} from 'react'

const ItemCount = ({cantidad, handleRestar, handleSumar} ) => {

  return (
    <div className='item-count-add'>

        <div className="item-count">
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button className="agregar-al-carrito">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount