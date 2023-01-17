import styled from "styled-components";
import { white } from "../../styles/colors";
export const PersonStyle = styled.div `
.divcom{
    display:flex;
    gap:16px;
}
.person-card img{
    width: 200px;
    height: auto;
    border-radius: 8px;
}
.hover-box{
    position:absolute;
    top: 247px;
    width: 100%;
    background: rgba(0,0,0,0.7);
    border-radius: 0 0 8px 8px;
}
.hover-box p{
    padding-left:8px;
    font-size:16px;
    font-weight:600;
    color: ${white}
}
.hover-parent{
    position:relative;
}
`;