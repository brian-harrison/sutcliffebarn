import Link from "next/link";
import { Header, LogoContainer, NavContainer } from "./Styled";
import Burger from "./Burger";
import MenuTop from "./MenuTop";
import MenuSide from "./MenuSide";
import MenuSideBackground from "./MenuSideBackground";

function Navigation() {
  return (
    <>
      <Burger />
      <MenuSide />
      <MenuSideBackground />
      <Header>
        <LogoContainer>
          <Link href="/">Sutcliffe Barn</Link>
        </LogoContainer>
        <NavContainer>
          <MenuTop />
        </NavContainer>
      </Header>
    </>
  );
}

export default Navigation;
