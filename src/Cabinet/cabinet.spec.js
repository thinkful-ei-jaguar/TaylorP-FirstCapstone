import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import toJson from 'enzyme-to-json'
import Cabinet from './cabinet'
import SpiritListContext from '../Context/spiritListContext'

describe(`<Cabinet />`, () => {
  it('renders witout crashing with spirits', () => {
    const match = {params: {id: 1}}
    const testSpirits = [
      {
        id:1,
        spirit_cat: 'vodka',
        spirit_id: 2,
        spirit_name: 'Test Name1',
        user_id: 1
      },
      {
        id:2,
        spirit_cat: 'tequila',
        spirit_id: 1,
        spirit_name: 'Test Name2',
        user_id: 1
      },
      {
        id:3,
        spirit_cat: 'bourbon',
        spirit_id: 4,
        spirit_name: 'Test Name3',
        user_id: 1
      },
    ]
    const ctxval = {
      spiritList: testSpirits,
      spiritTypes: [1,2,4],
      spiritAdd: false,
      error: null,
      setError: () => {},
      clearError: ()=> {},
      setSpiritTypes: () => {},
      removeSpiritType: ()=> {},
      setSpiritList: () => {},
      removeSpirit: () => {},
      setSpiritAddTrue: () => {},
      setSpiritAddFalse: () => {}
    }
  
    mount(<MemoryRouter>
      <SpiritListContext.Provider value={ctxval}>
        <Cabinet match={match}/>
      </SpiritListContext.Provider>
    </MemoryRouter>)
  })
  it('renders witout crashing with no spirits', () => {
    const match = {params: {id: 1}}
    const testSpirits = []
    const ctxval = {
      spiritList: testSpirits,
      spiritTypes: [],
      spiritAdd: false,
      error: null,
      setError: () => {},
      clearError: ()=> {},
      setSpiritTypes: () => {},
      removeSpiritType: ()=> {},
      setSpiritList: () => {},
      removeSpirit: () => {},
      setSpiritAddTrue: () => {},
      setSpiritAddFalse: () => {}
    }
  
    mount(<MemoryRouter>
      <SpiritListContext.Provider value={ctxval}>
        <Cabinet match={match}/>
      </SpiritListContext.Provider>
    </MemoryRouter>)
  })
})