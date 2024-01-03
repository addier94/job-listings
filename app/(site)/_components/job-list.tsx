import { TData } from "@/app/utils/typescript";
import { JobItem } from "./job-item";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { FilteredLogsItem } from "@/app/components/filtered-logs-item";

interface JobListProps {
  data: TData[];
}

const uniqueTags = (languages: string[], newLanguage: string): string[] => {
  const uniqueTagsSet = new Set<string>();

  for (const language of languages) {
    uniqueTagsSet.add(language);
  }

  uniqueTagsSet.add(newLanguage);

  const uniqueTags = Array.from(uniqueTagsSet);
  return uniqueTags;
};

export const JobList = ({ data }: JobListProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const queryParams = searchParams.getAll("category"); // get array of tags from url

  const setTagToParams = (newLanguage: string) => {
    const newTags = uniqueTags(queryParams, newLanguage);

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          category: newTags,
        },
      },
      { skipNull: true, skipEmptyString: true },
    );

    router.push(url);
  };

  const clearParams = () => {
    router.push(pathname);
  };

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
          sm:gap-4
        "
      >
        {queryParams.length > 0 && (
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
              {queryParams.map((language) => (
                <FilteredLogsItem key={language} text={language} />
              ))}
            </div>
            <button onClick={clearParams}>Clear</button>
          </section>
        )}

        {data.map((job) => (
          <JobItem key={job.id} job={job} setTagToParams={setTagToParams} />
        ))}
      </article>
    </main>
  );
};
