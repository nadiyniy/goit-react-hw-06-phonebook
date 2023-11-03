import { useDispatch, useSelector } from 'react-redux';
import { StyledFilterDiv } from './Filter.styled';
import { selectFilter } from 'redux/selectors';
import { filterContactAC } from 'redux/actions';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handelOnFilter = e => {
    dispatch(filterContactAC(e.target.value));
  };

  return (
    <StyledFilterDiv>
      <h3>Find contact by name</h3>
      <input
        onChange={handelOnFilter}
        value={filter}
        placeholder="Enter filter value"
        name="filter"
      ></input>
    </StyledFilterDiv>
  );
};

export default Filter;
