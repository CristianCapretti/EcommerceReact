import Image from '../images/heart-circle-outline.svg'
const Favorite=()=>
{
    return (
        <div>
            <button type="button" className="btn btn-light position-relative">
                 <img src={Image} alt="Favorito" width={20} />
            </button>    
        </div>
    )

}

export default Favorite;