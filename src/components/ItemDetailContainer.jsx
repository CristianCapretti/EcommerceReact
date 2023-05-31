import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../components/json/data.json" 
import ItemDetail from "./ItemDetail";

const ItemDetailContainer= ()=>
{
    const {id}=useParams();
    const [data, setData]=useState({});
    useEffect(()=>{
        const promesa= new Promise((resolve)=>{
            resolve(Data.find(producto=> producto.id===parseInt(id)))
        }) 
        promesa.then(data=> {setData(data)})   
    },[id])
    
    return (

        <div>
            < ItemDetail item={data}/>
        </div>
    )
}

export default ItemDetailContainer;