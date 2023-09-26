import { useCollection } from "../hooks/useCollection"

import ItemListcontainer from "../components/ItemListContainer/ItemListContainer"



const Home =() => {

  const { data, loading } = useCollection("products")

  return loading ? <h1>Cargando...</h1> : <ItemListcontainer ProductsData = {data}/>
}

export default Home












