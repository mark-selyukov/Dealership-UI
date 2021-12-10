import { SearchIcon } from "@chakra-ui/icons";
import {
  Container,
  Text,
  HStack,
  VStack,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import EnterSearchBar from "./EnterSearchBar";

const MenuBar = () => {
  const ref = useRef(null);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isSearch && ref.current && !ref.current.contains(e.target)) {
        setIsSearch(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isSearch]);

  const menuBar = () => {
    return (
      <Container
        maxW="100%"
        zIndex="200"
        backgroundColor="gray"
        style={{ position: "fixed", top: 0 }}
        centerContent
      >
        <HStack
          spacing={{ sm: "20px", md: "30px", lg: "40px", xl: "50px" }}
          height="50px"
          zIndex={200}
        >
          <Text fontSize="2xl">Home</Text>
          <Text fontSize="2xl">Cars</Text>
          <Text fontSize="2xl">Dealerships</Text>
          <IconButton
            onClick={() => setIsSearch(true)}
            aria-label=""
            variant="ghost"
            icon={<SearchIcon />}
            _hover="ghost"
          />
        </HStack>
      </Container>
    );
  };

  const searchBar = () => {
    return (
      <Container
        maxW="100%"
        zIndex="200"
        backgroundColor="gray"
        style={{ position: "fixed", top: 0 }}
        ref={ref}
      >
        <VStack
          height="50px"
          spacing={0}
          zIndex={200}
          paddingTop={"5px"}
          paddingLeft="30%"
          paddingRight="30%"
        >
          <EnterSearchBar>
            <Input
              variant="filled"
              focusBorderColor="none"
              _focus={{ backgroundColor: "white" }}
            />
          </EnterSearchBar>
        </VStack>
      </Container>
    );
  };

  return !isSearch ? menuBar() : searchBar();
};

export default MenuBar;
