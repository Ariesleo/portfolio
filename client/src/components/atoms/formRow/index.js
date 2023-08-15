import React from 'react';
import { FormRowWrapper, Label, Input, Textarea } from './styles';

const FormRow = ({ label, height, isTextarea, ...inputProps }) => {
  return (
    <FormRowWrapper>
      <Label>{label}</Label>
      {isTextarea ? (
        <Textarea height={height} {...inputProps} />
      ) : (
        <Input {...inputProps} />
      )}
    </FormRowWrapper>
  );
};

export default FormRow;

/* 
<FormRow label="_name:" type="text" placeholder="Enter your name" />
      <FormRow label="_email:" type="email" placeholder="Enter your email" />
      <FormRow
        label="_message:"
        isTextarea
        height={150}
        type="text"
        placeholder="Enter your message"
      />
*/
