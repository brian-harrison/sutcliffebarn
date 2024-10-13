import { pageDetails } from "../../../data/booking";
import Head from "next/head";
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
          <P>{text_2}</P>
          <P>{text_3}</P>
      </Container>
    </>
  );
};
export default Details;
