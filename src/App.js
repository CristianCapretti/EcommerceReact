import Header from './components/Header';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
