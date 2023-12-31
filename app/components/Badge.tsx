interface BadgeProps {
  text: string;
  bgColor: string;
}
export const Badge = ({ text, bgColor }: BadgeProps) => {
  return (
    <span
      className={`
      ${bgColor}
      text-white 
      py-1 
      px-2 
      font-headingBold
      rounded-full 
      text-sm`}
    >
      {text}
    </span>
  );
};
