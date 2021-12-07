import {
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const EnterButton = ({ enterFunction }) => {
  return (
    <Button onClick={enterFunction} variant="outline">
      Search
    </Button>
  );
};

const EnterSearchBar = ({
  inputValue,
  inputChangeFunction,
  searchFunction,
  ariaLabel = "",
}) => {
  return (
    <InputGroup>
      <InputLeftElement onClick={searchFunction}>
        <IconButton
          aria-label={ariaLabel}
          variant="ghost"
          icon={<SearchIcon />}
          _hover={"ghost"}
        />
      </InputLeftElement>
      <Input
        value={inputValue}
        onChange={inputChangeFunction}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            searchFunction();
          }
        }}
        variant="filled"
        type="search"
        placeholder="Search"
      />
    </InputGroup>
  );
};

export { EnterButton, EnterSearchBar };
