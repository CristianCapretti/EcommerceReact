import ItemCount from './ItemCount'
import { useContext, useEffect, useState } from "react";
import { CartContext } from '../Context/CartContext';

const ItemDetail=({item})=>{

    const {addItem} = useContext(CartContext);
    const [producto, setItem] = useState({});

    const onAdd = (quantity) => {
        addItem(producto, quantity);
    }
    
    useEffect(() => {
        setItem(item);
    }, [item]);
    
    return(
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-5 offset-md-1 ">
                        <img src={item.imagen} alt={item.titulo} className="img-fluid shadow" />
                    </div>
                    <div className="col-md-5">
                        <h1>{item.titulo}</h1>
                        <h4 className='fw-light mt-2'>{item.descripcion}</h4>
                        <p><b>${item.precio}</b></p>
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;