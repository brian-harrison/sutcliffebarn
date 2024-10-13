import { useState } from "react";
import NextImage from "../NextImage";
import { Container, ModalBackground, Table, Row, Cell, ArrowCell, CloseCell } from "./Styles";
import { FaTimes, FaAngleRight, FaAngleLeft } from "react-icons/fa";
// import { color } from "@cloudinary/url-gen/qualifiers/background";

// RUNS ON HOME PAGE AND IN GALLERY OR ANY OTHER NEEDED
// BUT IS LOADED IN NextPhotoGallery WHERE IT GETS ITS PROPS
// NOTE: THE PICTURES HERE ALL NEED TO BE SQUARE
// AT THE MOMENT I CAN'T SEE WHERE THAT HAPPENS - THINK I TURNED IT OFF FOR TESTING SOMEWHERE!

// THE CAROUSEL POPS UP IN A MODAL ABOVE THE GRID OF IMAGES
// AND SHOWS A SINGLE IMAGE AT A TIME WITH ARROWS LEFT AND RIGHT
// IT HAS A CAPTION ALONG THE BOTTOM AND A CLOSE BUTTON ABOVE
// THE SELECTED IMAGE IS CHOSEN FROM THE GRID OF IMAGES IN NextPhotoGallery

// PROPS COME THROUGH FROM NextPhotoGallery
// BUT ARE ORIGINALY SET IN THE PARENT PAGE

const NextCarousel = function (props) {
  const { imageIndex, setImageIndex, photo, sizes, quality, priority, count } =
    props;

  

// photo CONTAINS THE SIZES

  const { description, url } = photo;

  // THIS DOES NOT APPEAR TO WORK PROPERLY -----------------------------
  const [isLoaded, setIsLoaded] = useState(true);

  const next = () => {
      setImageIndex(imageIndex === count ? 0 : imageIndex + 1);
  };

  const previous = () => {
      setImageIndex(imageIndex === 0 ? count : imageIndex - 1);
  };

  
  // DEFAULT STATE
  let selectedImage = <h3>No Picture Found</h3>;

  // count COMES THROUGH props
  if (count > -1) {
    selectedImage = (
      <ModalBackground imageIndex={imageIndex}>
        <Container>
          <Table>
            <Row>
              <CloseCell onClick={() => setImageIndex(-1)}
                cursor="true"
                alignText="right"
              >
                <FaTimes />
              </CloseCell>
            </Row>
            <Row>
              <Table>
                <Row>
                  <ArrowCell
                    onClick={previous}
                    width="5%"
                    cursor="true"
                  >
                    <FaAngleLeft />
                  </ArrowCell>
                  <Cell width="100%">
                    <NextImage
                      isLoaded={isLoaded}
                      setIsLoaded={setIsLoaded}
                      src={url}
                      alt={description}
                      height={photo.height}
                      width={photo.width}
                      sizes={photo.sizes}
                      quality={quality}
                      priority={priority}
                    />
                  </Cell>
                  <ArrowCell
                    onClick={next}
                    width="5%"
                    cursor="true"
                  >
                    <FaAngleRight />
                  </ArrowCell>
                </Row>
              </Table>
            </Row>
            <Row>
            <Cell
              style={{
                paddingTop: "1rem"
              }}
            >
              {description}
            </Cell>
            </Row>
          </Table>
        </Container>
      </ModalBackground>
    );
  }
  return selectedImage;
};

export default NextCarousel;
