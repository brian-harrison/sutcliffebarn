import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Arrow = function (props) {
  const { direction, count, imageIndex, setImageIndex, isLoaded, setIsLoaded } = props;

  const next = () => {
    // setIsLoaded(false);
    // setTimeout(() => {
      setImageIndex(imageIndex === count ? 0 : imageIndex + 1);
    // }, 1000);
  };

  const previous = () => {
    // setIsLoaded(false);
    // setTimeout(() => {
      setImageIndex(imageIndex === 0 ? count : imageIndex - 1);
    // }, 1000);
  };


  const arrow =
    direction === "right" ? (
      <div onClick={next}
        style={{
          position: "absolute",
          top: "0px",
          bottom: "0px",
          right: "-2rem",
          border: "1px solid white",
          height: "300px",
          width: "10px",
        }}
      />
    ) : (
      <div onClick={previous}
        style={{
          position: "absolute",
          top: "0px",
          left: "-2rem",
          border: "1px solid white",
          height: "300px",
          width: "10px",
        }}
      />
    );
  
  // const arrow =
  //   direction === "right" ? (
  //     <FaAngleRight
  //       onClick={next}
  //       style={{
  //         fontSize: "2rem",
  //         color: "white",
  //         position: "absolute",
  //         top: "calc(45%)",
  //         right: "-2rem",
  //         cursor: "pointer",
  //         opacity: 1,
  //         border: "1px solid white",
  //       }}
  //     />
  //   ) : (
  //     <FaAngleLeft
  //       onClick={previous}
  //       style={{
  //         fontSize: "2rem",
  //         color: "white",
  //         position: "absolute",
  //         top: "calc(45%)",
  //         left: "-2rem",
  //         cursor: "pointer",
  //         opacity: 1,
  //       }}
  //     />
  //   );

  return <div>{arrow}</div>;
};

export default Arrow;
