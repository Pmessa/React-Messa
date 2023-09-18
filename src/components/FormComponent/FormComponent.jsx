import React from 'react'
import "./FormComponent.css"
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const FormComponent = () => {
    return (
        <div>
            <h1>Crear Producto</h1>

            <form className='formContainer'>
                <input type="text" placeholder='Titulo'/>
                <input type="text" placeholder='Descripción'/>
                <input type="text" placeholder='Detalle'/>
                <input type="number" placeholder='Precio'/>
                <input type="text" placeholder='Url de imágen'/>
                <input type="number" placeholder='Stock'/>
                <input type="submit" />
            </form>

       

          
        </div>
    )
}

export default FormComponent
