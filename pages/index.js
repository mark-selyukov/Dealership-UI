import { useEffect, useState } from "react";
import { fetcher } from "../utils/fetcher";
import { EnterButton, EnterSearchBar } from "../components/enterComponents";
import { Container, Text } from "@chakra-ui/react";

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
        <EnterSearchBar
          inputValue={value}
          inputChangeFunction={handleChange}
          searchFunction={search}
          ariaLabel={"main search bar"}
        />
        <EnterButton enterFunction={search} />
      </Container>
    </>
  );
};

export default Home;
