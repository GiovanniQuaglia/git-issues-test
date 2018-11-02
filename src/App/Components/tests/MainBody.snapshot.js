import React from 'react';
import renderer from 'react-test-renderer';
import MainBody from '../MainBody';

describe('MainBody Snapshot', () => {
  test('renders', () => {
    const component = renderer.create(
      <MainBody />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
