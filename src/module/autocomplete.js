import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from './component/Input'
import Results from './component/Results'
import Wrapper from './styled/Wrapper'

class Autocomplete extends Component {
  render() {
    return (
        <Wrapper>
          <Input placeholder={this.props.placeholder}/>
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
