import { useCollection } from "../hooks/useCollection"

import ItemListcontainer from "../components/ItemListContainer/ItemListContainer"

import LoaderComponent from "../components/LoaderComponent/LoaderComponent"


const Productos =() => {

  const { data, loading } = useCollection("products")

  return loading ? <LoaderComponent /> : <ItemListcontainer ProductsData = {data}/>
}

export default Productos
