import { TData } from "@/app/utils/typescript";
import { JobItem } from "./job-item";
import { useEffect, useState } from "react";
import { FilteredLogs } from "@/app/components/filtered-logs";

interface JobListProps {
  data: TData[];
}
const getUniqueLanguage = (jobs: TData[]): string[] => {
  const uniqueLanguagesSet = new Set<string>();

  for (const job of jobs) {
    for (const language of job.languages) {
      uniqueLanguagesSet.add(language);
    }
  }

  const uniqueLanguages = Array.from(uniqueLanguagesSet);
  return uniqueLanguages;
};

export const JobList = ({ data }: JobListProps) => {
  const [tempFilter, setTempFilter] = useState<string[]>([]);

  useEffect(() => {
    const languages = getUniqueLanguage(data);
    setTempFilter(languages);
  }, [data]);

  return (
    <main
      className="
        bg-neutralLight
        px-4
        py-10
        min-h-[calc(100vh-10rem)]
      "
    >
      <article
        className="
          max-w-[375px]
          sm:max-w-[1440px]
          mx-auto
          flex
          flex-col
          gap-10
        "
      >
        <section
          className="
            p-6
            bg-white
            shadow-xl
            rounded-md
            -mt-20
            z-10
            relative
            flex
            justify-between
            items-center
            gap-4
            "
        >
          <div
            className="
              flex
              flex-wrap
              gap-4
            "
          >
            {tempFilter.map((language) => (
              <FilteredLogs key={language} text={language} />
            ))}
          </div>
          <button>Clear</button>
        </section>
        {data.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </article>
    </main>
  );
};
