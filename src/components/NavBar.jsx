import CartWidget from "./CartWidget"
import User from "./User"
import { Link } from "react-router-dom";
const NavBar=()=>{

    return(
        <div className="navbar bg-dark  ">
            <ul className="navbar-nav flex-row flex-wrap ">
                <li className="nav-item">
                    <Link className="nav-Link text-light ms-3" aria-current="page" to={'/category/hombre'}>Hombre</Link>
                 </li>
                <li className="nav-item">
                    <Link className="nav-Link text-light ms-3" to={'/category/mujer'}>Mujer</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-Link text-light ms-3" to={'/category/destacado'}>Destacado</Link>
                </li>
            </ul>
            <ul className="navbar-nav flex-row flex-wrap ">
                <li className=" nav-item ms-3">
                    <User />
                </li>
                <li className="nav-item ms-3 me-3">
                   <CartWidget />
                 </li>
            </ul>
        </div>
    )


}
export default NavBar
