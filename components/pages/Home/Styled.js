import styled from "@emotion/styled";
import { device, navigation } from "../../../lib/variables";

export const Containter = styled.div`
  display: table;
  width: 100%;
  height: auto;
  line-height: 150%;
`;

export const PhotosContainter = styled.div`
  display: table-cell;
  width: 65%;
  height: auto;

  @media ${device.largeLaptop} {
    display: block;
    width: 100%;
  }
`;

export const ReviewsContainter = styled.div`
  display: table-cell;
  width: 35%;
  padding: 0 2rem;

  @media ${device.largeLaptop} {
    display: block;
    width: 60%;
    padding: 1rem 1rem 0 1rem;
    margin-left: 20%;
  }

  @media ${device.phone} {
    width: 90%;
    padding: 1rem 1rem 0 1rem;
    margin: 0;
  }
`;

export const Div = styled.div`
  position: relative !important;
  width: 100%;
  height: auto;

  & img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

export const H1 = styled.h1`
  font-weight: 300;
  font-size: 1.4rem;
  padding: 0;
  margin-top: 0.5rem;

  @media ${device.phone} {
    padding-top: 1rem;
  }
`;

export const P = styled.p`
  // font-weight: 100;
  margin: 1rem 0 2rem 0;
`;

export const Button = styled.div`
  text-align: center;
  background-color: ${navigation.backgroundColor};
  border-radius: 25px;
  padding: 0.3rem 0.5rem 0.3rem 0.5rem;
  margin: 2rem 0 2rem 0;
  cursor: pointer;
  & a {
    text-decoration: none;
    background-color: ${navigation.backgroundColor};
    color: black;
  }
  & a:hover {
    color: ${navigation.linkHover};
  }
`;
