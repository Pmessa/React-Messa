import { useCollection } from "../hooks/useCollection"

import HomeComponent from "../components/HomeComponent/HomeComponent"

import LoaderComponent from "../components/LoaderComponent/LoaderComponent"


const Home =() => {

  const { data, loading } = useCollection("products")

  return loading ? <LoaderComponent /> : <HomeComponent/>
  
}

export default Home












