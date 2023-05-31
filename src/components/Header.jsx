import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Logo from "./images/logo2.png"
const Header=()=>{

    return(
        <div className="container-fluid ">
            <div className="row  headerSyle ">
                <div className="col-lg-11 ">
                    <h1><Link to={'/'}> <img src={Logo} alt="Carrito" width={45} /> Urban Shop</Link></h1> 
                </div>
                <div className="col-lg-1 text-end ">
                    <div className="row justify-content-center"> 
                    </div>  
                </div>
            </div>
            <div>
                <NavBar />
            </div>   
        </div>
    )


}
export default Header;