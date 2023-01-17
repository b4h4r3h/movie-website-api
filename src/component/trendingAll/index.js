import { useEffect, useState } from "react";
import {api} from "../../utils/api/index"
import { textDots } from "../../utils/textDots";
import { GlobalStyle } from "../../styles/globalStyles";
import { TrendingAll } from "./style";
export default function Trending() {
    const [movie, setMovie] = useState([]);
    async function getApi() {
        const response = await api.get("/trending/all/week",{params:{
            api_key: "a979f69c99c2d7a91357437fe8871523" 
        }});
        setMovie(response.data.results)
    }
    function renderTitle(item) {
        const {original_name, original_title} = item
        if(item.hasOwnProperty("original_title")) {
            return original_title;
        } else{
            return original_name;
        }
    }
    function renderFarm() {
        return movie.map(function(item,i){
            const {poster_path, release_date, overview, vote_average} = item
            return(
                <div key={i}>
                    <div className="movie-card">
                        <div className="hover-parent">
                            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
                            <div className="hover-box">
                                <p>Vote: {vote_average}</p>
                            </div>
                        </div>
                        <h3>{renderTitle(item)}</h3>
                    </div>
                    <p className="">{textDots(overview, 80)}</p>
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
        <TrendingAll>
        <div className="wrapper">
        <h2>Trending</h2>
        <div className="movie-list">
            {renderFarm()}
        </div>
        </div>
        </TrendingAll>
    );
}