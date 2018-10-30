import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IssuesHeader = () => {
  const headerText = 'Open';
  return(
    <IssuesHeaderBody>
      {headerText}
    </IssuesHeaderBody>
  )
}

IssuesHeader.propTypes = {
  headerText: PropTypes.string,
}

const IssuesHeaderBody = styled.div`
  font-weight: 600;
  border-bottom: 1px solid lightgray;
  padding: 16px 0 16px 16px;
  text-align: left;
  background-color: #F6F8FA;
  color: #24292e;
`;

export default IssuesHeader;
