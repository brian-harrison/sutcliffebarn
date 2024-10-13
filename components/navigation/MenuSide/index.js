import Link from "next/link";
import { useRouter } from "next/router";
import { useMenuContext } from "../../../context/mobileMenu";
import { links } from "../data";
import { Ul, Li } from "./Styled";

const MenuSide = function () {
  const [menuOpen, setMenuOpen] = useMenuContext();
  const { asPath } = useRouter();
  const menu = links.map((row) => {
    return (
      <Li
        key={row.name}
        active={asPath === `${row.path}` ? true : false}
        onClick={() => setMenuOpen(false)}
      >
        <Link href={row.path}>{row.name}</Link>
      </Li>
    );
  });

  return <Ul menuOpen={menuOpen}>{menu}</Ul>;
};

export default MenuSide;
