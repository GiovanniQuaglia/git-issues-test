import React from 'react';
import styled from 'styled-components';

const Header = props => {
  return(
    <React.Fragment>
      <HeaderWrapper>
        <Breadcrumbs>
          <a href=''>Facebook </a>
          /
          <a href=''> React</a>
        </Breadcrumbs>
        <SectionsWrapper>
          {props.sections.map(
            section => {
              if(section === props.selectedSection){
                return <Section key={section} className='selected'>{section}</Section>
              }
              return <Section key={section}>{section}</Section>
            }
          )}
      </SectionsWrapper>
      </HeaderWrapper>
      <Divider />
    </React.Fragment>
  )
}

const HeaderWrapper = styled.div`
  width: fill-available;
  display: inline-block;
  background-color: #FAFBFC;
  padding-top: 32px;
  @media only screen and (min-width: 786px) {
  padding: 32px 5% 0 5%;
  }
`;

const Breadcrumbs = styled.div`
  font-size: 18px;
  color: #0366E2;
  font-weight: 600;
  text-align: left;
  margin-left: 16px;
  a {
    text-decoration: none;
  }
`;

const SectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 24px;
  @media only screen and (min-width: 786px) {
    flex-direction: row;
  }
`;

const Section = styled.div`
  font-size: 16px;
  padding: 16px 0 16px 24px;
  border-top: 1px solid lightgray;
  &.selected{
    border-left: 3px solid #E36209;
    background-color: #fff;
    color: #24292e;
    padding: 16px 0 16px 21px;
  }
  @media only screen and (min-width: 786px) {
    border: none;
    padding: 16px 24px;
    &.selected{
      padding: 16px 24px;
      border-style: solid;
      border-width: 3px 1px 0px 1px;
      border-color: #E36209 lightgrey #fff lightgrey;
      background-color: #fff;
      margin-bottom: -1px;
      padding-bottom: 17px;
      border-radius: 4px 4px 0 0;
      color: #24292e;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: lightgray;
`;

export default Header;