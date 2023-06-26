import Cart from '../images/Cart.svg'
import { CartContext } from '../Context/CartContext'
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget=()=>{
    const {cartTotal} = useContext(CartContext);

    return (
         
            <Link  to={"/cart"} type="button" className="btn btn-light position-relative">
                <img src={Cart} alt="Carrito" width={20} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{(cartTotal())>0?cartTotal():""}</span>
            </Link>
            
       
    )

}

export default CartWidget