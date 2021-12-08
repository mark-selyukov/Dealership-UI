import { Container, Text } from "@chakra-ui/react";

const MenuBar = () => {
  return (
    <Container
      maxW="container.xl"
      centerContent
      style={{ position: "sticky", top: 0 }}
    >
      <Text fontSize="6xl">Menu Bar</Text>
    </Container>
  );
};

export default MenuBar;
