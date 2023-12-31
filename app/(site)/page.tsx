"use client";

import { useEffect, useState } from "react";
import { Header } from "../components/header";
import { JobList } from "./_components/job-list";
import { TData } from "../utils/typescript";

export default function Home() {
  const [data, setData] = useState<TData[] | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Header />
      {data && <JobList data={data} />}
    </>
  );
}
