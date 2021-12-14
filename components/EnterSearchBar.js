import {
  memo,
  useRef,
  useState,
  Children,
  useEffect,
  cloneElement,
  isValidElement,
} from "react";
import {
  Box,
  List,
  Input,
  Button,
  Container,
  IconButton,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SearchIcon } from "@chakra-ui/icons";

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

const EnterSearchBar = ({ setIsSearch, children }) => {
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
    //question: do I want to do it like this or would it be better if I had returned the values themselves and mapped them in the useEffect?
    //1. I can break it down into just getting the values and then creating the whole element here
    //2. I could have the forEach loop in here and then a function that just maps things.
    //3. Now that I typed out my questions and worked on this a bit more it looks like the best way to do this would be to just have it be #2 but moving the function into this component.
    //   I feel as though moving things out into a separate file makes things look cleaner but I am not sure how true that is and if it would cause more confusion down the road
    const newSearchValues = DropDownSearch(value, router, setIsSearch);

    setSearchValues(newSearchValues);
  }, [value, setValue, setSearchValues]);

  const search = () => {
    router.push(`/search/${value}`);
  };

  const enterSearch = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const updatedChildren = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === Input) {
      return cloneElement(child, {
        autoComplete: "off",
        value: value,
        type: "search",
        id: "searchBar",
        placeholder: "Search",
        onKeyPress: enterSearch,
        onChange: handleValueChange,
      });
    }

    if (isValidElement(child) && child.type === Button) {
      return cloneElement(child, {
        onClick: () => search(),
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

  const MemoizedSearchDropDown = memo(searchDropDown);

  return (
    <Container maxW="60%" centerContent>
      <InputGroup ref={ref}>
        <InputLeftElement onClick={() => search}>
          <IconButton {...iconButtonProps} />
        </InputLeftElement>
        {updatedChildren.find(
          (element) => element.type.render?.displayName === "Input"
        )}
      </InputGroup>
      <MemoizedSearchDropDown />
      {updatedChildren.find(
        (element) => element.type.render?.displayName === "Button"
      )}
    </Container>
  );
};

export default EnterSearchBar;
