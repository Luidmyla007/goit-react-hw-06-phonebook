import PropTypes from 'prop-types';
import { FilterStyled } from './Filter.styled';


const Filter = ({ value, onChange }) => {
  return (
    <FilterStyled>
      <label>Find contacts by name</label>
      <br />
      <input type="search" name="filter" value={value} onChange={onChange} />
    </FilterStyled>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;