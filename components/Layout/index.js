import Navigation from "../navigation";
import { MenuProvider } from "../../context/mobileMenu";
import { PageContainer } from "./pageContainer";
import Footer from "../Footer";
import { ScrollToTop } from "../scrollToTop";


const Layout = ({ children }) => {
  return (
    <MenuProvider>
      <Navigation />
        <PageContainer>
          {children}
          <Footer />
          <ScrollToTop />
        </PageContainer>
    </MenuProvider>
  );
};
export default Layout;
