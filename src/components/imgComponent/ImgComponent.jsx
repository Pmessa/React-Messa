import React from 'react'
import "./ImgComponent.css"

const ImgComponent = ({ imgProperty }) => {

    return (
        <div className='ImgContainer' key={imgProperty.id}>

            <img src={imgProperty.img} alt="Imagen del producto" />
        </div>

    )
}

export default ImgComponent
