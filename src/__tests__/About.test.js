import React from 'react'
import { About } from '../About'
import { mount } from 'enzyme'

// Using mount here to trigger componentDidMount so translations are loaded
describe('<About />', () => {
  it('can be rendered', () => {
    const wrapper = mount(<About />)
    expect(wrapper.is('About')).toEqual(true)
  })

  it('contains the text "About"', () => {
    const wrapper = mount(<About />)
    expect(wrapper.text()).toMatch(/About/)
  })
})

