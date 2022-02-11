import { memo, useRef, useState, useEffect, cloneElement } from "react";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Container,
  IconButton,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SearchIcon } from "@chakra-ui/icons";

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

const fakeReturn = [
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

const EnterSearchBar = ({ setIsSearch, SearchInput, SearchButton }) => {
  const ref = useRef();
  const router = useRouter();
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
    const newSearchValues = [];

    const onClick = (item) => {
      if (setIsSearch) {
        setIsSearch(false);
      }

      router.push(`/search/${item}`);
    };

    fakeReturn.forEach((item) => {
      if (item.includes(value.toLocaleLowerCase()) && value != "") {
        newSearchValues.push(
          <ListItem
            onClick={() => onClick(item)}
            _hover={{ cursor: "pointer" }}
          >
            <ListIcon onClick={() => onClick(item)} as={SearchIcon} />
            {item}
          </ListItem>
        );
      }
    });

    setSearchValues(newSearchValues);
  }, [value, setValue, setSearchValues]);

  const search = () => {
    const trimmedSearch = value.trim();
    if (value.toLocaleLowerCase !== "search" && trimmedSearch) {
      router.push(`/search/${trimmedSearch}`);
    }
  };

  const enterSearch = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

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

  const NewSearchInput = cloneElement(SearchInput, {
    autoComplete: "off",
    value: value,
    type: "search",
    id: "searchBar",
    placeholder: "Search",
    onKeyUp: enterSearch,
    onChange: handleValueChange,
  });

  const MemoizedSearchButton = memo(() => {
    if (!SearchButton) {
      return null;
    }

    return cloneElement(SearchButton, {
      onClick: () => search(),
      id: "searchButton",
    });
  });

  return (
    <Container maxW="60%" centerContent>
      <InputGroup ref={ref}>
        <InputLeftElement onClick={search}>
          <IconButton {...iconButtonProps} />
        </InputLeftElement>
        {NewSearchInput}
      </InputGroup>
      {searchDropDown()}
      <MemoizedSearchButton />
    </Container>
  );
};

export default EnterSearchBar;
