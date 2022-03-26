import {React, useState} from 'react';
import './style.css';
import Logo from './img/imglogo.png'
import styled from 'styled-components'
import { HiOutlineShoppingBag } from 'react-icons/hi';


const Input = styled.input.attrs(props => ({
  
    // or we can define dynamic ones
    size: props.size || "1em",
  }))`
    color: palevioletred;
    font-size: 1em;
    border: 1px solid palevioletred;
    border-radius: 10px;
  
    /* here we use the dynamically computed prop */
    margin: ${props => props.size};
    padding: ${props => props.size};
    width: 700px;
    height: 40px;
    padding: 0 20px;
  `;

  const Link = ({ className, children }) => (
    <a className={className}>
      {children}
    </a>
  );
  
  const StyledLink = styled(Link)`
    color: black;
    font-weight: ;
    padding 0 15px;
    align-items: center;
  `;

function Home() {
    return (
        <div>
            <header className="header">
                <div className='toolbar'>
                   
                    <div className='logo'>
                           <img src={Logo} width='200px' /> 
                        </div>
                   
                    <div>

                    <div className='search'>
                    <Input placeholder="Pesquisar peças de roupas" size="12px" />
                    </div>
                    <div> 
                        <br></br> 
                        <StyledLink>Acessórios</StyledLink>
                        <StyledLink>Shorts & Bermudas</StyledLink>
                        <StyledLink>Blusas & Camisetas</StyledLink>
                        <StyledLink>Calças</StyledLink>
                        <StyledLink>Camisas</StyledLink>
                        
                    </div>
                    <div>
                        <StyledLink>Casacos & Jaquedas</StyledLink>
                        <StyledLink>Jeans</StyledLink>
                        <StyledLink>Moletons</StyledLink>
                        <StyledLink>Saias</StyledLink>
                        <StyledLink>Vestidos</StyledLink>
                        </div>
                    </div>
                    <div className='login'>
                    <StyledLink>Login</StyledLink>
                    <StyledLink>Cadastro</StyledLink>
                    
                    </div>
                    <div className='carrinho'>
                    <HiOutlineShoppingBag  />
                    </div>
                </div>
            </header>
            <main className='main'>main</main>
        </div>
    );
    
}

export default Home;