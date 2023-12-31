import { Badge } from "@/app/components/Badge";
import { TData } from "@/app/utils/typescript";
import Image from "next/image";

interface JobItemProps {
  job: TData;
}
export const JobItem = ({ job }: JobItemProps) => {
  return (
    <div
      className={`
        bg-white
        rounded-md
        p-6
        shadow-xl
        flex
        flex-col
        gap-3
        ${job.featured && "border-l-[5px] border-primary"}
        sm:flex-row
        sm:justify-between
    `}
    >
      <section
        className="
        sm:flex
        sm:items-center
        sm:gap-4
      "
      >
        <figure
          className="
              relative
              w-14
              h-14
              sm:w-20
              sm:h-20
              -mt-12
              sm:mt-0
            "
        >
          <Image
            src={job.logo}
            width={0}
            height={0}
            alt={job.company}
            className="w-full"
          />
        </figure>
        <div
          className="
            mt-2
            sm:mt-0
            sm:gap-2
            flex
            flex-col
            gap-3
          "
        >
          <div className="flex gap-4 items-center">
            <h2 className="text-primary font-headingBold">{job.company}</h2>
            {job.new && <Badge text="NEW!" bgColor="bg-primary" />}
            {job.featured && <Badge text="FEATURED" bgColor="bg-black" />}
          </div>
          <h1
            className="
            font-headingBold
            hover:text-primary
            transition
            duration-200
            cursor-pointer
            "
          >
            {job.position}
          </h1>

          <div className="text-neutralVeryDark">
            <p
              className="
                text-neutralDark
                flex
                items-center
                h-6
              "
            >
              {job.postedAt}
              <span className="text-xs mx-2 pt-1">*</span>
              {job.contract}
              <span className="text-xs mx-2 pt-1">*</span>
              {job.location}
            </p>
          </div>
        </div>
      </section>

      <div className="border sm:hidden" />

      <section
        className="
        flex 
        flex-wrap 
        gap-4
        items-center
      "
      >
        {job.languages.map((language, id) => (
          <button
            key={id}
            className="
              bg-neutralLightFilter
              text-primary
              font-headingBold
              py-1
              px-2
              rounded-sm
              transition
              duration-200
              hover:bg-primary
              hover:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-primary
              focus:ring-offset-2
              focus:ring-offset-white
          "
          >
            {language}
          </button>
        ))}
      </section>
    </div>
  );
};
