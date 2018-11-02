import React from 'react';
import renderer from 'react-test-renderer';
import IssueItem from '../MainBody/IssueItem';

const mockedProps = {  
  title: 'title',
  html_url: 'url',
  number: 0,
  user: 'user',
};

describe('IssueWrapper Snapshot', () => {
  test('renders', () => {
    const component = renderer.create(
      <IssueItem issue={mockedProps} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});