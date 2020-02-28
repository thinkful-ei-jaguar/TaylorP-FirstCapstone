import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import toJson from 'enzyme-to-json'
import CabinetList from './cabinetList'
import SpiritListContext from '../Context/spiritListContext'

describe('<CabinetList />', () => {
  it('renders without crashing', () => {
    const match = {params: {id: 1}}
    mount(
      <MemoryRouter>
        <CabinetList match={match}/>
      </MemoryRouter>
    )
  })
})