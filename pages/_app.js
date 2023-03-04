import Footer from "@/components/footer";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/homepage.css";
import "../styles/Carouselscard.css";
import "../styles/cartproduct.css";
import "../styles/Carouseltwo.css";

import { Provider } from "react-redux";

import { store } from "@/store/store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        <Footer />
      </ChakraProvider>
    </>
  );
}

