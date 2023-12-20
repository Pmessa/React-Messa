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
              <h3 className='description'>{item.description}</h3>
              <div className='buttonContainer'>
                <button onClick={() => Navigate(`/item/${item.id}`)} className='buttonVerDetalle'>Ver Detalle</button>
              </div>
            </div>
          </div>
                  );
      })};
    </div>
  );
}

export default ItemListContainer