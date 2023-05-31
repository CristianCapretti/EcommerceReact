import { useEffect, useState } from "react";
import Item from "../components/Item";
import Productos from "../components/json/data.json"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const {id}=useParams();
    const [data, SetData]=useState([]);
    
    useEffect(()=>{
        const promesa = new Promise((resolve) => {
        resolve(id? Productos.filter(item => item.categoria===id):Productos)
        });
        promesa.then(data => {
            SetData(data);
        });
    },[id])

    return (
        <div className="row">
        {    
            data.map(producto => <Item key={producto.id} producto={producto} /> )                           
            
        } 
        </div>
    )
}



export default ItemListContainer;