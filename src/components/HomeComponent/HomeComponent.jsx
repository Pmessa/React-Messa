import React from 'react'
import "./HomeComponent.css"

const HomeComponent = () =>{


    return <div className="homeComponent">

        <div className="titleHome">
        <img src="public/letraV_tr.png" alt="letra" class="letraVtitle"/>
            <h2>Evolución verde</h2>
        </div>
    <section className="presentationText">
    <p>
            En este sitio que te ayudaremos a encontrar el camino hacia el equilibrio integral a travéz de tus habitos, a que puedas sentirte cada día un poco mejor gracias a los conocimientos que adquirirás solo con inspeccionar nuesto sitio WEB!
        </p>
        <strong>Lánzate a la aventura de un  cambio de hábitos que te beneficiará a tí y a tu entorno.</strong>
    </section>

{/* <section className="alimentacionPlantBased">
    <h2> Descubrí la alimentación Plant Based</h2>
    <p>La alimentación plant based se basa en consumir alimentos de origen vegetal, enteros y sin procesar, como frutas, verduras, legumbres, cereales y frutos secos. Tiene beneficios para la salud, el medio ambiente y los animales.</p>
</section> */}

<button>Descúbrenos!</button>
    </div>
        


}
export default HomeComponent