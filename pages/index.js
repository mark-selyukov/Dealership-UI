import { useEffect, useState } from "react";
import { fetcher } from "../utils/fetcher";
import { Container, Button, Text, Spinner } from "@chakra-ui/react";

export default function Home() {
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
        <Button>Click Me</Button>
      </Container>
    </>
  );
}
