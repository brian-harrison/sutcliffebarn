import { pageDetails } from "../../../data/gallery";
import Head from "next/head";
import NextPhotoGallery from "../../NextPhotoGallery";
import photos from "./photos";
import { H1 } from './Styled';

// SEND THE PROPERTIES NEEDED FOR THE IMAGES IN BOTH THE GRID & AS A SINGLE

const { id, metaTitle, metaDescription, h1, text_1 } = pageDetails;
const properties = {
  columns: "4",
  photos,
  groupSizes: "(max-width: 768px) 50vw, 25vw",
  groupCrop: "w-600,h-600",
  groupQuality: "20",
  singleSizes: "100vw",
  singleQuality: "20",
  priority: false
}
const Details = function () {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <H1>{h1}</H1>
      <p>{text_1}</p>
      <NextPhotoGallery properties={properties} />
    </>
  );
};
export default Details;
