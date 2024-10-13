import { Background } from "./Styled";
import { useMenuContext } from "../../../context/mobileMenu";

const SideMenuBackground = function () {
  const [menuOpen, setMenuOpen] = useMenuContext();

  return <Background menuOpen={menuOpen} onClick={() => setMenuOpen(false)} />;
};

export default SideMenuBackground;
