import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import store from "../redux/app/store";
import Layout from "../components/Layout/Layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
