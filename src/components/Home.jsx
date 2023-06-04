import ItemListContainer from "./ItemListContainer"
import Banner from "./carrousel/Banner";
import Carrousel from "./carrousel/Carrousel"

const Home=()=>{

    return(
        <div>
            <Banner />
            <Carrousel />
            <ItemListContainer/>
        </div>
    )


}

export default Home;