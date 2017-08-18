import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from './component/Input'
import Results from './component/Results'
import Wrapper from './styled/Wrapper'

class Autocomplete extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
  }
  
  /**
   * on input change
   * @param value
   */
  changed(value){
    if(value){
      this.setState({value})
    }
  }
  
  /**
   * render the component
   * @return {XML}
   */
  render() {
    return (
        <Wrapper>
          <Input value={this.state.value} changed={this.changed.bind(this)} placeholder={this.props.placeholder}/>
          <Results list={this.props.list}/>
        </Wrapper>
    );
  }
  
  
  /**
   * defines proptypes
   * @return {{placeholder: *, list: *}}
   */
  static get propTypes() {
    return {
      placeholder: PropTypes.string,
      list: PropTypes.array
    }
  }
  
  /**
   * sets default proptypes
   * @return {{placeholder: string, list: Array}}
   */
  static get defaultProps() {
    return {
      placeholder: 'Placeholder',
      list: []
    }
  }
}
export default Autocomplete;
