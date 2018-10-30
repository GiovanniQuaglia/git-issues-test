import React from 'react';
import styled from 'styled-components';

const IssueItem = ({ issue }) => {
  const { title, html_url , number, user } = issue;
  return(
    <IssueWrapper>
      <Title href={html_url}>
        {title}
      </Title>
      <Details>
        {`#${number} created by ${user.login}`}
      </Details>
    </IssueWrapper>
  )
}

const IssueWrapper = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 8px 0 0 16px;
  text-align: left;
  :hover {
    background-color: #F6F8FA;
    margin: 0 1px;
    padding: 8px 16px 0 16px;
  }
`;

const Title = styled.a`
  color: #24292e;
  font-weight: 600;
  text-decoration: none;
`;

const Details = styled.p`
  font-size: 12px;
  margin-top: 8px;
`;
export default IssueItem;