import {
  Box,
  List,
  Input,
  Button,
  IconButton,
  InputGroup,
  InputLeftElement,
  Container,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useEffect, useRef, useState } from "react";

import Search from "../utils/Search";
import DropDownSearch from "../utils/DropDownSearch";

const boxProps = {
  borderWidth: "1px",
  roundedBottom: "lg",
  backgroundColor: "white",
  w: "100%",
  p: "4",
  color: "black",
  zIndex: "20",
};

const iconButtonProps = {
  variant: "ghost",
  icon: <SearchIcon />,
  _hover: "ghost",
};

const EnterSearchBar = ({ children }) => {
  const ref = useRef(null);
  const [value, setValue] = useState("");
  const handleValueChange = (event) => setValue(event.target.value);

  const [searchValues, setSearchValues] = useState([]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        e.target.id !== "searchButton" &&
        e.target.id !== "searchBar"
      ) {
        setSearchValues([]);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, []);

  useEffect(() => {
    //question: do I want to do it like this or would it be better if I had returned the values themselves and mapped them in the useEffect?
    const newSearchValues = DropDownSearch(value);

    setSearchValues(newSearchValues);
  }, [value, setValue, setSearchValues]);

  const enterSearch = (e) => {
    if (e.key === "Enter") {
      Search(value);
    }
  };

  const updatedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Input) {
      return React.cloneElement(child, {
        value: value,
        type: "search",
        id: "searchBar",
        placeholder: "Search",
        onKeyPress: enterSearch,
        onChange: handleValueChange,
      });
    }

    if (React.isValidElement(child) && child.type === Button) {
      return React.cloneElement(child, {
        onClick: () => Search(value),
        id: "searchButton",
      });
    }

    return child;
  });

  const searchDropDown = () => {
    if (searchValues.length <= 0) {
      return null;
    }
    return (
      <Box {...boxProps} hidden={searchValues.length <= 0} ref={ref}>
        <List spacing={2}>{searchValues}</List>
      </Box>
    );
  };

  return (
    <Container maxW="60%" centerContent>
      <InputGroup ref={ref}>
        <InputLeftElement onClick={() => Search(value)}>
          <IconButton {...iconButtonProps} />
        </InputLeftElement>
        {updatedChildren.find(
          (element) => element.type.render?.displayName === "Input"
        )}
      </InputGroup>
      {searchDropDown()}
      {updatedChildren.find(
        (element) => element.type.render?.displayName === "Button"
      )}
    </Container>
  );
};

export default EnterSearchBar;
