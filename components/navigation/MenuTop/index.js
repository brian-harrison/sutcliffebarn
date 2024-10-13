import Link from "next/link";
import { useRouter } from "next/router";
import { links } from "../data";
import { Ul, Li } from "./Styled";

const MenuTop = function () {
  const { asPath } = useRouter();
  const menu = links.map((row) => {
    return (
      <Li key={row.name} active={asPath === `${row.path}` ? true : false}>
        <Link href={row.path}>{row.name}</Link>
      </Li>
    );
  });

  return <Ul>{menu}</Ul>;
};

export default MenuTop;