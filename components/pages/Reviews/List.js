import Link from "next/link";
import { useRouter } from "next/router";
import { reviews } from "../../../data/reviews";
import { Review } from "./Styled";
import { H3, I, P } from "./Styled";

const List = function () {
  const router = useRouter();
  let count = 3;
// The count here is the number of reviews appearing on the home page
  router.pathname === "/" ? (count) : (count = reviews.length + 1);

  const reviewsList = reviews
    .slice(0, count)
    .map(({ id, credit, date, location, name, text, paragraphs, quote }) => {
      let more = "";

      if (router.pathname === "/" && paragraphs.length > 0) {
        more = <Link href={`/reviews/#${id}`}>More...</Link>;
      }
      return (
        <Review key={id} id={id} page={router.pathname}>
          <H3>&ldquo;{quote}&rdquo;</H3>
          <P>
            {text}&nbsp;
            {more}
          </P>
          {router.pathname === "/reviews" &&
            paragraphs.map((para, index) => {
              return <P key={index}>{para}</P>;
            })}
          <P>
            {name}<br />
            {location !== "" && location}
          </P>
          {credit !== "none" && <I>From {credit}</I>}
        </Review>
      );
    });

  return reviewsList;
};

export default List;
