import UserPerfile from '../images/User.svg'
const User=()=>{
return(
    <div>
        <button type="button" className="btn btn-light position-relative">
            <img src={UserPerfile} alt="Carrito" width={20} />
        </button>    
    </div>
)

}

export default User;