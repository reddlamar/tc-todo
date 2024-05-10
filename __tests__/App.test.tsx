/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/root/App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

describe('Rendering App', () => {
  it('renders snapshot', async () => {
    let wrapper: any;
    await act(async () => {
      wrapper = renderer.create(<App />);
    });
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
