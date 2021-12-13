import React from "react";
import { Container } from "@chakra-ui/react";

import MenuBar from "./MenuBar";

const MenuedPage = ({ children, mt = "50" }) => {
  const searchBar = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
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
