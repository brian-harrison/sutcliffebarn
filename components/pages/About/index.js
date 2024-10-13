import { pageDetails } from "../../../data/about";
import Head from "next/head";
import { Containter, H1 } from "./Styled";

const { metaTitle, metaDescription, h1, text_1 } = pageDetails;
const Details = function () {
  const text1 = <div dangerouslySetInnerHTML={{__html: text_1}} />

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <Containter>
        <H1>{h1}</H1>
        {text1}
      </Containter>
    </>
  );
};
export default Details;
