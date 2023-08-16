import React, { useState } from 'react';
import {
  DropdownContainer,
  DropdownButton,
  DropdownList,
  DropdownListItem,
} from './styles.js';

const DropdownSelect = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || 'Select an option'}
      </DropdownButton>
      <DropdownList isOpen={isOpen}>
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
