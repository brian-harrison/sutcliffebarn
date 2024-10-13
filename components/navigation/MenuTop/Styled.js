import styled from "@emotion/styled";
import { device, layout, navigation } from "../../../lib/variables";

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  /* background-color: #333333; */

  @media ${device.tablet} { 
    display: none;
  }
`;

export const Li = styled.li`
  text-align: center;
  background-color: ${(props) =>
    props.active === true
        ? `${navigation.backgroundColor}`
        : 'white'};
  border-radius: 25px;
  padding: .3rem .5rem .3rem .5rem;
  & a {
    text-decoration: none;

    background-color: ${(props) =>
    props.active === true
        ? `${navigation.backgroundColor}`
        : 'white'};

    color: black;
  }
  & a:hover {
    color: ${navigation.linkHover}
  }
  & a:active {
    color: blue;
  }
`;

/*
color: ${(props) =>
      props.active === true
        ? `${navigation.linkCurrent}`
        : `${navigation.link}`}

color: ${(props) =>
      props.active === true
        ? 'black'
        : 'black'};

*/