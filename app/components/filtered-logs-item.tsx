import Image from "next/image";
import qs from "query-string";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface FilteredLogsItemProps {
  readonly text: string;
}

export const FilteredLogsItem = ({ text }: FilteredLogsItemProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const deleteTagFromParams = (tag: string): void => {
    const queryParams = searchParams.getAll("category"); // get array of tags from url

    const newTags = queryParams.filter((queryTag) => queryTag !== tag); // filter out the tag we want to delete

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

  return (
    <div
      className="
        inline-flex
        items-center
        text-primary
        bg-neutralLightFilter
        h-9
        rounded-l-md
      "
    >
      <span
        className="
          font-headingBold
          px-3
        "
      >
        {text}
      </span>
      <button
        onClick={() => deleteTagFromParams(text)}
        className="
          bg-primary
          h-full
          w-9
          flex
          items-center
          justify-center
          rounded-r-md
          transition
          duration-200
          hover:bg-black
        "
      >
        <figure
          className="
                w-4 h-4"
        >
          <Image
            alt="Remove filter icon"
            src="/images/icon-remove.svg"
            className="w-full"
            width={0}
            height={0}
          />
        </figure>
      </button>
    </div>
  );
};
