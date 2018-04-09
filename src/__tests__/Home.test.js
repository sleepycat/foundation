import React from 'react'
import { Home } from '../Home'
import { mount } from 'enzyme'

// Using mount here to trigger componentDidMount so translations are loaded
describe('<Home />', () => {
  it('can be rendered', () => {
    const wrapper = mount(<Home />)
    expect(wrapper.is('Home')).toEqual(true)
  })

  it('contains the text "Hello world"', () => {
    const wrapper = mount(<Home />)
    expect(wrapper.text()).toMatch(/Hello world/)
  })
})
