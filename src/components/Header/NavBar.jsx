import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";
import User from "./User";
import Favorite from "./Favorite";
const NavBar=()=>{

    return(
        <div className="navbar">
            <ul className="navbar-nav flex-row flex-wrap ">
            <li className="nav-item ">
                    <Link className="nav-Link text-dark ms-3 linkSinSubrallar" aria-current="page" to={'/'}>Home</Link>
                 </li>
                <li className="nav-item ">
                    <Link className="nav-Link text-dark ms-3 linkSinSubrallar" aria-current="page" to={'/category/hombre'}>Hombre</Link>
                 </li>
                <li className="nav-item ">
                    <Link className="nav-Link text-dark ms-3 linkSinSubrallar" to={'/category/mujer'}>Mujer</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-Link text-dark ms-3 linkSinSubrallar" to={'/category/destacado'}>Destacado</Link>
                </li>
            </ul>
            <ul className="navbar-nav flex-row flex-wrap ">
               <li className="nav-item  ">
                    <User/>
               </li >
               <li className="nav-item " >
                    <Favorite/>
               </li>
                <li className="nav-item  me-3 ">
                   <CartWidget />
                 </li>
            </ul>
        </div>
    )


}
export default NavBar
