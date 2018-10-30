import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Components/Header';
import Navbar from './Components/Navbar';
import MainBody from './Components/MainBody';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sections: ['Code', 'Issues', 'Pull requests', 'Project', 'Wiki', 'Insights'],
      selectedSection: 'Issues'
    }
  }
  render() {
    const { sections, selectedSection } = this.state;
    return (
      <Wrapper>
        <Navbar />
        <Header sections={sections} selectedSection={selectedSection}/>
        <MainBody />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  font-size: 16px;
  color: #586069;
`;

export default App;