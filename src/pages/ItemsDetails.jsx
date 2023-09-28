
import { useItemCollection } from '../hooks/useItemCollection';

import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';

const ItemsDetails = () => {

  const {itemId} = useParams();

  const { data, loadin } = useItemCollection("products", itemId)
  return (

    loadin ? <LoaderComponent /> : <ItemDetailContainer DetalleProducto={data} />

  );
};

export default ItemsDetails;

