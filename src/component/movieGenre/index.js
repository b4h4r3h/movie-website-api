import { useEffect, useState } from "react";
import {api} from "../../utils/api/index";
import { textDots } from "../../utils/textDots";
import { GlobalStyle } from "../../styles/globalStyles";
import { MovieGenres } from "./style";
export default function MovieGenre() {
    const [movie, setMovie] = useState([]);
    async function getApi() {
        const response = await api.get("/genre/movie/list",{params:{
            api_key: "a979f69c99c2d7a91357437fe8871523"
        }});
        setMovie(response.data.genres)
    }
    function renderFarm() {
        return movie.map(function(item,i){
            const {name} = item
            return(
                <div className="genre-content-father">
                <h3 className="genre-content" key={i}>{name}</h3>
                </div>
            )
        })
    }
    useEffect(function() {
        getApi();
    }, [])
    return (
        <MovieGenres>
        <div className="wrapper">
            <h2>Movie Genre</h2>
            <div className="genre-list">{renderFarm()}</div>
        </div>
        </MovieGenres>
    );
}