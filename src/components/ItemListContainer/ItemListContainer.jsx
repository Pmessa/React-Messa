import { useNavigate } from 'react-router-dom';
import "./ItemListContainer.css"

const ItemListContainer = ({ ProductsData }) => {

  const Navigate = useNavigate()
  return (
    <div className='productsContainer'>

      {ProductsData.map((item) => {

        return (

          
          <div className='listItemsContainer' key={item.id}>
            <div className='imgHomeContainer'>
              <img className='imgHome' src={item.img} alt="Imágen del producto" onClick={() => Navigate(`/img/${item.id}`)}/>
            </div>
            <div className='descriptionContainer'>
              <h1 className='titleContainer'>{item.title}</h1>
              <h3 className='descriptionContainer'>{item.description}</h3>
              <div className='buttonContainer'>
                <button onClick={() => Navigate(`/item/${item.id}`)} className='buttonVerDetalle'>Ver Detalle</button>
              </div>
            </div>
          </div>





          //   <Card className='cardContainer' style={{ width: '18rem' }} key={item.id}>
          //   <Card.Img variant="top" className='imgContainer' src={item.img} alt="Imágen del producto"/>
          //   <Card.Body>
          //     <Card.Title>{item.title}</Card.Title>
          //     <Card.Text className='descriptionContainer'>
          //       {item.description}
          //     </Card.Text>
          //     <Card.Text className='cardPrecioContainer'>
          //       <div className='precioContainer'>
          //       <span>$</span>{item.price}
          //       </div>                            
          //     </Card.Text>
          //     <div className='buttonContainer'>
          //       <Button variant="dark"  onClick={()=> Navigate(`/item/${item.id}`)} className='buttonVerDetalle'>Ver Detalle</Button>
          //     </div>

          //   </Card.Body>
          // </Card>
        )
      })}
    </div>
  );
}

export default ItemListContainer