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
import React, { useEffect, useRef, useState } from "react";

const searchTerms = [
  "a",
  "as",
  "asd",
  "asdf",
  "asdff",
  "sadf",
  "asdfasdfsd",
  "asdfopiyasdfhkjlj",
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
  const ref = useRef(null);
  const [value, setValue] = useState("");
  const handleValueChange = (event) => setValue(event.target.value);

  const [searchValues, setSearchValues] = useState([]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setSearchValues([]);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, []);

  useEffect(() => {
    const newSearchValues = [];

    searchTerms.forEach((item) => {
      if (item.includes(value.toLocaleLowerCase()) && value != "") {
        newSearchValues.push(
          <ListItem
            onClick={() => search(item)}
            _hover={{ cursor: "pointer" }}
            key={item}
          >
            <ListIcon as={SearchIcon} />
            {item}
          </ListItem>
        );
      }
    });

    setSearchValues(newSearchValues);
  }, [value, setValue, setSearchValues]);

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

  const updatedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Input) {
      return React.cloneElement(child, {
        onKeyPress: enterSearch,
        placeholder: "Search",
        type: "search",
        value: value,
        onChange: handleValueChange,
      });
    }

    if (React.isValidElement(child) && child.type === Button) {
      return React.cloneElement(child, {
        onClick: () => search(value),
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
        roundedBottom="lg"
        w="100%"
        p={4}
        color="black"
        backgroundColor={"pink"}
        hidden={searchValues.length <= 0}
        zIndex={20}
        ref={ref}
      >
        <List spacing={2}>{searchValues}</List>
      </Box>
    );
  };

  return (
    <>
      <InputGroup ref={ref}>
        <InputLeftElement onClick={() => search(value)}>
          <IconButton
            aria-label=""
            variant="ghost"
            icon={<SearchIcon />}
            _hover="ghost"
          />
        </InputLeftElement>
        {updatedChildren.find(
          (element) => element.type.render?.displayName === "Input"
        )}
      </InputGroup>
      {searchDropDown()}
      {updatedChildren.find(
        (element) => element.type.render?.displayName === "Button"
      )}
    </>
  );
};

export default EnterSearchBar;
