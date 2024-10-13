import { useState } from "react";
import { pageDetails } from "../../../data/home";
import Head from "next/head";
import { useRouter } from "next/router";
import NextImage from "../../NextImage";
import dynamic from "next/dynamic";
import photos from "./photos";

const DynamicBullets = dynamic(() => import("../BulletPoints"), {
  ssr: false,
});
const DynamicList = dynamic(() => import("../Reviews/List"), {
  ssr: false,
});
const DynamicNextPhotoGallery = dynamic(() => import("../../NextPhotoGallery"), {
  loading: () => "Loading...",
});
import {
  Button,
  H1,
  Containter,
  PhotosContainter,
  ReviewsContainter,
  P,
} from "./Styled";

// SEND THE PROPERTIES NEEDED FOR THE IMAGES
const properties = {
  columns: "2",
  photos,
  groupSizes: "(max-width: 768px) 50vw, 33vw",
  groupCrop: "w-600,h-600",
  singleSizes: "100vw",
  singleQuality: "20",
  groupQuality: "20",
  priority: false
}

const { metaTitle, metaDescription, h1, intro, text_1, text_2, text_3 } =
  pageDetails;

const Details = function () {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = (event) => {
    // event.persist();
    // if (event.target.srcset) {
      setIsLoaded(true);
    // }
  };

  const photo = {
    src: "sutcliffe-barn-front-from-woods.jpg",
    alt: "The front view of Sutcliffe Barn from the woods",
    width: "2500",
    height: "1588",
    quality: "20"
  };

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <NextImage
        isLoaded={isLoaded}
        src={photo.src}
        alt={photo.alt}
        height={photo.height}
        width={photo.width}
        quality={photo.quality}
        handleLoad={handleLoad}
      />

       <Containter>
        <PhotosContainter>
          <P>
            <strong>{intro}</strong>&nbsp;{text_1}
          </P>
          <DynamicNextPhotoGallery properties={properties} />
          <P>{text_2}</P>
        </PhotosContainter>

        <ReviewsContainter>
          <DynamicBullets />
          <H1>Some of our reviews</H1>
          <DynamicList />
          <Button onClick={() => router.push("/reviews")}>
            See more reviews
          </Button>
        </ReviewsContainter>
      </Containter>
    </>
  );
};
export default Details;
