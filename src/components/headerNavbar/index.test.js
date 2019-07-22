/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import initialState from '../../redux/initialState';
import serverAnswer from '../../mockData/serverAnswer';
import ProviderWrapper from '../../../.storybook/prodiverWrapper';
import HeaderNavbar from './index';
import configureStore from '../../redux/store';
import imgLogo from './../../assets/img/lbt_logo.png'
import imgTextLogo from './../../assets/img/lbt_text_logo.png'

// DEBUG: console.log(wrapper.html());
// DEBUG: console.log(wrapper.debug());

let wrapper;
let customState;

describe('HeaderNavbar - user connected', () => {
  beforeEach(() => {
    customState = initialState;
    customState.userReducer.userInfo = serverAnswer.authenticatedUserInfo;
    wrapper = mount(
      <ProviderWrapper store={configureStore(customState)}>
        <HeaderNavbar />
      </ProviderWrapper>,
    );
  });

  it('should have authenticated user profile picture displayed', () => {
    const elementWrapper = wrapper.find('HeaderNavbar img')
      .filterWhere(
        item => item.props().src === serverAnswer.authenticatedUserInfo.personalData.picture,
      );
    expect(elementWrapper.length).toEqual(1);
  });

  it('should have authenticated user firstname displayed', () => {
    const elementWrapper = wrapper.find('HeaderNavbar div')
      .filterWhere(
        item => item.props().children.toString().toLowerCase() === serverAnswer.authenticatedUserInfo.personalData.firstname.toLowerCase()
      );
    expect(elementWrapper.length).toEqual(1);
  });

  it('should have logo', () => {
    const elementWrapper = wrapper.find('HeaderNavbar img')
      .filterWhere(
        item => item.props().src === imgLogo,
      );
    expect(elementWrapper.length).toEqual(1);
  });

  it('should have text logo', () => {
    const elementWrapper = wrapper.find('HeaderNavbar img')
      .filterWhere(
        item => item.props().src === imgTextLogo,
      );
    expect(elementWrapper.length).toEqual(1);
  });

  it('should have navlink to go to "public tweets"', () => {
    const elementWrapper = wrapper.find('HeaderNavbar NavLink')
      .filterWhere(
        item => item.props().href === '/actu'
        && item.find('a').text() === "Actu' Tweet",
      );
    expect(elementWrapper.length).toEqual(1);
  });

  it('should have navlink to go to "secret tweets"', () => {
    const elementWrapper = wrapper.find('HeaderNavbar NavLink')
      .filterWhere(
        item => item.props().href === '/secret'
        && item.find('a').text() === "Secret Tweet",
      );
    expect(elementWrapper.length).toEqual(1);
  });
});
