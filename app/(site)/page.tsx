"use client";

import { useEffect, useState } from "react";
import { Header } from "../components/header";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Header />
    </>
  );
}
