import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner";
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [carga, setCarga] = useState(true);
    const {id} = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Item");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then(resultado => {
            console.log("resulr"+JSON.stringify(resultado));
            if (resultado.size > 0) {
                setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
                setCarga(false);
            } else {
                console.error("No hay datos cargados");
            }
        });
    }, [id]);

    return (

        <div >
            <div className="row my-3">
                {carga ? <Spinner /> : <ItemList listaProductos={items} />}
            </div>
        </div>

    )
}



export default ItemListContainer;