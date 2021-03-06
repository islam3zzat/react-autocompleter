import React from 'react';
import ReactDOM from 'react-dom';
import Autocomplete from '../autocomplete';
import {render, shallow, mount } from 'enzyme';

const mockSource  = [
  'Lorem',
  'ipsum',
  'dolor',
  'sit',
  'amet,' +
  'consectetur',
  'adipisicing',
  'elit.',
  'Asperiores'];
it('renders Autocomplete without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Autocomplete />, div);
});

describe('user provided props', () => {
  it('should render default placeholder', () => {
    let autoComplete = <Autocomplete />
    let renderedAutocomplete = render(autoComplete)
    let input = renderedAutocomplete.find('input')
    expect(input.attr('placeholder')).toBe('Placeholder')
  })
  it('should render provided placeholder', () => {
    let autoComplete = <Autocomplete placeholder="search please"/>
    let renderedAutocomplete = render(autoComplete)
    let input = renderedAutocomplete.find('input')
    expect(input.attr('placeholder')).toBe('search please')
  })
})
describe('user provided source', () => {
  let autoComplete, renderedAutocomplete, shallowedAutocomplete
  beforeAll(() => {
    autoComplete = <Autocomplete source={mockSource} />
    renderedAutocomplete = render(autoComplete)
    shallowedAutocomplete = shallow(autoComplete)
  })
  it('shouldnt show options by default', () => {
    let ul = renderedAutocomplete.find('ul')
    expect(ul.length).toBe(0)
  })
  it('shouldnt be active by default', () => {
    expect(shallowedAutocomplete.root.state().active).toBeFalsy()
  })
  it('should have no list items', () => {
    expect(shallowedAutocomplete.find('li').length).toBe(0);
  })
  it('should have provided list items', () => {
    let mountedAutocomplete = mount(autoComplete)
    mountedAutocomplete.find('input').simulate('focus');
    expect(mountedAutocomplete.find('li').length).toBe(mockSource.length);
  })
  //  hocks
  it('should call beforeSearch with the value', () => {
    const beforeSearchSpy = jest.fn()
    let autoComplete = <Autocomplete source={mockSource} beforeSearch={beforeSearchSpy}/>
    let mountedAutocomplete = mount(autoComplete)
    mountedAutocomplete.setState({value: 'asdasd'})
    mountedAutocomplete.find('input').simulate('change', {target: {value: 'My new value'}});
    expect(beforeSearchSpy).toBeCalledWith('My new value')
  })
  it('should call afterSearch with the value', (done) => {
    const afterSearchSpy = jest.fn()
    let autoComplete = <Autocomplete source={mockSource} afterSearch={afterSearchSpy}/>
    let mountedAutocomplete = mount(autoComplete)
    mountedAutocomplete.find('input').simulate('change', {target: {value: 'a'}});
    setTimeout(()=>{
      expect(afterSearchSpy).toBeCalled()
      done()
    }, 500)
  })
})