import Navigation from "../navigation";
import { MenuProvider } from "../../context/mobileMenu";
import { PageContainer } from "./pageContainer";
import Footer from "../Footer";
import { ScrollToTop } from "../scrollToTop";
import { SpeedInsights } from '@vercel/speed-insights/next';

const Layout = ({ children }) => {
  return (
    <MenuProvider>
      <Navigation />
        <PageContainer>
          {children}
          <Footer />
          <ScrollToTop />
        </PageContainer>
        <SpeedInsights />
    </MenuProvider>
  );
};
export default Layout;
