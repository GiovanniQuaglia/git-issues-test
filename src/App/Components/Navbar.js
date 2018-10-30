import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return(
    <NavBar>
      <Image src={require('./../Images/logoWhite.png')} alt="" />
      <SearchInput placeholder='Search' />
    </NavBar>
  )
}

const NavBar = styled.div`
  width: 100%;
  background-color: #24292E;
  height: 40px;
  padding: 16px 0 16px 0;
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  height: 40px;
  width: 40px;
  margin-left: 24px;
`;

const SearchInput = styled.input`
  height: 30px;
  border: none;
  width: 60%;
  background-color: #404448;
  border-radius: 4px;
  margin: 5px 0 0 32px;
  padding-left: 8px;
  font-size: 16px;
  ::placeholder {
   color: white;
   opacity: 0.5;
  }
  @media only screen and (min-width: 786px) {
    width: 250px;
  }
`;

export default Navbar;
