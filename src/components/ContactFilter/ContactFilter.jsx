import React from 'react';
import PropTypes from 'prop-types';
import { FilterWrap, FilterLabel, FilterInput } from './ContactFilter.styled';

export default function ContainerFilter({ value, onFilter }) {
  return (
    <FilterWrap>
      <FilterLabel htmlFor="search">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        value={value}
        onChange={onFilter}
        placeholder="Enter name to search"
      />
    </FilterWrap>
  );
}

ContainerFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
