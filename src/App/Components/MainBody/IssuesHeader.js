import React from 'react';
import styled from 'styled-components';

const IssuesHeader = () => {
  return(
    <IssuesHeaderBody>
      Open
    </IssuesHeaderBody>
  )
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
