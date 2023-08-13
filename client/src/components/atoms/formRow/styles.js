import styled from 'styled-components';

const FormRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  /* width: 300px; */
`;

const Label = styled.label`
  color: #607b96;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  margin-bottom: 10px;
`;

const Input = styled.input`
  color: #607b96;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;

  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #607b96;
  background: #011221;
`;

const Textarea = styled.textarea`
  color: #607b96;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;

  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #607b96;
  background: #011221;
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
`;

export { FormRowWrapper, Label, Input, Textarea };
