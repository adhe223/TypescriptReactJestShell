import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import App from './App';

describe('App', () => {
  let wrapper: ShallowWrapper<{}, {}>;

  describe('render applications', () => {
    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
