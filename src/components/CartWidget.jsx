import Cart from './images/Cart.svg'

const CartWidget=()=>{
    return (
            <button type="button" className="btn btn-light position-relative">
                <img src={Cart} alt="Carrito" width={20} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">5</span>
            </button>
            
       
    )

}

export default CartWidget