import { Burger } from "./Styles";
import { useMenuContext } from "../../../context/mobileMenu";

const BurgerBar = () => {
  const [menuOpen, setMenuOpen] = useMenuContext();

  const onBurgerClicked = () => {
    menuOpen == false ? setMenuOpen(true) : setMenuOpen(false);
  };

  return (
    <Burger open={menuOpen} onClick={() => onBurgerClicked()}>
      <div />
    </Burger>
  );
};

export default BurgerBar;
