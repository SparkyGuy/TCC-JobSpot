import React from 'react';
import {
    Nav,
    NavLink, 
    Bars,
    NavMenu, 
    NavBtn, 
    NavBtnLink
} from './NavBarElements';

const Navbar = () => {
  return (
    <>
     <Nav>
        <NavLink to="/">
        <img src={require('./images/logoescrita2.png')} alt="logo" class="logo"
        style={{
            width: 110,
            height: 30,
            }}/>
        </NavLink>
        <Bars />
        
        <NavMenu>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>

            <NavBtnLink to="/signin" >Sign Up</NavBtnLink>
        </NavBtn>
     </Nav>


         
     <div class="container">
        <div class="elemento">
            <div class="text1">
                Bem vindo ao JobSpot!
            </div> 

            <div class="text2">
                encontrar trabalhadores locais
            </div>
                 <div class="text3">nunca foi tão fácil</div>
            
            <div class="empty"></div>
            <div class="botoes">
            <a href="#" class="botao1">Registrar-se</a>
            
            <a href="#" class="botao2">Registrar-se</a>
            </div>
        </div>

           <div class="elemento">
            DIV
           </div>
     </div>
    </>
  )
}

export default Navbar
