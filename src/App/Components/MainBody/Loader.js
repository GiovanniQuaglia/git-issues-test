import React from 'react';
import styled, {keyframes} from 'styled-components';

const Loader = () => {
  return(
    <Circle />
  )
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  margin: 100px 0 100% 0;
  display: inline-block;
  animation: ${rotate} 1s linear infinite;
  background-color: #24292E;
  border-radius: 40px;

  ::before {
    content: '';
    width: 40px;
    height: 40px;
    background-color: #fff;
    z-index: 2;
    position: absolute;
    left: 10px;
    top: 10px;
    border-radius: 40px;
  }

  ::after {
    content: '';
    width: 10px;
    height: 60px;
    background-color: #fff;
    z-index: 2;
    position: absolute;
    left: 25px;
    top: 0px;
  }
`;

export default Loader;
