import styled from "styled-components";

export default function Input({
  name,
  label,
  type,
  placeholder,
  value,
  touched,
  error,
  onChange,
  onBlur
}) {
  return (
    <StyledInputWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        data-testid={`form-${name}-input`}
      />
      {touched && error ? (
        <StyledError data-testid={`form-${name}-input-error`}>
          {error}
        </StyledError>
      ) : null}
    </StyledInputWrapper>
  );
}

// Wrapper component for the input
const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 50px;
  width: 100%;
`;

// Label component
const StyledLabel = styled.label`
  color: #70777a;
`;

// Input component
const StyledInput = styled.input`
  border: 1px solid #70777a;
  outline: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #44474b;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  ::placeholder {
    color: #d2d3d4;
    opacity: 1;
  }
  :-ms-input-placeholder {
    color: #d2d3d4;
  }
  ::-ms-input-placeholder {
    color: #d2d3d4;
  }
`;

// Error (validation) component
const StyledError = styled.div`
  font-size: 12px;
  color: red;
`;
