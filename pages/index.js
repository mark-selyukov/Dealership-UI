import { Input, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

import { fetcher } from "../utils/fetcher";

import MenuedPage from "../components/MenuedPage";
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
    <MenuedPage>
      <Text fontSize="6xl" zIndex={1}>
        {item.item}
      </Text>
      <EnterSearchBar setItem={setItem}>
        <Input variant="filled" datalist={["mark", "bob"]} roundedBottom="lg" />
        <Button variant="outline" shadow={"none"}>
          Search
        </Button>
      </EnterSearchBar>
    </MenuedPage>
  );
};

export default Home;
