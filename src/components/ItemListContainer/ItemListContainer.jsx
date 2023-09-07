import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import "./ItemListContainer.css"
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-type
const ItemListContainer = ({ ProductsData }) =>{
   
  const Navigate = useNavigate()
        return (
                <div className='productsContainer'>
                
                {ProductsData.map((item)=>{
                  console.log(item.id)
                    return(
                        <Card className='cardContainer' style={{ width: '18rem' }} key={item.id}>
                        <Card.Img variant="top" className='imgContainer' src={item.img} alt="Imágen del producto"/>
                        <Card.Body>
                          <Card.Title>{item.titulo}</Card.Title>
                          <Card.Text className='descriptionContainer'>
                            {item.descripcion}
                          </Card.Text>
                          <Card.Text className='cardPrecioContainer'>
                            <div className='precioContainer'>
                            <span>$</span>{item.precio}
                            </div>                            
                          </Card.Text>
                          <div className='buttonContainer'>
                            {/* <Link to ={'/items/${item.id}'}>Detalles</Link> */}
                            <Button variant="dark"  onClick={()=> Navigate(`/item/${item.id}`)} className='buttonVerDetalle'>Ver Detalle</Button>
                          </div>
                          
                        </Card.Body>
                      </Card>
                    )
                })}
                </div>
          );
        }
 
export default ItemListContainer