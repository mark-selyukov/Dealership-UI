import { useEffect, useState } from "react";
import { fetcher } from "../utils/fetcher";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Container,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  IconButton,
} from "@chakra-ui/react";

const Home = () => {
  const [item, setItem] = useState("");
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

  useEffect(() => {
    fetcher("dealership", "dealership").then((item) => {
      setItem(item);
    });
  }, []);

  if (!item) {
    return <div>Loading Dealership Api</div>;
  }

  const search = () => {
    setItem({ item: value });
  };

  return (
    <>
      <Container maxW="container.xl" centerContent>
        <Text fontSize="6xl">{item.item}</Text>
        <InputGroup>
          <InputLeftElement onClick={search}>
            <IconButton
              aria-label="Search"
              variant="ghost"
              icon={<SearchIcon />}
              _hover={"ghost"}
            />
          </InputLeftElement>
          <Input
            value={value}
            onChange={handleChange}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                search();
              }
            }}
            variant="filled"
            type="search"
            placeholder="Search"
          />
        </InputGroup>
        <Button onClick={search} variant="outline">
          Search
        </Button>
      </Container>
    </>
  );
};

export default Home;
