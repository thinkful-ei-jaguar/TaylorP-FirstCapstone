import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import toJson from 'enzyme-to-json'
import AddSpirit from './addSpirit'
import RecipeContext from '../Context/recipeContext'

describe('<AddSpirit />', () => {
  it('renders without crashing', () => {
    const match = {params: {id: 1}}
    mount(
      <MemoryRouter>
        <AddSpirit match={match}/>
      </MemoryRouter>
    )
  })
  it('renders as expected', () => {
    const match = { params: { id: 1 } }
    const tree = renderer.create(
      <MemoryRouter>
        <AddSpirit match={match}/>
      </MemoryRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot();
  })
})