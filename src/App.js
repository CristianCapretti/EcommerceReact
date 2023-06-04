import Header from './components/Header/Header';
import './App.css';
import ItemListContainer from './components/Products/ItemListContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/Products/ItemDetailContainer';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
        </Routes>
        <Footer/>      
      </BrowserRouter>
    </div>
  );
}

export default App;
