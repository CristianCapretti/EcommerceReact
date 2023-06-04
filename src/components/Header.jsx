import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Logo from "./images/logo2.png"
import Sales from "./Sales";
import User from "./User";
const Header=()=>{
    const style={
        textDecoration: 'none' 
    }
    return(
        <div className="container-fluid ">
            <div className="row  headerSyle ">
                <div className=" text-end ">
                    <Sales />
                </div>
                <div className=" col-lg-12 text-center py-0 ">
                    <h1><Link to={'/'} style={style} className="text-dark font-monospace"> <img src={Logo} alt="Carrito" width={45} /> Urban Shop</Link></h1> 
                </div>
            </div>
            <div>
                <NavBar />
            </div>   
        </div>
    )


}
export default Header;