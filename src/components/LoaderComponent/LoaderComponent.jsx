import React from 'react'
import { DotSpinner } from '@uiball/loaders'

const LoaderComponent = () => {
    return (

        <div style={{
            width:"100vw;",
            height:"100vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"

        }}>
        <DotSpinner 
        size={60}
        speed={0.9} 
        color="black" 
       />
       </div>
    )
}

export default LoaderComponent
