import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
background: #ddddf7;
height: 60px;
display: flex;

padding: 0.5 rem calc ((100vw - 1000px) / 2);
z-index: 10;


justify-content: flex-start;
`;


export const NavLink = styled(Link)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

$.active {
color: #15cdfc;
}
`

export const Bars = styled(FaBars)`
display: none;
color: #fff:

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor:pointer;
}
`
export const NavMenu = styled.div`
display: flex;
align-items: center;



width: 100vw;


@media screen and (max-width: 768px) {
display: none;
}
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;



justify-content: flex-end;
width: 100vw;
border-radius: 70px;

@media screen and (max-width: 768px) {
display: none;   
}
`

export const NavBtnLink = styled(Link)`
border-radius: 200px;
background: #8655a2;
padding: 10px 22px;
color: #fff;
border:none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: 10px;

´ 

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #0100606;
}
`
