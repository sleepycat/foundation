/**
 ** @jest-environment node
 **/

import React from 'react'
import { shallow } from 'enzyme'
import { I18nLoader } from '../I18nLoader'

describe('<I18nLoader />', () => {
  it('executes props.children as a function', () => {
    const child = jest.fn()
    shallow(<I18nLoader>{child}</I18nLoader>)
    expect(child.mock.calls.length).toEqual(1)
  })

  it('calls props.children with an object as an argument', () => {
    const child = jest.fn()
    shallow(<I18nLoader>{child}</I18nLoader>)
    let [call] = child.mock.calls
    // first argument when called:
    expect(typeof call[0]).toEqual('object')
  })

  it('the props passed to the loader are passed as arguments to the child', () => {
    const child = jest.fn()
    shallow(<I18nLoader language="en">{child}</I18nLoader>)
    let [call] = child.mock.calls
    let [args] = call
    expect(args.language).toEqual('en')
  })
})
