import PropTypes from 'prop-types';
import {Input, Label} from '../Filter/Filter.style'

export const Filter = ({ filter, onChange }) => {
return  <Label>
    Find contacts by name
    <Input type="text" value={filter} onChange={onChange}/>
  </Label>
}
export default Filter;

Filter.propTypes = {
filter: PropTypes.string.isRequired,  
onChange: PropTypes.func.isRequired}