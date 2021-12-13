import { Text } from "@chakra-ui/react";

import { useRouter } from "next/router";

import MenuedPage from "../../components/MenuedPage";

const Search = () => {
  const router = useRouter();
  return (
    <MenuedPage>
      <Text>{router.query.search}</Text>
    </MenuedPage>
  );
};

export default Search;
