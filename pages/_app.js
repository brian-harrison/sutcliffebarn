import {  Montserrat, Roboto_Condensed } from 'next/font/google';
import "../components/Layout/global.css";
import Layout from "../components/Layout";

export const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['variable']
})
export const montserrat = Montserrat({
  subsets: ['latin']
});

function App({ Component, pageProps }) {

  return (
    <main className={montserrat.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default App;