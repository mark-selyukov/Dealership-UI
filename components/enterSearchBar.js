import {
  Box,
  List,
  Input,
  Button,
  ListItem,
  ListIcon,
  IconButton,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";

const searchTerms = [
  "a",
  "as",
  "asd",
  "asdf",
  "asdff",
  "sadf",
  "asdfasdfsd",
  "asd",
  "asdfasdf",
  "dsfasdasdf",
  "asdfweqds",
  "asdfasd",
  "asdfasdd",
  "asdfasdfd",
  "asdfasdfasdasdfasddddsadf",
  "asedfhjpawoqieuyfhajskdnf",
  "oiewqurpoiuwefpijdspfihasdpfh",
];

const EnterSearchBar = ({ setItem, children }) => {
  const [value, setValue] = useState("");
  const handleValueChange = (event) => setValue(event.target.value);

  const [searchValues, setSearchValues] = useState([]);
  const [idSearchValues, setIsSearchValues] = useState(true);

  useEffect(() => {
    const newSearchValues = [];

    searchTerms.forEach((item) => {
      if (item.includes(value.toLocaleLowerCase()) && value != "") {
        newSearchValues.push(
          <ListItem onClick={() => search(item)} _hover={{ cursor: "pointer" }}>
            <ListIcon as={SearchIcon} />
            {item}
          </ListItem>
        );
      }
    });

    setSearchValues(newSearchValues);
    setIsSearchValues(!(newSearchValues.length > 0));
  }, [value, setValue, idSearchValues, setIsSearchValues]);

  const search = (value) => {
    if (value.length > 0) {
      setItem({ item: value });
    }
  };

  const enterSearch = (e) => {
    if (e.key === "Enter") {
      search(value);
    }
  };

  const enterInput = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Input) {
      return React.cloneElement(child, {
        onKeyPress: enterSearch,
        placeholder: "Search",
        type: "search",
        value: value,
        onChange: handleValueChange,
      });
    }
    return child;
  });

  const searchDropDown = () => {
    if (searchValues.length <= 0) {
      return null;
    }
    return (
      <Box
        borderWidth="1px"
        borderRadius="lg"
        w="100%"
        p={4}
        color="black"
        hidden={idSearchValues}
      >
        <List spacing={2}>{searchValues}</List>
      </Box>
    );
  };

  return (
    <>
      <InputGroup>
        <InputLeftElement onClick={() => search(value)}>
          <IconButton
            aria-label=""
            variant="ghost"
            icon={<SearchIcon />}
            _hover={"ghost"}
          />
        </InputLeftElement>
        {enterInput}
      </InputGroup>
      {searchDropDown()}
      <Button onClick={() => search(value)} variant="outline">
        Search
      </Button>
    </>
  );
};

export default EnterSearchBar;
