import { SearchIcon } from "@chakra-ui/icons";
import { ListItem, ListIcon } from "@chakra-ui/react";

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

const DropDownSearch = (value, router, setIsSearch) => {
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
        <ListItem onClick={() => onClick(item)} _hover={{ cursor: "pointer" }}>
          <ListIcon onClick={() => onClick(item)} as={SearchIcon} />
          {item}
        </ListItem>
      );
    }
  });

  return newSearchValues;
};

export default DropDownSearch;
