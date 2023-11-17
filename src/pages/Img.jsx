import { useItemCollection } from '../hooks/useItemCollection';
import { useParams } from 'react-router-dom';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';
import ImgComponent from '../components/imgComponent/ImgComponent';

const Img= () => {
    const {itemId} = useParams();

  const { data, loadin } = useItemCollection("products", itemId)
  return (

    loadin ? <LoaderComponent /> : <ImgComponent imgProperty={data} />

  );
};

export default Img