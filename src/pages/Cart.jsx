
import { useItemCollection } from '../hooks/useItemCollection';
import CartComponent from '../components/CartComponent/CartComponent'
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';

const Cart= () => {

  const { data, loadin } = useItemCollection("products", itemId)
  return (

    loadin ? <LoaderComponent /> : <CartComponent CartProduct={data} />

  );
};

export default Cart