import styled from "@emotion/styled";
import { device, navigation } from "../../../lib/variables";

export const Ul = styled.ul`
  position: absolute;
  left: 25%;
  top: 50px;
  display: ${(props) => (props.menuOpen === true ? "block" : "none")};
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 50%;
  background-color: white;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 1050;
`;

export const Li = styled.li`
  text-align: left;
  border-bottom: 1px solid gray;

  & a {
    display: block;
    padding: 1rem 0 1rem 1rem;
    text-decoration: none;
    color: ${(props) =>
      props.active === true
        ? `${navigation.linkCurrent}`
        : `${navigation.link}`};
  }

  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }

  & a:hover {
    color: red;
  }
  & a:active {
    color: blue;
  }
`;
