import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerContainer = styled.div`
  display: inline-block;
`;

const DatePickerWrapper = styled(DatePicker)`
  border: 1px solid var(--yellow);
  background-color: var(--fade-dark);
  color: var(--white);
  font-family: var(--bodyFont);
  font-size: 0.9rem;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
`;

export { DatePickerContainer, DatePickerWrapper };
