import { SearchIcon } from "@chakra-ui/icons";
import { ListItem, ListIcon } from "@chakra-ui/react";

import Search from "./Search";

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

const DropDownSearch = (value) => {
  const newSearchValues = [];

  fakeReturn.forEach((item) => {
    if (item.includes(value.toLocaleLowerCase()) && value != "") {
      newSearchValues.push(
        <ListItem
          onClick={() => Search(item)}
          _hover={{ cursor: "pointer" }}
          key={item}
        >
          <ListIcon as={SearchIcon} />
          {item}
        </ListItem>
      );
    }
  });

  return newSearchValues;
};

export default DropDownSearch;
