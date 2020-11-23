import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

export const PickerSelect = ({ setOrderBy }) => (
  <RNPickerSelect
    onValueChange={(value) => setOrderBy(value)}
    items={[
      { label: 'Latest article', value: 'latest' },
    ]}
  />
);

export default PickerSelect;
