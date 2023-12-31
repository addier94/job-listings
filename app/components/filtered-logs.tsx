import Image from "next/image";

interface FilterProps {
  text: string;
}

export const FilteredLogs = ({ text }: FilterProps) => {
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
