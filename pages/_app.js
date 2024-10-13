import { montserrat, anton } from '../lib/fonts';
import "../components/Layout/global.css";
import Layout from "../components/Layout";

function App({ Component, pageProps }) {

  return (
    <main className={montserrat.className}>

      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>{`
        :root {
          --anton-condensed-font: ${anton.style.fontFamily};
        }
      `}</style>
    </main>
  );
}

export default App;