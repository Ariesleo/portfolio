import React, { useState } from 'react';
import {
  DropdownContainer,
  DropdownButton,
  DropdownList,
  DropdownListItem,
} from './styles.js';

const DropdownSelect = ({ options, onSelect }) => {
  const [isopen, setIsopen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsopen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsopen(!isopen)}>
        {selectedOption || 'Select an option'}
      </DropdownButton>
      <DropdownList isopen={isopen ? 'true' : 'false'}>
        {options.map((option) => (
          <DropdownListItem
            key={option.value}
            onClick={() => handleOptionSelect(option.value)}
          >
            {option.label}
          </DropdownListItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default DropdownSelect;

/* 

const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
   const handleOptionSelect = (option) => {
    console.log(`Selected option: ${option}`);
  };
  <DropdownSelect options={options} onSelect={handleOptionSelect} />

*/
