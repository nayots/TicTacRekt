import styled from "styled-components";

export const SwitchButton = styled.button`
  color: ${props => props.theme.colors.fourth};
  background-color: ${props => props.theme.colors.secondary};
  font-weight: 600;
  font-size: ${props => props.theme.text.normalSize};
  border-radius: 5px;
  outline: none;
  margin: 15px;
`;
