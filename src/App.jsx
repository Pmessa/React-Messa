import { CartProvider } from './context/CartContext';

import MainRouter from './routes/MainRouter';
import MainLayout from './layout/MainLayout';


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'


const App = () => {


  return (

    <CartProvider>
      <MainLayout>
        <MainRouter />
      </MainLayout>
    </CartProvider>

  )
}

export default App
