import Header from './components/Header/Header';
import './App.css';
import ItemListContainer from './components/Products/ItemListContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/Products/ItemDetailContainer';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import CartContextProvider from './components/Context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Gracias from './components/Gracias';

function App() {
  return (
    <div> 
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/gracias/:id"} element={<Gracias />} />
          </Routes>
          <Footer/>      
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
