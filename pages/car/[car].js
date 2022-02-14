import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import MenuedPage from "../../components/MenuedPage";

const Cars = () => {
  const router = useRouter();
  return (
    <MenuedPage>
      <Text>{router.query.car}</Text>
    </MenuedPage>
  );
};

export default Cars;
