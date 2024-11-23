import styled from "styled-components";

import avaPic from "../../assets/images/image-victor.jpg"

export const AvatarCustom = styled.div`
position: absolute;
top: 0;
left:50%;

transform: translate(-50%, 98px);
z-index: 1;

width: 96px;
height: 96px;


background-image: url(${avaPic});
background-repeat: no-repeat;
background-position: center center;

border-radius: 50%;
`