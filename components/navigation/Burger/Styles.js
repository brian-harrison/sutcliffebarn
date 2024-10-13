import styled from "@emotion/styled";
import { burger, device } from "../../../lib/variables";

export const Burger = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${burger.top};
  right: ${burger.right};
  height: ${burger.size};
  width: ${burger.size};
  padding: 2px;
  cursor: pointer;
  border: none;
  background: transparent;
  z-index: 9990;

  &::-moz-focus-inner {
    padding: 0;
    border: 0 none;
  }
  &:focus {
    outline: 0;
  }
  div {
    position: relative;
    height: ${burger.barHeight};
    width: 100%;
    border-radius: ${burger.barHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ open }) =>
      open ? `${burger.barActiveColour}` : `${burger.barColour}`};
    -webkit-transition: ${burger.transition};
    -moz-transition: ${burger.transition};
    -ms-transition: ${burger.transition};
    -o-transition: ${burger.transition};
    transition: ${burger.transition};
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};

    &:before,
    :after {
      position: absolute;
      top: -${burger.apart};
      height: ${burger.barHeight};
      width: 100%;
      border-radius: ${burger.barHeight};
      content: "";
    }
    &:after {
      top: ${burger.apart};
    }
    // Now when clicked - change shape....
    &:before {
      -webkit-transition: ${burger.transition};
      -moz-transition: ${burger.transition};
      -ms-transition: ${burger.transition};
      -o-transition: ${burger.transition};
      transition: ${burger.transition};
      transform: ${({ open }) => (open ? "rotate(90deg)" : "rotate(0)")};
      background-color: ${({ open }) =>
        open ? `${burger.barActiveColour}` : `${burger.barColour}`};
      top: ${({ open }) => (open ? 0 : `-${burger.apart}`)};
    }
    &:after {
      -webkit-transition: ${burger.transition};
      -moz-transition: ${burger.transition};
      -ms-transition: ${burger.transition};
      -o-transition: ${burger.transition};
      transition: ${burger.transition};
      transform: ${({ open }) => (open ? "rotate(90deg)" : "rotate(0)")};
      background-color: ${({ open }) =>
        open ? `${burger.barActiveColour}` : `${burger.barColour}`};
      top: ${({ open }) => (open ? 0 : `${burger.apart}`)};
    }
  } // end div

  @media ${device.tablet} {
    display: flex;
  }
`;
