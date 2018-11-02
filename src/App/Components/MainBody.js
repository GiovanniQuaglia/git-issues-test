import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';

import Loader from './MainBody/Loader';
import IssuesHeader from './MainBody/IssuesHeader';
import IssueItem from './MainBody/IssueItem';

const API = 'https://api.github.com/repos/facebook/react/issues?page=';

class MainBody extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      page: 1,
      isLoading: false,
      error: false,
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
    }
    catch {
      this.setState({
        error: true,
        isLoading: false,
      })
    }
  }

  displayIssues = data => {
    return (
      <React.Fragment>
        <IssuesHeader />
        {
          data.map(issue => <IssueItem issue={issue} key={issue.number} />)
        }
      </React.Fragment>
    )
  }

  render() {
    const { isLoading, error, data } = this.state;

    return (
      <Wrapper>
        {isLoading ?
          <Loader /> :
          this.displayIssues(data)
        }
        {error &&
          <p>This is not good</p>
        }
      </Wrapper>
    );
  }
}

MainBody.porpTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
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
