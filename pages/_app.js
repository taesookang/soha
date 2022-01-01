import "../styles/globals.scss";
import "react-multi-carousel/lib/styles.css";
import { Layout } from "../components";
import { GlobalContextProvider } from "../contexts";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContextProvider>
  );
}

export default MyApp;
