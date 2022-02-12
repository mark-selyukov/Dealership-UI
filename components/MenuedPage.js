import { Container } from "@chakra-ui/react";
import { isValidElement, cloneElement, Children } from "react";

import MenuBar from "./MenuBar";

const MenuedPage = ({ children, mt = "50" }) => {
  const searchBar = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        mt: mt,
      });
    }
    return child;
  });

  return (
    <Container maxW="100%" centerContent>
      <MenuBar />
      {searchBar}
    </Container>
  );
};

export default MenuedPage;
