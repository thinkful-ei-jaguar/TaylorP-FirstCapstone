import React from 'react'
import { shallow } from 'enzyme'
import CabinetCard from './cabinetCard'

describe('Cabinet Card component', () => {
  it('Renders Spirit Name in h3 tag', () => {
    const spirit = {
      spirit_name: 'test_name',
      spirit_cat: 'test_spirit'
    }
    const wrapper = shallow(<CabinetCard spirit={spirit} />)
    const name = <h3>test_name</h3>;

    expect(wrapper.contains(name)).toEqual(true);
  })
  it('Renders Spirit Category in h4 tag', () => {
    const spirit = {
      spirit_name: 'test_name',
      spirit_cat: 'test_spirit'
    }
    const wrapper = shallow(<CabinetCard spirit={spirit} />)
    const subHeader = <h4>test_spirit</h4>

    expect(wrapper.contains(subHeader)).toEqual(true);
  })
})