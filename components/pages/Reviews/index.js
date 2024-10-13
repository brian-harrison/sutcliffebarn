import { pageDetails } from "../../../data/reviews";
import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicList = dynamic(() => import("./List"), {
  ssr: false,
});
import { Container, H1, P } from "./Styled";

const { id, metaTitle, metaDescription, h1, text_1, text_2, text_3 } =
  pageDetails;
const Details = function () {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <Container>
        <H1>{h1}</H1>
        <P>{text_1}</P>
        <DynamicList />
      </Container>
    </>
  );
};
export default Details;
