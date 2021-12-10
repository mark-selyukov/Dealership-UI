import React from "react";
import { Container } from "@chakra-ui/react";

import MenuBar from "./MenuBar";

const MenuedPage = ({ children }) => {
  const enterInput = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        mt: "250",
      });
    }
    return child;
  });

  return (
    <Container maxW="100%" centerContent>
      <MenuBar />
      {enterInput}
    </Container>
  );
};

export default MenuedPage;
