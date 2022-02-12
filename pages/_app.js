import { ChakraProvider } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";

const MyApp = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
