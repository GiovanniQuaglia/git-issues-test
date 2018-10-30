import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Loader from './MainBody/Loader';

const API = 'https://api.github.com/repos/facebook/react/issues?page=';

class MainBody extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      page: 1,
      isLoading: false,
      error: null,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.fetchData();
  }

  fetchData = async () => {
    try {
    const response = await axios.get(API + this.state.page);

    this.setState({
      data: response.data,
      isLoading: false,
    });
    console.log(response);
    }
    catch {
      this.setState({
        error: true,
        isLoading: false,
      })
    }
  }

  render() {
    const { isLoading, error } = this.state;

    return (
      <Wrapper>
        {isLoading &&
          <Loader />
        }
        {error &&
          <p>Molto male</p>
        }
      </Wrapper>
    );
  }
}


const Wrapper = styled.div`
  width: 100%;
  display: inline-block;
  border-top: 1px solid lightgray;
  margin-top: 32px;
  @media only screen and (min-width: 786px) {
    width: 90%;
    border: 1px solid lightgray;
    border-bottom: none;
    border-radius: 4px 4px 0 0;
  }
`;

export default MainBody;
