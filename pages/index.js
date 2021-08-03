import { useEffect, useState } from "react";
import { fetcher } from "../utils/fetcher";

export default function Home() {
  const [item, setItem] = useState("");
  useEffect(() => {
    fetcher("dealership", "dealership").then((item) => {
      setItem(item);
    });
  });

  if (!item) {
    return <div>Loading Dealership Api</div>;
  }

  return <div>{item}</div>;
}
