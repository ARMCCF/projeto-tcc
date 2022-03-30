import {React, useState} from 'react';
import './style.css';
import Logo from './img/imglogo.png'
import Carousel from "react-elastic-carousel"
import Item from "./Item";
import styled from 'styled-components'
import { HiOutlineShoppingBag } from 'react-icons/hi';


const breakPoints = [
  { width: 6, itemsToShow: 1 },
  { width: 600, itemsToShow: 2 },
  { width: 1000, itemsToShow: 3 },
  { width: 4000, itemsToShow: 4 },
];

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
    width: 550px;
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
                    <HiOutlineShoppingBag />
                    </div>
                </div>
            </header>
            <main className='main'>
              <div className='carosel'>
            <Carousel breakPoints={breakPoints}>
              <Item><img src={Logo} width='200px' /></Item>
              <Item><img src={Logo} width='200px' /></Item>
              <Item><img src={Logo} width='200px' /></Item>
              <Item><img src={Logo} width='200px' /></Item>
              <Item><img src={Logo} width='200px' /></Item>
              <Item><img src={Logo} width='200px' /></Item>

            </Carousel>
              </div>
            </main>
        </div>
    );
    
}

export default Home;