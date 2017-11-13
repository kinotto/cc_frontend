
import React from 'react';
import IdeaList from '../app/components/ideas/IdeaList';
import renderer from 'react-test-renderer';
import { createMockStore } from 'redux-test-utils';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import configureStore from 'redux-mock-store';
import {Map, List} from 'immutable';


describe('test main components', () => {
  let store;

  beforeEach(() => {
    store = Map({
      ideas: List(),
      categories: List()
    })
    const mockStore = configureStore();
    store = mockStore(store);
  })

  it("should create an IdeaList component", () => {
    let ideaList = shallow(<IdeaList store={store} />);
    expect(ideaList).toBeTruthy();
  });


});
