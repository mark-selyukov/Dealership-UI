import { Container } from "@chakra-ui/react";

import MenuBar from "./MenuBar";

const MenuedPage = ({ children, mt = "50" }) => {
  return (
    <Container maxW="100%" centerContent>
      <MenuBar />
      <Container mt={mt} maxW="100%" centerContent>
        {children}
      </Container>
    </Container>
  );
};

export default MenuedPage;
