import Header from './components/Header';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home';
import Footer from './components/Footer';
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
