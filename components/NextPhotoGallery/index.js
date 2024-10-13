import { useState } from "react";
import NextImage from "../NextImage";
import NextCarousel from "../NextCarousel";
import { Div, GridDiv } from "./Styles";

// THIS IS WHERE IT IS ALL PUT TOGETHER
// WE SEND THE PROPS TO NextImage
// AND THROUGH THE CAROUSEL FOR ITS IMAGES

// COLLECT THE PROPERTIES FROM THE PARENT PAGE
// SO WE CAN USE THIS CODE IN MORE PLACES

const NextPhotoGallery = function ({ properties }) {
  const {
    columns,
    photos,
    groupSizes,
    groupCrop,
    groupQuality,
    singleSizes,
    singleQuality,
    priority,
  } = properties;

  // imageIndex is set when an image in the gallery is clicked
  // it is then 
  const [imageIndex, setImageIndex] = useState(-1);
  // const [isLoaded, setIsLoaded] = useState(false);
  const count = photos.length - 1;

  // const handleLoad = () => {
  //     setIsLoaded(true);
  // };

// This shows square thumbnails of all the images in a grid format
  const images = photos.map(({ id, description, url }, index) => {
    const croppedUrl = `${url}${groupCrop}`;

    return (
      <Div key={id} onClick={() => setImageIndex(index)}>
        <NextImage
          // isLoaded={isLoaded}
          src={url}
          alt={description}
          height="600"
          width="600"
          // fullSize="false"
          groupCrop={groupCrop}
          sizes={groupSizes}
          quality={groupQuality}
          priority={priority}
          // handleLoad={handleLoad}
        />
      </Div>
    );
  });

// THE GRID SHOWS THE SQUARE IMAGES IN COLUMNS
// THEN THE NextCarousel IS ADDED TO THE PAGE - BUT NOT VISIBLE
// READY TO APPEAR IN A MODAL WHEN AN IMAGE IS CLICKED ON
// useSquare IS USED IN THE NextImage TO DETERMINE WHETHER TO LOOK FOR A SIZE
// OR JUST USE IT SQUARED
  return (
    <>
      <GridDiv columns={columns}>{images}</GridDiv>

      {imageIndex > -1 && (
        <NextCarousel
          // isLoaded={isLoaded}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          photo={photos[imageIndex]}
          sizes={singleSizes}
          // fullSize="true"
          quality={singleQuality}
          priority={priority}
          count={count}
        />
      )}
    </>
  );
};

export default NextPhotoGallery;
