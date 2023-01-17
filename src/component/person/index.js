import { useEffect, useState } from "react";
import {api} from "../../utils/api/index"
import { textDots } from "../../utils/textDots";
import {PersonStyle} from "./style";
import { GlobalStyle } from "../../styles/globalStyles";
export default function TrendingPerson() {
    const [movie, setMovie] = useState([]);
    async function getApi() {
        const response = await api.get("/trending/person/week",{params:{
            api_key: "a979f69c99c2d7a91357437fe8871523" 
        }});
        setMovie(response.data.results)
    }
    function renderFarm() {
        return movie.map(function(item,i){
            const {name, popularity, profile_path} = item
            return(
                <div className="person-card" key={i}>
                    <div className="hover-parent">
                    <img src={`https://image.tmdb.org/t/p/w500${profile_path}`}/>
                    <div className="hover-box">
                        <p>Popularity: {popularity}</p>
                    </div>
                    </div>
                    <h3>{name}</h3>
                </div>
            )
        })
    }
    useEffect(function() {
        getApi();
    }, [])
    return (
        <PersonStyle>
        <div className="wrapper">
        <h2>Trending persons of the week</h2>
        <div className="divcom">
            {renderFarm()}
        </div>
        </div>
        </PersonStyle>
    );
}