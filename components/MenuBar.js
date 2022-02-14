import {
  Container,
  Text,
  HStack,
  VStack,
  IconButton,
  Input,
} from "@chakra-ui/react";
import Link from "next/link";
import { SearchIcon } from "@chakra-ui/icons";
import { memo, useEffect, useRef, useState } from "react";

import EnterSearchBar from "./EnterSearchBar";

const textProps = {
  fontSize: "2xl",
  _hover: { cursor: "pointer" },
};

const containerProps = {
  maxW: "100%",
  zIndex: "200",
  backgroundColor: "gray",
  style: { position: "fixed", top: 0 },
};

const stackProps = {
  height: "50px",
  zIndex: "200",
};

const vStackProps = {
  spacing: "0",
  paddingTop: "5px",
  paddingLeft: "15%",
  paddingRight: "15%",
};

const inputProps = {
  variant: "filled",
  focusBorderColor: "none",
  _focus: { backgroundColor: "white" },
};

const iconButtonProps = {
  variant: "ghost",
  icon: <SearchIcon />,
  _hover: "ghost",
};

const MenuBar = () => {
  const ref = useRef();
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

  if (isSearch) {
    return (
      <Container {...containerProps} ref={ref}>
        <VStack {...stackProps} {...vStackProps}>
          <EnterSearchBar
            setIsSearch={setIsSearch}
            SearchInput={<Input {...inputProps} autoFocus />}
          />
        </VStack>
      </Container>
    );
  }

  return (
    <Container {...containerProps} centerContent>
      <HStack
        {...stackProps}
        spacing={{ sm: "20px", md: "30px", lg: "40px", xl: "50px" }}
      >
        <Link href="/">
          <Text {...textProps}>Home</Text>
        </Link>
        <Link href="/cars">
          <Text {...textProps}>Cars</Text>
        </Link>
        <Link href="/dealerships">
          <Text {...textProps}>Dealerships</Text>
        </Link>
        <IconButton {...iconButtonProps} onClick={() => setIsSearch(true)} />
      </HStack>
    </Container>
  );
};

const MemoizedMenuBar = memo(MenuBar);

export default MemoizedMenuBar;
