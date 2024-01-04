"use client";

import { useEffect, useState } from "react";
import { JobList } from "./_components/job-list";
import { TData } from "../utils/typescript";
import Header from "../components/header";

interface SearchPageProps {
  searchParams: {
    category: string | string[] | undefined;
  };
}

export default function Home({ searchParams: { category } }: SearchPageProps) {
  const [data, setData] = useState<TData[] | null>(null);

  useEffect(() => {
    const getData = async (): Promise<TData[]> => {
      const data = await fetch("/data.json");
      return await data.json();
    };

    getData().then((responseData) => {
      if (!category) {
        setData(responseData);
      } else {
        const hashParams = new Set(category);
        const filteredData = responseData.filter((item) => {
          if (Array.isArray(category)) {
            return item.languages.some((language) => hashParams.has(language));
          } else {
            return item.languages.includes(category);
          }
        });
        setData(filteredData);
      }
    });
  }, [category]);

  return (
    <>
      <Header />
      {data && <JobList data={data} />}
    </>
  );
}
