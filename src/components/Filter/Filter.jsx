import { FilterStyled } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/filterSlice';
import { getFilterValue} from '../../redux/selectors';


export const Filter = () => {
  const dispatch = useDispatch(); 
  const inputValue = useSelector(getFilterValue);
  
  return (
    <FilterStyled>
      <label>Find contacts by name</label>
      <br/>
      <input type="search" name="name" value={inputValue} onChange={e => dispatch(filterContacts(e.currentTarget.value))} />
    </FilterStyled>
  );
};



