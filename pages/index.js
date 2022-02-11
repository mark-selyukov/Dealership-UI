import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Input, Button, CircularProgress } from "@chakra-ui/react";

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

  const SearchInput = <Input autoFocus variant="filled" />;

  const SearchButton = (
    <Button variant="outline" shadow="none">
      Search
    </Button>
  );

  return (
    <MenuedPage mt="250">
      {item?.item ? (
        <Text fontSize="6xl" zIndex="1">
          {item.item}
        </Text>
      ) : (
        <CircularProgress isIndeterminate />
      )}
      <EnterSearchBar
        SearchInput={SearchInput}
        SearchButton={SearchButton}
      ></EnterSearchBar>
    </MenuedPage>
  );
};

export default Home;
