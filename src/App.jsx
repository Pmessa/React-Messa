import MainRouter from './routes/MainRouter'
import MainLayout from './layout/MainLayout'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

const App = () => {


  return (

    <MainLayout> 
        <MainRouter/>
    </MainLayout>
  )
}

export default App
