import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc} from "firebase/firestore";
import Spinner from "../Spinner";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer= ()=>
{
    const [item, setItem] = useState([]);
    const [carga, setCarga] = useState(true);
    const {id}=useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "Item", id);
        getDoc(producto).then(resultado => {
            setItem({id:resultado.id, ...resultado.data()});
            setCarga(false);
        });
    }, [id])
    
    return (

        <div>
            {carga ? <Spinner /> :  < ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer;