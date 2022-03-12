import styled from "styled-components";

export default function Button({ isLoading, children, testid, ...props }) {
  return (
    <StyledButton disabled={isLoading} data-testid={testid} {...props}>
      {children}
    </StyledButton>
  );
}

// Button component
const StyledButton = styled.button`
  height: 35px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  background: rgb(220, 220, 220);
  cursor: pointer;
  &:hover {
    background: rgb(192, 192, 192);
  }
  &:active {
    background-color: rgb(220, 220, 220);
    background-size: 100%;
    transition: background 0s;
  }
`;
