import { useEffect, useState } from "react";
import {api} from "../../utils/api/index";
import { textDots } from "../../utils/textDots";
import { GlobalStyle } from "../../styles/globalStyles";
import { TvGenres } from "./style";
export default function TvGenre() {
    const [movie, setMovie] = useState([]);
    async function getApi() {
        const response = await api.get("/genre/tv/list",{params:{
            api_key: "a979f69c99c2d7a91357437fe8871523"
        }});
        setMovie(response.data.genres)
    }
    function renderFarm() {
        return movie.map(function(item,i){
            const {name,id} = item
            return(
                <div key={i} className="genre-content-father">
                    <h3 className="genre-content">{name}</h3>
                </div>
            )
        })
    }
    // axios respons servero tuye key data behemon mide 
    // result chie? esme keyi ke etelaat tushe
    useEffect(function() {
        getApi();
    }, [])
    return (
        <TvGenres>
        <div className="wrapper">
            <h2>Tv Genre</h2>
            <div className="genre-list">{renderFarm()}</div>
        </div>
        </TvGenres>
    );
}