import { pageDetails } from "../../../data/contact";
import Head from "next/head";
import { Container, DetailsContainer, Ul, H3, Li, P } from "./Styled";

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
        <DetailsContainer>
          <H3>{h1}</H3>
          <H3>Location and Details:</H3>
          <Ul>
            <Li>Sutcliffe Barn</Li>
            <Li>Colden</Li>
            <Li>Hebden Bridge</Li>
            <Li>West Yorkshire</Li>
            <Li>HX7 7HL</Li>
          </Ul>
          <Ul>
            <Li>telephone: 07970 817 136</Li>
            <Li>website: sutcliffebarn.com</Li>
            <Li>email: carolyn@sutcliffebarn.com</Li>
            <Li>what3words: submitted.bookshop.noodle</Li>
          </Ul>
          <P>For Bookings - We can be found on Airbnb & Vrbo</P>
        </DetailsContainer>
      </Container>
    </>
  );
};
export default Details;
