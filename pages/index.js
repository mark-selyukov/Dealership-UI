import { useEffect, useState } from "react";
import { fetcher } from "../utils/fetcher";

export default function Home() {
  const [item, setItem] = useState("");

  useEffect(async () => {
    const response = await fetcher("dealership", "dealership");
    setItem(response.item);
  });

  return <div>{item}</div>;
}
