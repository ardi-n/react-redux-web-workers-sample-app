import React from 'react';
import { SORTING_PROPS, SORTING_ASC } from '../../constants';

export default class SortingSelector extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    const { onChange } = this.props;
    onChange({prop: e.target.value, dir: SORTING_ASC});
  }
  render() {
    const { sorting } = this.props;
    return (
      <select value={sorting && sorting.prop} onChange={this.onChange}>
        <option key="undefined"></option>
        {SORTING_PROPS.map(sortingProp => (
          <option 
            key={sortingProp[0]} 
            value={sortingProp[0]}
          >
            {sortingProp[1]}
          </option>
        ))}
      </select>
    );
  }
}