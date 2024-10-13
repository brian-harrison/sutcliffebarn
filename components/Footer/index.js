import { useState, useEffect } from "react";
import { Container } from "./Styled";

const getWidth = () => {
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return width;
};

const Footer = function () {
  const [newWidth, setNewWidth] = useState(0);

  let windowWidth = 0;
  useEffect(() => {
    // windowWidth = getWidth(); This is a change to test github
    setNewWidth(windowWidth);
  }, [windowWidth]);

  return <Container></Container>;
};

export default Footer;
