import { Box, Flex } from "@chakra-ui/react";

import MenuedPage from "../components/MenuedPage";
import CarComponent from "../components/CarComponent";

const Cars = () => {
  return (
    <MenuedPage>
      <Flex>
        <Box>
          <CarComponent />
        </Box>
        <Box>
          <CarComponent />
        </Box>
        <Box>
          <CarComponent />
        </Box>
      </Flex>
      <Flex>
        <Box>
          <CarComponent />
        </Box>
        <Box>
          <CarComponent />
        </Box>
      </Flex>
    </MenuedPage>
  );
};

export default Cars;
