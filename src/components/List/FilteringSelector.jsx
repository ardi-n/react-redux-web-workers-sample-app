import React from 'react';

export default class FilteringSelector extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    const { onChange, filtering, filteringProp } = this.props;
    const newFiltering = {
      ...filtering,
      [filteringProp]: e.target.value
    };
    if (!newFiltering[filteringProp]) {
      delete newFiltering[filteringProp];
    }
    onChange(newFiltering);
  }
  render() {
    const { filtering, filteringProp, filteringPropOptions } = this.props;
    return (
      <select 
        value={(filtering && filtering[filteringProp]) || ''} 
        onChange={this.onChange}
      >
        <option key="undefined"></option>
        {filteringPropOptions.map(option => (
          <option 
            key={option[0]} 
            value={option[0]}
          >
            {option[1]}
          </option>
        ))}
      </select>
    );
  }
}