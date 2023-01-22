import styled from "styled-components";
import { GlobalStyle } from "../../styles/globalStyles";
import { black20percent, darkLinearReverse, linearPurpleBlue, white } from "../../styles/colors";
import { darkLinear } from "../../styles/colors";
export const MovieGenres = styled.div `
.genre-list{
    display:flex;
    gap:16px;
    flex-wrap:wrap;
}
.genre-content{
    margin:0;
    color:${white};
}
.genre-content-father{
    display:flex;
    align-items:center;
    justify-content:center;
    width:164px;
    height:56px;
    background:${darkLinear};
    border-radius:8px;
    transition:.2s ease-in-out 0s;
}
.genre-content-father:hover{
    cursor: pointer;
    background: ${darkLinearReverse};
    transform: scale(1.03);
}
`