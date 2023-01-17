import styled from "styled-components";
import { GlobalStyle } from "../../styles/globalStyles";
import { white } from "../../styles/colors";
export const TrendingMovies = styled.div `
.movie-list{
    display:flex;
    gap:16px;
}
.movie-card img{
    width:220px;
    height:auto;
    border-radius:8px;
}
.hover-box{
    position:absolute;
    height:99%;
    width:100%;
    top:0;
    background: rgba(0,0,0,0.7);
    border-radius:8px;
    opacity:0;
}
.hover-box:hover{
    opacity:1;
    display:block;
    transition:all 0.4s;
}
.hover-parent{
    position:relative;
    height: 99%;
    width: 100%;
}
.hover-box p{
    position:absolute;
    bottom:12px;
    color: ${white};
    padding-left:8px;
    font-size:16px;
    font-weight:600;
}
`