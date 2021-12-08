import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Container, Text } from "@chakra-ui/react";

import { fetcher } from "../utils/fetcher";
import EnterSearchBar from "../components/EnterSearchBar";

const Home = () => {
  const [item, setItem] = useState("");

  useEffect(() => {
    fetcher("dealership", "dealership").then((item) => {
      setItem(item);
    });
  }, []);

  if (!item) {
    return <div>Loading Dealership Api</div>;
  }

  return (
    <>
      <Container maxW="container.xl" centerContent>
        <Text fontSize="6xl">{item.item}</Text>
        <EnterSearchBar setItem={setItem}>
          <Input variant="filled" />
        </EnterSearchBar>
      </Container>
    </>
  );
};

export default Home;
