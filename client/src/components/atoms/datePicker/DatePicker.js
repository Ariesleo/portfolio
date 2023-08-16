import React from 'react';
import { DatePickerContainer, DatePickerWrapper } from './styles.js';

const DatePicker = ({ selectedDate, onSelect, placeholder }) => {
  const handleDateSelect = (date) => {
    onSelect(date);
  };

  return (
    <DatePickerContainer>
      <DatePickerWrapper
        selected={selectedDate}
        onChange={handleDateSelect}
        dateFormat="MM/dd/yyyy"
        placeholderText={placeholder}
      />
    </DatePickerContainer>
  );
};

export default DatePicker;

/* 

    const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateSelect = (date) => {
    setStartDate(date);
  };

  const handleEndDateSelect = (date) => {
    setEndDate(date);
  };

  <DatePicker
          selectedDate={startDate}
          onSelect={handleStartDateSelect}
          placeholder="Select start date"
        />
        <DatePicker
          selectedDate={endDate}
          onSelect={handleEndDateSelect}
          placeholder="Select end date"
        />
*/
